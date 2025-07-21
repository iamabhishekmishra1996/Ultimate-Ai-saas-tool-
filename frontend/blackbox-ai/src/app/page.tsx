'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain,
  Zap,
  Activity,
  TrendingUp,
  MessageSquare,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Eye,
  Sparkles,
  Rocket,
  Shield,
  Target,
  Globe,
  Cpu,
  Layers
} from 'lucide-react'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'
import { QuantumWidget } from '@/components/widgets/QuantumWidget'
import { DashboardModeSelector } from '@/components/dashboard/DashboardModeSelector'
import { AIInsightsPanel } from '@/components/dashboard/AIInsightsPanel'
import { NotificationCenter } from '@/components/dashboard/NotificationCenter'
import { PerformanceMonitor } from '@/components/dashboard/PerformanceMonitor'
import { quantumAnimations } from '@/lib/utils'
import { mockBusinessMetrics, widgetConfigurations, aiInsights, mockNotifications } from '@/data/mockData'
import type { DashboardWidget, WidgetType } from '@/types'

type DashboardMode = 'compact' | 'advanced' | 'autopilot'

interface DashboardStats {
  revenue: string
  growth: string
  leads: number
  efficiency: string
}

const dashboardStats: DashboardStats = {
  revenue: '₹75.2L',
  growth: '+23.4%',
  leads: 1247,
  efficiency: '94.2%'
}

// Widget configurations for each tier
const tierWidgets: Record<DashboardMode, WidgetType[]> = {
  compact: [
    'quantum-revenue-analytics',
    'neural-lead-intelligence', 
    'whatsapp-command-center',
    'predictive-crm-matrix',
    'smart-inventory-oracle',
    'human-performance-analytics',
    'customer-happiness-index',
    'financial-intelligence-hub',
    'marketing-roi-maximizer'
  ],
  advanced: [
    'quantum-revenue-analytics',
    'neural-lead-intelligence', 
    'whatsapp-command-center',
    'predictive-crm-matrix',
    'smart-inventory-oracle',
    'human-performance-analytics',
    'customer-happiness-index',
    'financial-intelligence-hub',
    'marketing-roi-maximizer',
    'social-sentiment-constellation',
    'email-engagement-predictor',
    'seo-quantum-analytics',
    'vendor-relationship-optimizer',
    'project-success-probability',
    'quality-assurance-predictor',
    'customer-support-intelligence',
    'automated-accounting-prophet',
    'supply-chain-visibility'
  ],
  autopilot: [
    'quantum-revenue-analytics',
    'neural-lead-intelligence', 
    'whatsapp-command-center',
    'predictive-crm-matrix',
    'smart-inventory-oracle',
    'human-performance-analytics',
    'customer-happiness-index',
    'financial-intelligence-hub',
    'marketing-roi-maximizer',
    'social-sentiment-constellation',
    'email-engagement-predictor',
    'seo-quantum-analytics',
    'vendor-relationship-optimizer',
    'project-success-probability',
    'quality-assurance-predictor',
    'customer-support-intelligence',
    'automated-accounting-prophet',
    'supply-chain-visibility',
    'market-crystal-ball',
    'risk-quantum-scanner',
    'automation-health-monitor',
    'customer-dna-analyzer',
    'neural-notification-intelligence',
    'competition-xray-vision',
    'resource-optimization-engine',
    'regulatory-compliance-autopilot',
    'whatsapp-business-omniscience',
    'business-growth-accelerator'
  ]
}

const modeConfigs = {
  compact: {
    title: 'Intelligent Compact Mode',
    subtitle: 'AI-Curated Essential Insights',
    icon: Brain,
    color: 'quantum-cyan',
    gradient: 'from-quantum-cyan/20 to-quantum-purple/20',
    widgets: 9
  },
  advanced: {
    title: 'Advanced Mission Control',
    subtitle: 'Enhanced Business Intelligence Layer',
    icon: Rocket,
    color: 'quantum-purple',
    gradient: 'from-quantum-purple/20 to-quantum-green/20',
    widgets: 18
  },
  autopilot: {
    title: 'Autonomous Autopilot Cockpit',
    subtitle: 'Ultimate Business Command Center',
    icon: Sparkles,
    color: 'quantum-green',
    gradient: 'from-quantum-green/20 to-quantum-orange/20',
    widgets: 28
  }
}

export default function DashboardPage() {
  const [currentMode, setCurrentMode] = useState<DashboardMode>('compact')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [widgets, setWidgets] = useState<DashboardWidget[]>([])
  const [aiInsightsOpen, setAiInsightsOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Simulate loading and widget initialization
  useEffect(() => {
    const initializeDashboard = async () => {
      setIsLoading(true)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Initialize widgets based on current mode
      const modeWidgets = tierWidgets[currentMode]
      const initializedWidgets: DashboardWidget[] = modeWidgets.map((type, index) => ({
        id: `${type}-${index}`,
        type,
        title: widgetConfigurations[type].title || type,
        position: { x: index % 3, y: Math.floor(index / 3), w: 1, h: 1 },
        size: { minW: 1, minH: 1, maxW: 3, maxH: 3 },
        config: widgetConfigurations[type].config || {
          dataSource: '',
          filters: {},
          customization: { theme: 'glass-medium', animation: true, colors: [], showLegend: true, showTooltips: true },
          aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: false, confidenceThreshold: 0.8 }
        },
        data: mockBusinessMetrics,
        isVisible: true,
        tier: currentMode,
        aiEnabled: true,
        refreshInterval: 30000,
        lastUpdated: new Date()
      }))
      
      setWidgets(initializedWidgets)
      setIsLoading(false)
    }

    initializeDashboard()
  }, [currentMode])

  return (
    <div className="min-h-screen bg-cosmic-mesh relative overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-purple/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-green/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-orange/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <DashboardSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          currentMode={currentMode}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <DashboardHeader
            onMenuClick={() => setSidebarOpen(true)}
            stats={dashboardStats}
            onAIInsightsClick={() => setAiInsightsOpen(true)}
            onNotificationsClick={() => setNotificationsOpen(true)}
            notificationCount={mockNotifications.filter(n => !n.read).length}
          />

          {/* Dashboard Mode Selector */}
          <div className="p-6 border-b border-white/10">
            <DashboardModeSelector
              currentMode={currentMode}
              onModeChange={setCurrentMode}
              modeConfigs={modeConfigs}
            />
          </div>

          {/* Main Dashboard Content */}
          <main className="flex-1 p-6">
            {isLoading ? (
              <DashboardLoader />
            ) : (
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="space-y-6"
              >
                {/* Mode Header */}
                <motion.div
                  variants={quantumAnimations.fadeInUp}
                  className={`glass-heavy rounded-glass p-6 bg-gradient-to-r ${modeConfigs[currentMode].gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-cosmic-mesh opacity-30" />
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-${modeConfigs[currentMode].color}/20 border border-${modeConfigs[currentMode].color}/30`}>
                        <modeConfigs[currentMode].icon className={`h-8 w-8 text-${modeConfigs[currentMode].color}`} />
                      </div>
                      <div>
                        <h1 className="text-2xl font-quantum font-bold holographic-text">
                          {modeConfigs[currentMode].title}
                        </h1>
                        <p className="text-white/70 mt-1">{modeConfigs[currentMode].subtitle}</p>
                        <p className="text-sm text-white/50 mt-1">
                          {modeConfigs[currentMode].widgets} Neural Widgets Active
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PerformanceMonitor />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`p-2 rounded-full bg-${modeConfigs[currentMode].color}/10 border border-${modeConfigs[currentMode].color}/30`}
                      >
                        <Cpu className={`h-5 w-5 text-${modeConfigs[currentMode].color}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Widgets Grid */}
                <motion.div
                  variants={quantumAnimations.fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {widgets.map((widget, index) => (
                      <motion.div
                        key={widget.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          transition: { 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        whileHover={{ 
                          scale: 1.02,
                          y: -4,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        className="will-change-transform"
                      >
                        <QuantumWidget
                          widget={widget}
                          data={mockBusinessMetrics}
                          currentMode={currentMode}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                  variants={quantumAnimations.fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8"
                >
                  <div className="glass-medium rounded-neural p-4 text-center">
                    <div className="text-quantum-cyan text-2xl font-bold">{dashboardStats.revenue}</div>
                    <div className="text-white/60 text-sm">Monthly Revenue</div>
                  </div>
                  <div className="glass-medium rounded-neural p-4 text-center">
                    <div className="text-quantum-green text-2xl font-bold">{dashboardStats.growth}</div>
                    <div className="text-white/60 text-sm">Growth Rate</div>
                  </div>
                  <div className="glass-medium rounded-neural p-4 text-center">
                    <div className="text-quantum-purple text-2xl font-bold">{dashboardStats.leads}</div>
                    <div className="text-white/60 text-sm">Active Leads</div>
                  </div>
                  <div className="glass-medium rounded-neural p-4 text-center">
                    <div className="text-quantum-orange text-2xl font-bold">{dashboardStats.efficiency}</div>
                    <div className="text-white/60 text-sm">AI Efficiency</div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* AI Insights Panel */}
      <AIInsightsPanel
        isOpen={aiInsightsOpen}
        onClose={() => setAiInsightsOpen(false)}
        insights={aiInsights}
      />

      {/* Notification Center */}
      <NotificationCenter
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={mockNotifications}
      />
    </div>
  )
}

// Loading Component
function DashboardLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6"
      >
        <div className="neural-pulse-loader mx-auto" />
        <div className="space-y-2">
          <h2 className="text-2xl font-quantum font-bold holographic-text">
            Initializing Quantum Intelligence
          </h2>
          <p className="text-white/70">Calibrating neural networks and analyzing business data...</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 bg-quantum-cyan rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="w-2 h-2 bg-quantum-purple rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            className="w-2 h-2 bg-quantum-green rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}
