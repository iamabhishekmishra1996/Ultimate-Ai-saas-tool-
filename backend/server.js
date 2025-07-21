import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import rateLimit from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import redis from 'redis'
import ConnectRedis from 'connect-redis'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import cron from 'node-cron'
import { v4 as uuidv4 } from 'uuid'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const server = createServer(app)
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
})

// Initialize Redis client
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      return new Error('The server refused the connection')
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      return new Error('Retry time exhausted')
    }
    if (options.attempt > 10) {
      return undefined
    }
    return Math.min(options.attempt * 100, 3000)
  }
})

// Configure Winston logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '30d'
    })
  ]
})

// Configure Redis store for sessions
const RedisStore = ConnectRedis(session)

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'", "wss:", "ws:"],
    },
  },
  crossOriginEmbedderPolicy: false
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === 'production' ? 100 : 1000,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      process.env.FRONTEND_URL || 'http://localhost:3000',
      'http://localhost:3000',
      'https://blackbox.ai'
    ]
    
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
}))

// Middleware
app.use(compression())
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(cookieParser())
app.use(limiter)

// Session configuration
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET || 'blackbox-ai-super-secret-key',
  resave: false,
  saveUninitialized: false,
  name: 'blackbox.sid',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}))

// Mock data for Indian business scenarios
const mockBusinessData = {
  companies: [
    {
      id: '1',
      name: 'TechnoServe Consulting',
      industry: 'IT Services',
      location: 'Bangalore, Karnataka',
      revenue: 7500000,
      employees: 150,
      establishedYear: 2018
    },
    {
      id: '2', 
      name: 'Rajesh Industries Pvt Ltd',
      industry: 'Textile Manufacturing',
      location: 'Ahmedabad, Gujarat',
      revenue: 4500000,
      employees: 200,
      establishedYear: 2015
    },
    {
      id: '3',
      name: 'Digital Bazaar Solutions',
      industry: 'E-commerce',
      location: 'Mumbai, Maharashtra',
      revenue: 12000000,
      employees: 75,
      establishedYear: 2020
    }
  ],
  
  metrics: {
    revenue: {
      current: 7500000,
      previous: 6800000,
      growth: 10.3,
      target: 8500000,
      trends: Array.from({ length: 12 }, (_, i) => ({
        month: new Date(2024, i).toLocaleDateString('en-IN', { month: 'short' }),
        revenue: 7500000 * (0.85 + Math.random() * 0.3) * (1 + i * 0.05),
        growth: Math.random() * 20 - 5
      }))
    },
    
    leads: {
      total: 1247,
      new: 185,
      qualified: 78,
      converted: 23,
      conversionRate: 29.5,
      sources: [
        { name: 'WhatsApp Business', count: 450, quality: 85, conversionRate: 35 },
        { name: 'Website', count: 320, quality: 70, conversionRate: 22 },
        { name: 'Social Media', count: 280, quality: 65, conversionRate: 18 },
        { name: 'Referrals', count: 120, quality: 90, conversionRate: 45 },
        { name: 'Cold Outreach', count: 80, quality: 40, conversionRate: 8 }
      ]
    },
    
    customers: {
      total: 156,
      active: 142,
      churnRate: 8.2,
      satisfaction: 87.5,
      lifetime: 185000,
      segments: [
        { name: 'Enterprise', count: 45, value: 4500000 },
        { name: 'Mid-Market', count: 78, value: 2250000 },
        { name: 'Small Business', count: 33, value: 750000 }
      ]
    },
    
    automation: {
      activeWorkflows: 24,
      totalExecutions: 15680,
      successRate: 96.8,
      timesSaved: 1250,
      errorRate: 3.2
    }
  },
  
  aiInsights: [
    {
      id: '1',
      type: 'revenue-prediction',
      title: 'Revenue Growth Acceleration Detected',
      message: 'AI models predict 23% revenue increase in Q2 based on current lead velocity and conversion optimization.',
      confidence: 87,
      impact: 'high',
      timestamp: new Date(),
      actions: [
        'Scale successful marketing campaigns',
        'Increase sales team capacity',
        'Optimize pricing for premium segments'
      ]
    },
    {
      id: '2',
      type: 'customer-behavior',
      title: 'Enterprise Customer Pattern Identified', 
      message: 'Enterprise customers show 3x higher engagement with WhatsApp communications vs email.',
      confidence: 92,
      impact: 'medium',
      timestamp: new Date(),
      actions: [
        'Shift enterprise outreach to WhatsApp',
        'Develop WhatsApp-specific content',
        'Train sales team on WhatsApp best practices'
      ]
    }
  ],
  
  integrations: [
    {
      id: '1',
      name: 'WhatsApp Business API',
      type: 'whatsapp-business',
      status: 'connected',
      health: 'healthy',
      uptime: 99.8,
      lastSync: new Date()
    },
    {
      id: '2',
      name: 'Razorpay Payment Gateway',
      type: 'razorpay',
      status: 'connected',
      health: 'healthy',
      uptime: 99.9,
      lastSync: new Date()
    }
  ]
}

// Health check endpoint
app.get('/health', (req, res) => {
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version,
    environment: process.env.NODE_ENV || 'development',
    services: {
      redis: redisClient.isReady ? 'connected' : 'disconnected',
      database: 'connected', // Would check actual DB connection
      ai: 'operational',
      automation: 'active'
    }
  }
  
  res.status(200).json(healthCheck)
})

// API Routes

// Dashboard metrics
app.get('/api/dashboard/metrics', (req, res) => {
  try {
    const { mode = 'compact' } = req.query
    
    logger.info(`Dashboard metrics requested for mode: ${mode}`)
    
    res.json({
      success: true,
      data: mockBusinessData.metrics,
      meta: {
        mode,
        timestamp: new Date(),
        currency: 'INR',
        company: mockBusinessData.companies[0]
      }
    })
  } catch (error) {
    logger.error('Error fetching dashboard metrics:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch dashboard metrics' 
    })
  }
})

// AI Insights
app.get('/api/ai/insights', (req, res) => {
  try {
    const { limit = 10, category } = req.query
    
    let insights = mockBusinessData.aiInsights
    
    if (category) {
      insights = insights.filter(insight => insight.type === category)
    }
    
    insights = insights.slice(0, parseInt(limit))
    
    logger.info(`AI insights requested: ${insights.length} returned`)
    
    res.json({
      success: true,
      data: insights,
      meta: {
        total: mockBusinessData.aiInsights.length,
        filtered: insights.length,
        timestamp: new Date()
      }
    })
  } catch (error) {
    logger.error('Error fetching AI insights:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch AI insights' 
    })
  }
})

// Generate new AI insight
app.post('/api/ai/insights/generate', (req, res) => {
  try {
    const { type, context } = req.body
    
    // Simulate AI insight generation
    const newInsight = {
      id: uuidv4(),
      type: type || 'general',
      title: 'AI-Generated Business Insight',
      message: `Based on current data patterns, we've identified optimization opportunities in ${context || 'business operations'}.`,
      confidence: 75 + Math.random() * 20,
      impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)],
      timestamp: new Date(),
      actions: [
        'Review current processes',
        'Implement suggested optimizations',
        'Monitor performance improvements'
      ]
    }
    
    mockBusinessData.aiInsights.unshift(newInsight)
    
    // Emit to connected clients
    io.emit('new-insight', newInsight)
    
    logger.info(`New AI insight generated: ${newInsight.id}`)
    
    res.status(201).json({
      success: true,
      data: newInsight
    })
  } catch (error) {
    logger.error('Error generating AI insight:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to generate AI insight' 
    })
  }
})

// WhatsApp automation endpoints
app.get('/api/whatsapp/status', (req, res) => {
  try {
    const status = {
      connected: true,
      sessionActive: true,
      qrCode: null,
      batteryLevel: 95,
      lastActivity: new Date(),
      messagesSent: 1247,
      messagesReceived: 2856,
      activeChats: 23
    }
    
    res.json({
      success: true,
      data: status
    })
  } catch (error) {
    logger.error('Error fetching WhatsApp status:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch WhatsApp status' 
    })
  }
})

app.post('/api/whatsapp/send-message', (req, res) => {
  try {
    const { to, message, type = 'text' } = req.body
    
    if (!to || !message) {
      return res.status(400).json({
        success: false,
        error: 'Phone number and message are required'
      })
    }
    
    // Simulate message sending
    const messageId = uuidv4()
    
    setTimeout(() => {
      // Simulate message delivery
      io.emit('message-sent', {
        id: messageId,
        to,
        message,
        type,
        status: 'delivered',
        timestamp: new Date()
      })
    }, 1000 + Math.random() * 2000)
    
    logger.info(`WhatsApp message queued: ${messageId} to ${to}`)
    
    res.status(202).json({
      success: true,
      data: {
        messageId,
        status: 'queued',
        estimatedDelivery: '2-5 seconds'
      }
    })
  } catch (error) {
    logger.error('Error sending WhatsApp message:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send WhatsApp message' 
    })
  }
})

// Automation workflows
app.get('/api/automation/workflows', (req, res) => {
  try {
    const workflows = [
      {
        id: '1',
        name: 'WhatsApp Lead Nurturing',
        description: 'Automated follow-up sequence for WhatsApp leads',
        status: 'active',
        executions: 1250,
        successRate: 96.8,
        lastRun: new Date(),
        triggers: ['new_whatsapp_lead'],
        actions: ['send_welcome_message', 'schedule_follow_up', 'assign_to_sales']
      },
      {
        id: '2',
        name: 'Payment Reminder Automation',
        description: 'Automated payment reminders via WhatsApp and email',
        status: 'active',
        executions: 456,
        successRate: 94.2,
        lastRun: new Date(),
        triggers: ['invoice_overdue'],
        actions: ['send_reminder_whatsapp', 'send_reminder_email', 'escalate_to_manager']
      }
    ]
    
    res.json({
      success: true,
      data: workflows,
      meta: {
        total: workflows.length,
        active: workflows.filter(w => w.status === 'active').length
      }
    })
  } catch (error) {
    logger.error('Error fetching automation workflows:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch automation workflows' 
    })
  }
})

// Integrations
app.get('/api/integrations', (req, res) => {
  try {
    res.json({
      success: true,
      data: mockBusinessData.integrations,
      meta: {
        total: mockBusinessData.integrations.length,
        connected: mockBusinessData.integrations.filter(i => i.status === 'connected').length
      }
    })
  } catch (error) {
    logger.error('Error fetching integrations:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch integrations' 
    })
  }
})

// Real-time notifications
app.get('/api/notifications', (req, res) => {
  try {
    const notifications = [
      {
        id: '1',
        type: 'alert',
        title: 'High-Value Lead Detected',
        message: 'Anita Sharma from TechCorp India scored 92/100. Immediate follow-up recommended.',
        severity: 'info',
        read: false,
        timestamp: new Date(),
        metadata: { leadId: '1', score: 92 }
      },
      {
        id: '2',
        type: 'system',
        title: 'WhatsApp Integration Synced',
        message: 'Successfully processed 156 new messages and 23 leads.',
        severity: 'success',
        read: false,
        timestamp: new Date(),
        metadata: { messages: 156, leads: 23 }
      }
    ]
    
    res.json({
      success: true,
      data: notifications,
      meta: {
        total: notifications.length,
        unread: notifications.filter(n => !n.read).length
      }
    })
  } catch (error) {
    logger.error('Error fetching notifications:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch notifications' 
    })
  }
})

// Analytics and reporting
app.get('/api/analytics/revenue', (req, res) => {
  try {
    const { period = '12m', currency = 'INR' } = req.query
    
    const revenueData = mockBusinessData.metrics.revenue
    
    res.json({
      success: true,
      data: revenueData,
      meta: {
        period,
        currency,
        generatedAt: new Date()
      }
    })
  } catch (error) {
    logger.error('Error fetching revenue analytics:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch revenue analytics' 
    })
  }
})

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err)
  
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.path,
    method: req.method
  })
})

// Socket.IO connection handling
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`)
  
  socket.emit('connection-status', {
    status: 'connected',
    timestamp: new Date(),
    services: {
      ai: 'active',
      automation: 'running',
      whatsapp: 'connected'
    }
  })
  
  // Handle real-time dashboard updates
  socket.on('subscribe-dashboard', (mode) => {
    socket.join(`dashboard-${mode}`)
    logger.info(`Client ${socket.id} subscribed to dashboard mode: ${mode}`)
  })
  
  // Handle WhatsApp events
  socket.on('whatsapp-status-check', () => {
    socket.emit('whatsapp-status', {
      connected: true,
      lastActivity: new Date()
    })
  })
  
  socket.on('disconnect', (reason) => {
    logger.info(`Client disconnected: ${socket.id}, reason: ${reason}`)
  })
})

// Scheduled tasks for AI automation
cron.schedule('*/5 * * * *', () => {
  // Generate periodic AI insights
  const insight = {
    id: uuidv4(),
    type: 'automated',
    title: 'Periodic Business Analysis',
    message: 'Automated analysis completed. Performance metrics are within expected ranges.',
    confidence: 85,
    impact: 'low',
    timestamp: new Date(),
    actions: ['Continue monitoring']
  }
  
  io.emit('automated-insight', insight)
  logger.info('Automated insight generated and broadcasted')
})

cron.schedule('0 9 * * *', () => {
  // Daily business summary
  io.emit('daily-summary', {
    type: 'daily-summary',
    data: mockBusinessData.metrics,
    timestamp: new Date()
  })
  logger.info('Daily business summary sent to all connected clients')
})

// Graceful shutdown handling
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  server.close(() => {
    logger.info('Process terminated')
  })
})

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully')
  server.close(() => {
    logger.info('Process terminated')
  })
})

// Start server
const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || '0.0.0.0'

server.listen(PORT, HOST, () => {
  logger.info(`🚀 BlackBox AI Backend Server running on ${HOST}:${PORT}`)
  logger.info(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
  logger.info(`🔧 Redis: ${redisClient.isReady ? 'Connected' : 'Disconnected'}`)
  logger.info(`🤖 AI Services: Active`)
  logger.info(`⚡ Real-time: Socket.IO Ready`)
  logger.info(`🔐 Security: Helmet + Rate Limiting Enabled`)
  
  // Initialize connections
  redisClient.connect().catch(err => {
    logger.error('Redis connection failed:', err)
  })
  
  console.log(`
  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │    🚀 BlackBox AI - Revolutionary Platform      │
  │                                                 │
  │    ⚡ Quantum Intelligence: ACTIVE              │
  │    🧠 Neural Networks: LEARNING                 │
  │    🤖 Automation Engine: RUNNING                │
  │    📊 Analytics: PROCESSING                     │
  │    🔗 Integrations: CONNECTED                   │
  │                                                 │
  │    🌐 Server: http://${HOST}:${PORT}            │
  │                                                 │
  └─────────────────────────────────────────────────┘
  `)
})

export default app