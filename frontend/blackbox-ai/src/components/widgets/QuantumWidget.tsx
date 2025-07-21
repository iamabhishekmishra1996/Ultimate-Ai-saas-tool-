'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity,
  DollarSign,
  Users,
  MessageSquare,
  BarChart3,
  Zap,
  Brain,
  Target,
  Eye,
  Sparkles
} from 'lucide-react'
import { formatters } from '@/lib/utils'
import type { DashboardWidget, BusinessMetrics } from '@/types'

interface QuantumWidgetProps {
  widget: DashboardWidget
  data: BusinessMetrics
  currentMode: string
}

const widgetIcons = {
  'quantum-revenue-analytics': DollarSign,
  'neural-lead-intelligence': Users,
  'whatsapp-command-center': MessageSquare,
  'predictive-crm-matrix': BarChart3,
  'smart-inventory-oracle': Activity,
  'human-performance-analytics': TrendingUp,
  'customer-happiness-index': Eye,
  'financial-intelligence-hub': Target,
  'marketing-roi-maximizer': Zap,
  'social-sentiment-constellation': Sparkles,
  'email-engagement-predictor': Brain,
  'seo-quantum-analytics': TrendingUp,
  'vendor-relationship-optimizer': Users,
  'project-success-probability': Target,
  'quality-assurance-predictor': Activity,
  'customer-support-intelligence': MessageSquare,
  'automated-accounting-prophet': DollarSign,
  'supply-chain-visibility': BarChart3,
  'market-crystal-ball': Eye,
  'risk-quantum-scanner': Sparkles,
  'automation-health-monitor': Zap,
  'customer-dna-analyzer': Brain,
  'neural-notification-intelligence': Activity,
  'competition-xray-vision': Target,
  'resource-optimization-engine': TrendingUp,
  'regulatory-compliance-autopilot': Users,
  'whatsapp-business-omniscience': MessageSquare,
  'business-growth-accelerator': DollarSign
}

export function QuantumWidget({ widget, data, currentMode }: QuantumWidgetProps) {
  const Icon = widgetIcons[widget.type as keyof typeof widgetIcons] || Activity
  
  const getWidgetData = () => {
    switch (widget.type) {
      case 'quantum-revenue-analytics':
        return {
          title: 'Revenue Analytics',
          value: formatters.currency(data.revenue.current),
          change: `+${data.revenue.growth}%`,
          trend: 'up' as const,
          subtitle: 'Monthly Revenue',
          color: 'quantum-cyan'
        }
      case 'neural-lead-intelligence':
        return {
          title: 'Lead Intelligence',
          value: data.leads.total.toString(),
          change: `+${data.leads.new}`,
          trend: 'up' as const,
          subtitle: 'Active Leads',
          color: 'quantum-purple'
        }
      case 'whatsapp-command-center':
        return {
          title: 'WhatsApp Hub',
          value: '1,247',
          change: '+156',
          trend: 'up' as const,
          subtitle: 'Messages Today',
          color: 'quantum-green'
        }
      case 'customer-happiness-index':
        return {
          title: 'Customer Satisfaction',
          value: `${data.customers.satisfaction}%`,
          change: '+2.3%',
          trend: 'up' as const,
          subtitle: 'Satisfaction Score',
          color: 'quantum-orange'
        }
      default:
        return {
          title: widget.title,
          value: Math.floor(Math.random() * 1000).toString(),
          change: `+${Math.floor(Math.random() * 10)}%`,
          trend: Math.random() > 0.5 ? 'up' as const : 'down' as const,
          subtitle: 'AI Metric',
          color: 'quantum-cyan'
        }
    }
  }

  const widgetData = getWidgetData()

  return (
    <motion.div
      className={`quantum-widget glass-${widget.config.customization.theme} rounded-glass relative overflow-hidden group`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/20 via-transparent to-quantum-purple/20" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-quantum-green/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-${widgetData.color}/20 border border-${widgetData.color}/30`}>
            <Icon className={`h-5 w-5 text-${widgetData.color}`} />
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">{widgetData.title}</h3>
            <p className="text-xs text-white/60">{widgetData.subtitle}</p>
          </div>
        </div>
        
        {widget.aiEnabled && (
          <motion.div
            className="p-1 rounded-full bg-quantum-cyan/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="h-3 w-3 text-quantum-cyan" />
          </motion.div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="flex items-end justify-between">
          <div>
            <motion.div
              className="text-2xl font-bold text-white mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {widgetData.value}
            </motion.div>
            <div className="flex items-center space-x-2">
              <div className={`flex items-center space-x-1 text-sm ${
                widgetData.trend === 'up' ? 'text-quantum-green' : 'text-red-400'
              }`}>
                {widgetData.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span>{widgetData.change}</span>
              </div>
              <span className="text-xs text-white/60">vs last month</span>
            </div>
          </div>
          
          {/* Mini chart placeholder */}
          <div className="w-16 h-8 relative">
            <svg viewBox="0 0 64 32" className="w-full h-full">
              <defs>
                <linearGradient id={`gradient-${widget.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                </linearGradient>
              </defs>
              <path
                d="M0,24 Q16,16 32,12 T64,8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className={`text-${widgetData.color}`}
              />
              <path
                d="M0,24 Q16,16 32,12 T64,8 L64,32 L0,32 Z"
                fill={`url(#gradient-${widget.id})`}
                className={`text-${widgetData.color}`}
              />
            </svg>
          </div>
        </div>

        {/* AI insights */}
        {widget.aiEnabled && (
          <motion.div
            className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Sparkles className="h-3 w-3 text-quantum-cyan" />
              <span className="text-xs font-medium text-quantum-cyan">AI Insight</span>
            </div>
            <p className="text-xs text-white/70">
              Performance trending upward. Optimal conditions detected for growth acceleration.
            </p>
          </motion.div>
        )}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan/10 to-quantum-purple/10" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-purple" />
      </div>
    </motion.div>
  )
}