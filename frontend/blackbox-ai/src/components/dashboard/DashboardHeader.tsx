'use client'

import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bell, 
  Settings, 
  Brain, 
  Zap, 
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Shield,
  Globe
} from 'lucide-react'
import { formatters } from '@/lib/utils'

interface DashboardHeaderProps {
  onMenuClick: () => void
  stats: {
    revenue: string
    growth: string
    leads: number
    efficiency: string
  }
  onAIInsightsClick: () => void
  onNotificationsClick: () => void
  notificationCount: number
}

export function DashboardHeader({
  onMenuClick,
  stats,
  onAIInsightsClick,
  onNotificationsClick,
  notificationCount
}: DashboardHeaderProps) {
  return (
    <header className="quantum-nav px-6 py-4 border-b border-white/10">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-neural glass-light hover:glass-medium transition-all duration-300"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>

          {/* Logo and Branding */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quantum-cyan to-quantum-purple p-0.5">
                <div className="w-full h-full rounded-xl bg-cosmic-black flex items-center justify-center">
                  <Brain className="h-5 w-5 text-quantum-cyan" />
                </div>
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-quantum-green rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h1 className="text-xl font-quantum font-bold holographic-text">
                BlackBox AI
              </h1>
              <p className="text-xs text-white/60">Quantum Intelligence Platform</p>
            </div>
          </motion.div>

          {/* Search Bar */}
          <div className="hidden md:block relative">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                placeholder="Search widgets, insights, or data..."
                className="quantum-input pl-10 pr-4 py-2 text-sm w-full"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="px-2 py-1 text-xs bg-white/10 rounded border border-white/20">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Quick Stats */}
        <motion.div 
          className="hidden xl:flex items-center space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <QuickStat
            icon={DollarSign}
            label="Revenue"
            value={stats.revenue}
            color="quantum-cyan"
            trend="+23.4%"
          />
          <QuickStat
            icon={TrendingUp}
            label="Growth"
            value={stats.growth}
            color="quantum-green"
            trend="↗"
          />
          <QuickStat
            icon={Users}
            label="Leads"
            value={stats.leads.toString()}
            color="quantum-purple"
            trend="+156"
          />
          <QuickStat
            icon={Activity}
            label="Efficiency"
            value={stats.efficiency}
            color="quantum-orange"
            trend="+2.1%"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* AI Insights Button */}
          <motion.button
            onClick={onAIInsightsClick}
            className="relative p-3 rounded-neural glass-medium hover:glass-heavy transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Brain className="h-5 w-5 text-quantum-cyan group-hover:text-white transition-colors" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-quantum-cyan rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-cosmic-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                AI Insights
              </div>
            </div>
          </motion.button>

          {/* Notifications */}
          <motion.button
            onClick={onNotificationsClick}
            className="relative p-3 rounded-neural glass-medium hover:glass-heavy transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5 text-white group-hover:text-quantum-cyan transition-colors" />
            {notificationCount > 0 && (
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-quantum-orange rounded-full flex items-center justify-center text-xs font-bold text-cosmic-black"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {notificationCount > 9 ? '9+' : notificationCount}
              </motion.div>
            )}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-cosmic-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Notifications
              </div>
            </div>
          </motion.button>

          {/* System Status */}
          <motion.div
            className="hidden lg:flex items-center space-x-2 px-3 py-2 rounded-neural glass-light"
            whileHover={{ scale: 1.02 }}
          >
            <div className="status-indicator success" />
            <span className="text-sm text-white/80">System Operational</span>
            <Shield className="h-4 w-4 text-quantum-green" />
          </motion.div>

          {/* Settings */}
          <motion.button
            className="p-3 rounded-neural glass-light hover:glass-medium transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-cosmic-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Settings
              </div>
            </div>
          </motion.button>

          {/* User Profile */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <button className="flex items-center space-x-3 p-2 rounded-neural glass-light hover:glass-medium transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-quantum-cyan to-quantum-purple flex items-center justify-center">
                <span className="text-sm font-bold text-cosmic-black">A</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-white/60">TechnoServe Consulting</p>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Search */}
      <motion.div 
        className="md:hidden mt-4"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          <input
            type="text"
            placeholder="Search..."
            className="quantum-input pl-10 pr-4 py-2 text-sm w-full"
          />
        </div>
      </motion.div>
    </header>
  )
}

// Quick Stat Component
interface QuickStatProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  color: string
  trend: string
}

function QuickStat({ icon: Icon, label, value, color, trend }: QuickStatProps) {
  return (
    <motion.div
      className="flex items-center space-x-3 px-4 py-2 rounded-neural glass-light hover:glass-medium transition-all duration-300"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className={`p-2 rounded-lg bg-${color}/20 border border-${color}/30`}>
        <Icon className={`h-4 w-4 text-${color}`} />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-white">{value}</span>
          <span className={`text-xs text-${color} font-medium`}>{trend}</span>
        </div>
        <p className="text-xs text-white/60">{label}</p>
      </div>
    </motion.div>
  )
}