import { 
  BusinessMetrics, 
  DashboardWidget, 
  WidgetType, 
  RevenueMetrics,
  LeadMetrics,
  CustomerMetrics,
  OperationMetrics,
  PerformanceMetrics,
  PredictionMetrics,
  Contact,
  Automation,
  Integration,
  Campaign
} from '@/types'

// Indian Business Mock Data
export const indianBusinessData = {
  manufacturing: {
    company: "Rajesh Industries Pvt Ltd",
    industry: "Textile Manufacturing",
    location: "Ahmedabad, Gujarat",
    revenue: 4500000, // ₹45,00,000
    employees: 150,
    whatsappLeads: 850
  },
  ecommerce: {
    company: "Digital Bazaar Solutions",
    industry: "Multi-category E-commerce",
    location: "Mumbai, Maharashtra", 
    revenue: 12000000, // ₹1,20,00,000 GMV
    customers: 15000,
    orders: 2500
  },
  services: {
    company: "TechnoServe Consulting",
    industry: "IT Services",
    location: "Bangalore, Karnataka",
    revenue: 7500000, // ₹75,00,000
    clients: 45,
    retention: 94
  }
}

// Comprehensive Business Metrics
export const mockBusinessMetrics: BusinessMetrics = {
  revenue: {
    current: 7500000,
    previous: 6800000,
    growth: 10.3,
    target: 8500000,
    forecast: [7500000, 7800000, 8100000, 8400000, 8700000, 9000000],
    breakdown: {
      products: {
        "Web Development": 3200000,
        "Mobile Apps": 2100000,
        "AI Solutions": 1800000,
        "Consulting": 400000
      },
      channels: {
        "Direct Sales": 4500000,
        "WhatsApp": 1800000,
        "Website": 900000,
        "Referrals": 300000
      },
      regions: {
        "Karnataka": 3750000,
        "Maharashtra": 1875000,
        "Tamil Nadu": 1125000,
        "Others": 750000
      },
      customers: {
        "Enterprise": 4500000,
        "Mid-Market": 2250000,
        "SMB": 750000
      }
    },
    trends: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2024, i, 1),
      value: 7500000 * (0.85 + Math.random() * 0.3) * (1 + i * 0.08),
      change: (Math.random() - 0.5) * 20
    }))
  },
  leads: {
    total: 1250,
    new: 185,
    qualified: 78,
    converted: 23,
    conversionRate: 29.5,
    sources: [
      { name: "WhatsApp Business", count: 450, quality: 85, conversionRate: 35, cost: 250 },
      { name: "Website", count: 320, quality: 70, conversionRate: 22, cost: 180 },
      { name: "Social Media", count: 280, quality: 65, conversionRate: 18, cost: 150 },
      { name: "Referrals", count: 120, quality: 90, conversionRate: 45, cost: 50 },
      { name: "Cold Outreach", count: 80, quality: 40, conversionRate: 8, cost: 300 }
    ],
    funnel: [
      { name: "Awareness", count: 1250, conversionRate: 100, averageTime: 0 },
      { name: "Interest", count: 875, conversionRate: 70, averageTime: 2 },
      { name: "Consideration", count: 438, conversionRate: 50, averageTime: 7 },
      { name: "Intent", count: 219, conversionRate: 50, averageTime: 14 },
      { name: "Purchase", count: 88, conversionRate: 40, averageTime: 21 }
    ],
    predictions: [
      {
        id: "1",
        contact: {} as Contact,
        score: 92,
        probability: 85,
        nextAction: "Schedule Demo",
        timeline: "3-5 days",
        value: 250000
      }
    ]
  },
  customers: {
    total: 156,
    active: 142,
    churnRate: 8.2,
    satisfaction: 87.5,
    lifetime: 185000,
    segments: [
      {
        name: "Enterprise",
        count: 45,
        value: 4500000,
        characteristics: ["High volume", "Long-term contracts", "Custom requirements"],
        trends: Array.from({ length: 6 }, (_, i) => ({
          date: new Date(2024, i, 1),
          value: 45 + i * 2,
          change: Math.random() * 4 - 2
        }))
      },
      {
        name: "Mid-Market",
        count: 78,
        value: 2250000,
        characteristics: ["Growing companies", "Standardized solutions", "Regular purchases"],
        trends: Array.from({ length: 6 }, (_, i) => ({
          date: new Date(2024, i, 1),
          value: 78 + i * 3,
          change: Math.random() * 6 - 3
        }))
      },
      {
        name: "Small Business",
        count: 33,
        value: 750000,
        characteristics: ["Price-sensitive", "Simple solutions", "Quick decisions"],
        trends: Array.from({ length: 6 }, (_, i) => ({
          date: new Date(2024, i, 1),
          value: 33 + i * 1,
          change: Math.random() * 2 - 1
        }))
      }
    ],
    behavior: {
      engagement: 78,
      frequency: 2.3,
      recency: 12,
      monetary: 48500,
      patterns: [
        { type: "Peak Usage", frequency: 85, value: 65000, prediction: "Likely to upgrade" },
        { type: "Seasonal Buying", frequency: 60, value: 35000, prediction: "Q4 purchase expected" },
        { type: "Support Heavy", frequency: 45, value: 25000, prediction: "May need training" }
      ]
    }
  },
  operations: {
    efficiency: 87.3,
    productivity: 92.1,
    quality: 94.8,
    costs: {
      total: 5200000,
      categories: {
        "Personnel": 3120000,
        "Technology": 780000,
        "Marketing": 520000,
        "Operations": 416000,
        "Overhead": 364000
      },
      trends: Array.from({ length: 12 }, (_, i) => ({
        date: new Date(2024, i, 1),
        value: 5200000 * (0.9 + Math.random() * 0.2),
        change: (Math.random() - 0.5) * 10
      })),
      optimization: [
        { category: "Technology", description: "Automate routine tasks", impact: 15, effort: "medium", roi: 250 },
        { category: "Operations", description: "Streamline workflows", impact: 12, effort: "low", roi: 180 },
        { category: "Marketing", description: "Focus on high-ROI channels", impact: 20, effort: "high", roi: 320 }
      ]
    },
    inventory: {
      total: 850000,
      turnover: 6.8,
      stockouts: 12,
      excess: 8,
      predictions: [
        { item: "Development Hours", currentStock: 2400, demandForecast: 2800, reorderPoint: 2000, suggestedOrder: 600, confidence: 87 },
        { item: "Cloud Credits", currentStock: 450000, demandForecast: 520000, reorderPoint: 400000, suggestedOrder: 200000, confidence: 92 },
        { item: "Software Licenses", currentStock: 150, demandForecast: 175, reorderPoint: 120, suggestedOrder: 50, confidence: 78 }
      ]
    },
    automation: {
      activeWorkflows: 24,
      totalExecutions: 15680,
      successRate: 96.8,
      timesSaved: 1250,
      errorRate: 3.2,
      performance: [
        { id: "1", name: "Lead Qualification", executions: 2400, successRate: 98, averageTime: 45, savings: 180, status: "active" },
        { id: "2", name: "Invoice Generation", executions: 1850, successRate: 99, averageTime: 30, savings: 280, status: "active" },
        { id: "3", name: "Client Onboarding", executions: 156, successRate: 94, averageTime: 1200, savings: 420, status: "active" }
      ]
    }
  },
  performance: {
    kpis: [
      { id: "1", name: "Revenue Growth", value: 10.3, target: 12, unit: "%", trend: "up", status: "good" },
      { id: "2", name: "Client Satisfaction", value: 87.5, target: 90, unit: "%", trend: "up", status: "warning" },
      { id: "3", name: "Team Productivity", value: 92.1, target: 85, unit: "%", trend: "up", status: "good" },
      { id: "4", name: "Cost Efficiency", value: 78.2, target: 80, unit: "%", trend: "stable", status: "warning" }
    ],
    goals: [
      { id: "1", name: "Reach ₹1 Crore ARR", target: 10000000, current: 7500000, deadline: new Date("2024-12-31"), progress: 75, status: "on-track" },
      { id: "2", name: "200 Active Clients", target: 200, current: 156, deadline: new Date("2024-10-31"), progress: 78, status: "at-risk" },
      { id: "3", name: "95% Client Retention", target: 95, current: 91.8, deadline: new Date("2024-12-31"), progress: 97, status: "on-track" }
    ],
    benchmarks: [
      { metric: "Revenue per Employee", industry: 450000, company: 500000, difference: 11.1, rank: "Above Average" },
      { metric: "Client Satisfaction", industry: 82, company: 87.5, difference: 6.7, rank: "Top Quartile" },
      { metric: "Profit Margin", industry: 15, company: 18.2, difference: 21.3, rank: "Top 10%" }
    ],
    trends: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (30 - i) * 24 * 60 * 60 * 1000),
      value: 87 + Math.sin(i * 0.2) * 5 + Math.random() * 3,
      change: Math.random() * 4 - 2
    }))
  },
  predictions: {
    revenue: {
      value: 8750000,
      confidence: 87,
      range: [8200000, 9300000],
      factors: [
        { name: "Seasonal Trends", impact: 15, direction: "positive", confidence: 92 },
        { name: "Market Growth", impact: 12, direction: "positive", confidence: 78 },
        { name: "Competition", impact: -8, direction: "negative", confidence: 65 },
        { name: "New Services", impact: 20, direction: "positive", confidence: 88 }
      ],
      timeline: "Next Quarter"
    },
    leads: {
      value: 1580,
      confidence: 82,
      range: [1400, 1750],
      factors: [
        { name: "WhatsApp Campaigns", impact: 25, direction: "positive", confidence: 89 },
        { name: "Website Traffic", impact: 18, direction: "positive", confidence: 75 },
        { name: "Referral Program", impact: 15, direction: "positive", confidence: 82 }
      ],
      timeline: "Next Month"
    },
    churn: {
      value: 6.8,
      confidence: 78,
      range: [5.2, 8.4],
      factors: [
        { name: "Customer Success Program", impact: -15, direction: "negative", confidence: 85 },
        { name: "Market Competition", impact: 8, direction: "positive", confidence: 70 },
        { name: "Service Quality", impact: -12, direction: "negative", confidence: 88 }
      ],
      timeline: "Next Quarter"
    },
    demand: {
      value: 2850000,
      confidence: 84,
      range: [2600000, 3100000],
      factors: [
        { name: "Digital Transformation", impact: 30, direction: "positive", confidence: 92 },
        { name: "Economic Conditions", impact: -5, direction: "negative", confidence: 60 },
        { name: "AI Adoption", impact: 25, direction: "positive", confidence: 85 }
      ],
      timeline: "Next Quarter"
    },
    risks: [
      { type: "Client Concentration", probability: 0.35, impact: "high", timeline: "3-6 months", mitigation: ["Diversify client base", "Strengthen relationships"] },
      { type: "Technology Disruption", probability: 0.25, impact: "medium", timeline: "6-12 months", mitigation: ["Invest in R&D", "Partner with tech leaders"] },
      { type: "Talent Shortage", probability: 0.45, impact: "medium", timeline: "Immediate", mitigation: ["Improve retention", "Expand hiring regions"] }
    ]
  }
}

// Widget Configurations for all 28 widgets
export const widgetConfigurations: Record<WidgetType, Partial<DashboardWidget>> = {
  // Tier 1: Compact Mode (9 widgets)
  "quantum-revenue-analytics": {
    title: "Quantum Revenue Analytics",
    tier: "compact",
    config: {
      dataSource: "revenue-api",
      filters: { currency: "INR", period: "monthly" },
      customization: { theme: "glass-heavy", animation: true, chartType: "line" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: false, confidenceThreshold: 0.8 }
    }
  },
  "neural-lead-intelligence": {
    title: "Neural Lead Intelligence",
    tier: "compact",
    config: {
      dataSource: "leads-api",
      filters: { source: "all", status: "active" },
      customization: { theme: "glass-medium", animation: true, chartType: "funnel" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.75 }
    }
  },
  "whatsapp-command-center": {
    title: "WhatsApp Command Center",
    tier: "compact",
    config: {
      dataSource: "whatsapp-api",
      filters: { businessNumber: "+91", activeConversations: true },
      customization: { theme: "glass-light", animation: true, chartType: "realtime" },
      aiSettings: { predictions: false, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.7 }
    }
  },
  "predictive-crm-matrix": {
    title: "Predictive CRM Matrix",
    tier: "compact",
    config: {
      dataSource: "crm-api",
      filters: { pipeline: "all", stage: "active" },
      customization: { theme: "glass-heavy", animation: true, chartType: "matrix" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.85 }
    }
  },
  "smart-inventory-oracle": {
    title: "Smart Inventory Oracle",
    tier: "compact",
    config: {
      dataSource: "inventory-api",
      filters: { category: "all", location: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "heatmap" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },
  "human-performance-analytics": {
    title: "Human Performance Analytics",
    tier: "compact",
    config: {
      dataSource: "hr-api",
      filters: { department: "all", role: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "radar" },
      aiSettings: { predictions: true, insights: true, alerts: false, autoOptimization: false, confidenceThreshold: 0.7 }
    }
  },
  "customer-happiness-index": {
    title: "Customer Happiness Index",
    tier: "compact",
    config: {
      dataSource: "satisfaction-api",
      filters: { segment: "all", timeframe: "30d" },
      customization: { theme: "glass-heavy", animation: true, chartType: "gauge" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: false, confidenceThreshold: 0.75 }
    }
  },
  "financial-intelligence-hub": {
    title: "Financial Intelligence Hub",
    tier: "compact",
    config: {
      dataSource: "finance-api",
      filters: { account: "all", category: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "area" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.85 }
    }
  },
  "marketing-roi-maximizer": {
    title: "Marketing ROI Maximizer",
    tier: "compact",
    config: {
      dataSource: "marketing-api",
      filters: { channel: "all", campaign: "active" },
      customization: { theme: "glass-light", animation: true, chartType: "bar" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },

  // Tier 2: Advanced Mode (additional 9 widgets)
  "social-sentiment-constellation": {
    title: "Social Sentiment Constellation",
    tier: "advanced",
    config: {
      dataSource: "social-api",
      filters: { platform: "all", mentions: "brand" },
      customization: { theme: "glass-heavy", animation: true, chartType: "3d" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.7 }
    }
  },
  "email-engagement-predictor": {
    title: "Email Engagement Predictor",
    tier: "advanced",
    config: {
      dataSource: "email-api",
      filters: { campaign: "all", segment: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "line" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.75 }
    }
  },
  "seo-quantum-analytics": {
    title: "SEO Quantum Analytics",
    tier: "advanced",
    config: {
      dataSource: "seo-api",
      filters: { keyword: "all", page: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "heatmap" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },
  "vendor-relationship-optimizer": {
    title: "Vendor Relationship Optimizer",
    tier: "advanced",
    config: {
      dataSource: "vendor-api",
      filters: { category: "all", status: "active" },
      customization: { theme: "glass-heavy", animation: true, chartType: "network" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },
  "project-success-probability": {
    title: "Project Success Probability",
    tier: "advanced",
    config: {
      dataSource: "project-api",
      filters: { status: "active", priority: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "gantt" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: false, confidenceThreshold: 0.85 }
    }
  },
  "quality-assurance-predictor": {
    title: "Quality Assurance Predictor",
    tier: "advanced",
    config: {
      dataSource: "qa-api",
      filters: { product: "all", metric: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "control" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.9 }
    }
  },
  "customer-support-intelligence": {
    title: "Customer Support Intelligence",
    tier: "advanced",
    config: {
      dataSource: "support-api",
      filters: { priority: "all", category: "all" },
      customization: { theme: "glass-heavy", animation: true, chartType: "flow" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.75 }
    }
  },
  "automated-accounting-prophet": {
    title: "Automated Accounting Prophet",
    tier: "advanced",
    config: {
      dataSource: "accounting-api",
      filters: { account: "all", period: "current" },
      customization: { theme: "glass-medium", animation: true, chartType: "waterfall" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.85 }
    }
  },
  "supply-chain-visibility": {
    title: "Supply Chain Visibility",
    tier: "advanced",
    config: {
      dataSource: "supply-api",
      filters: { supplier: "all", status: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "sankey" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },

  // Tier 3: Autopilot Mode (additional 10 widgets)
  "market-crystal-ball": {
    title: "Market Crystal Ball",
    tier: "autopilot",
    config: {
      dataSource: "market-api",
      filters: { industry: "technology", region: "india" },
      customization: { theme: "glass-ultra", animation: true, chartType: "crystal" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.9 }
    }
  },
  "risk-quantum-scanner": {
    title: "Risk Quantum Scanner",
    tier: "autopilot",
    config: {
      dataSource: "risk-api",
      filters: { category: "all", severity: "all" },
      customization: { theme: "glass-heavy", animation: true, chartType: "risk-matrix" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.95 }
    }
  },
  "automation-health-monitor": {
    title: "Automation Health Monitor",
    tier: "autopilot",
    config: {
      dataSource: "automation-api",
      filters: { workflow: "all", status: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "health" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.85 }
    }
  },
  "customer-dna-analyzer": {
    title: "Customer DNA Analyzer",
    tier: "autopilot",
    config: {
      dataSource: "customer-dna-api",
      filters: { segment: "all", behavior: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "dna" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.8 }
    }
  },
  "neural-notification-intelligence": {
    title: "Neural Notification Intelligence",
    tier: "autopilot",
    config: {
      dataSource: "notification-api",
      filters: { type: "all", urgency: "all" },
      customization: { theme: "glass-heavy", animation: true, chartType: "neural" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.9 }
    }
  },
  "competition-xray-vision": {
    title: "Competition X-Ray Vision",
    tier: "autopilot",
    config: {
      dataSource: "competition-api",
      filters: { competitor: "all", metric: "all" },
      customization: { theme: "glass-ultra", animation: true, chartType: "comparative" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.85 }
    }
  },
  "resource-optimization-engine": {
    title: "Resource Optimization Engine",
    tier: "autopilot",
    config: {
      dataSource: "resource-api",
      filters: { type: "all", utilization: "all" },
      customization: { theme: "glass-medium", animation: true, chartType: "optimization" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.9 }
    }
  },
  "regulatory-compliance-autopilot": {
    title: "Regulatory Compliance Autopilot",
    tier: "autopilot",
    config: {
      dataSource: "compliance-api",
      filters: { regulation: "all", status: "all" },
      customization: { theme: "glass-light", animation: true, chartType: "compliance" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.95 }
    }
  },
  "whatsapp-business-omniscience": {
    title: "WhatsApp Business Omniscience",
    tier: "autopilot",
    config: {
      dataSource: "whatsapp-advanced-api",
      filters: { analytics: "deep", sentiment: "all" },
      customization: { theme: "glass-heavy", animation: true, chartType: "omniscient" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.9 }
    }
  },
  "business-growth-accelerator": {
    title: "Business Growth Accelerator",
    tier: "autopilot",
    config: {
      dataSource: "growth-api",
      filters: { strategy: "all", timeframe: "all" },
      customization: { theme: "glass-ultra", animation: true, chartType: "accelerator" },
      aiSettings: { predictions: true, insights: true, alerts: true, autoOptimization: true, confidenceThreshold: 0.95 }
    }
  }
}

// Mock Contacts Data
export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Anita Sharma",
    email: "anita.sharma@techcorp.in",
    phone: "+91-9876543210",
    whatsapp: "+91-9876543210",
    company: "TechCorp India",
    position: "CTO",
    source: "WhatsApp Business",
    tags: ["Enterprise", "Decision Maker", "High Priority"],
    customFields: { industry: "Technology", employees: "500+", budget: "₹50L+" },
    activities: [],
    score: 92,
    status: "qualified",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-02-20")
  },
  {
    id: "2", 
    name: "Rajesh Patel",
    email: "rajesh@gujaratmanufacturing.com",
    phone: "+91-9123456789",
    company: "Gujarat Manufacturing Ltd",
    position: "Operations Manager",
    source: "Website",
    tags: ["Manufacturing", "Mid-Market"],
    customFields: { industry: "Manufacturing", employees: "200", budget: "₹25L" },
    activities: [],
    score: 78,
    status: "contacted",
    createdAt: new Date("2024-01-22"),
    updatedAt: new Date("2024-02-18")
  }
]

// Mock Automations
export const mockAutomations: Automation[] = [
  {
    id: "1",
    name: "WhatsApp Lead Nurturing",
    description: "Automated follow-up sequence for WhatsApp leads",
    type: "lead-nurturing",
    status: "active",
    trigger: {
      type: "webhook",
      config: { source: "whatsapp", event: "new_lead" },
      filters: [{ field: "source", operator: "equals", value: "whatsapp" }]
    },
    actions: [],
    conditions: [],
    schedule: { type: "immediate" },
    performance: {
      executions: 1250,
      successes: 1210,
      failures: 40,
      averageTime: 45,
      lastRun: new Date(),
      errors: []
    },
    ai: {
      optimization: true,
      learning: true,
      suggestions: [],
      confidence: 87,
      improvements: []
    },
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-02-20")
  }
]

// Mock Integrations
export const mockIntegrations: Integration[] = [
  {
    id: "1",
    name: "WhatsApp Business API",
    type: "whatsapp-business",
    status: "connected",
    config: {
      features: ["messaging", "templates", "analytics"],
      settings: { businessNumber: "+91-9999999999" },
      mappings: []
    },
    credentials: { type: "api-key", encrypted: true },
    sync: {
      enabled: true,
      frequency: "realtime",
      direction: "bidirectional",
      filters: [],
      mapping: {}
    },
    usage: {
      requests: 15680,
      data: 2.4,
      errors: 12,
      lastRequest: new Date(),
      limits: { requests: 100000, data: 10, resetPeriod: "monthly", remaining: 84320 }
    },
    health: {
      status: "healthy",
      uptime: 99.8,
      latency: 120,
      errorRate: 0.08,
      lastCheck: new Date(),
      issues: []
    },
    createdAt: new Date("2024-01-01"),
    lastSync: new Date()
  },
  {
    id: "2",
    name: "Razorpay Payment Gateway",
    type: "razorpay",
    status: "connected",
    config: {
      features: ["payments", "subscriptions", "analytics"],
      settings: { webhookUrl: "https://api.blackbox.ai/webhooks/razorpay" },
      mappings: []
    },
    credentials: { type: "api-key", encrypted: true },
    sync: {
      enabled: true,
      frequency: "realtime",
      direction: "import",
      filters: [],
      mapping: {}
    },
    usage: {
      requests: 8950,
      data: 1.2,
      errors: 5,
      lastRequest: new Date(),
      limits: { requests: 50000, data: 5, resetPeriod: "monthly", remaining: 41050 }
    },
    health: {
      status: "healthy",
      uptime: 99.9,
      latency: 85,
      errorRate: 0.05,
      lastCheck: new Date(),
      issues: []
    },
    createdAt: new Date("2024-01-05"),
    lastSync: new Date()
  }
]

// Mock Campaigns
export const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Q1 Product Launch",
    type: "product-launch",
    status: "active",
    channels: ["whatsapp", "email"],
    audience: {
      id: "1",
      name: "Enterprise Prospects",
      criteria: [],
      size: 450,
      contacts: []
    },
    content: {
      subject: "Revolutionary AI Solutions Now Available",
      message: "Discover how our new AI automation platform can transform your business operations...",
      personalization: [],
      attachments: [],
      variables: {}
    },
    schedule: { type: "drip" },
    performance: {
      sent: 450,
      delivered: 442,
      opened: 284,
      clicked: 127,
      replied: 23,
      unsubscribed: 2,
      bounced: 8,
      revenue: 1250000,
      conversions: 8
    },
    ai: {
      optimization: true,
      testing: [],
      insights: [],
      recommendations: []
    },
    createdAt: new Date("2024-02-01")
  }
]

// AI Insights and Predictions
export const aiInsights = [
  {
    id: "1",
    type: "revenue-prediction",
    title: "Revenue Growth Acceleration Detected",
    message: "AI models predict 23% revenue increase in Q2 based on current lead velocity and conversion optimization.",
    confidence: 87,
    impact: "high",
    category: "growth",
    timestamp: new Date(),
    actions: [
      "Scale successful marketing campaigns",
      "Increase sales team capacity",
      "Optimize pricing for premium segments"
    ]
  },
  {
    id: "2", 
    type: "customer-behavior",
    title: "Enterprise Customer Pattern Identified",
    message: "Enterprise customers show 3x higher engagement with WhatsApp communications vs email.",
    confidence: 92,
    impact: "medium",
    category: "optimization",
    timestamp: new Date(),
    actions: [
      "Shift enterprise outreach to WhatsApp",
      "Develop WhatsApp-specific content",
      "Train sales team on WhatsApp best practices"
    ]
  },
  {
    id: "3",
    type: "risk-alert", 
    title: "Client Concentration Risk Warning",
    message: "Top 3 clients represent 45% of revenue. Diversification recommended to reduce business risk.",
    confidence: 78,
    impact: "high",
    category: "risk",
    timestamp: new Date(),
    actions: [
      "Develop new client acquisition strategy",
      "Strengthen relationships with existing mid-tier clients",
      "Explore new market segments"
    ]
  }
]

// Real-time Notifications
export const mockNotifications = [
  {
    id: "1",
    type: "alert" as const,
    title: "High-Value Lead Detected",
    message: "Anita Sharma from TechCorp India scored 92/100. Immediate follow-up recommended.",
    severity: "info" as const,
    read: false,
    actionable: true,
    actions: [
      { id: "1", label: "Assign to Sales", type: "button" as const, config: {} },
      { id: "2", label: "View Profile", type: "link" as const, config: { url: "/contacts/1" } }
    ],
    metadata: { leadId: "1", score: 92 },
    timestamp: new Date(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
  },
  {
    id: "2",
    type: "system" as const,
    title: "WhatsApp Integration Synced",
    message: "Successfully processed 156 new messages and 23 leads.",
    severity: "success" as const,
    read: false,
    actionable: false,
    actions: [],
    metadata: { messages: 156, leads: 23 },
    timestamp: new Date(),
    expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000)
  }
]