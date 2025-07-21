'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home,
  BarChart3,
  MessageSquare,
  Users,
  Settings,
  Zap,
  Brain,
  Target,
  Globe,
  Shield,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react'

interface DashboardSidebarProps {
  isOpen: boolean
  onClose: () => void
  currentMode: string
}

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/', active: true },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: MessageSquare, label: 'WhatsApp Hub', href: '/whatsapp' },
  { icon: Users, label: 'Contacts', href: '/contacts' },
  { icon: Zap, label: 'Automations', href: '/automations' },
  { icon: Brain, label: 'AI Insights', href: '/insights' },
  { icon: Target, label: 'Goals', href: '/goals' },
  { icon: Globe, label: 'Integrations', href: '/integrations' },
  { icon: Shield, label: 'Security', href: '/security' },
  { icon: Settings, label: 'Settings', href: '/settings' }
]

export function DashboardSidebar({ isOpen, onClose, currentMode }: DashboardSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-80 glass-heavy border-r border-white/10 z-50 lg:relative lg:translate-x-0"
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quantum-cyan to-quantum-purple p-0.5">
                    <div className="w-full h-full rounded-xl bg-cosmic-black flex items-center justify-center">
                      <Brain className="h-5 w-5 text-quantum-cyan" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-quantum font-bold text-lg holographic-text">BlackBox AI</h2>
                    <p className="text-xs text-white/60">Quantum Platform</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="lg:hidden p-2 rounded-neural glass-light hover:glass-medium transition-all"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Mode Indicator */}
              <div className="mb-6 p-4 rounded-neural glass-medium border border-quantum-cyan/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="h-4 w-4 text-quantum-cyan" />
                  <span className="text-sm font-medium text-quantum-cyan">Current Mode</span>
                </div>
                <p className="text-white font-medium capitalize">{currentMode} Intelligence</p>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`nav-item flex items-center space-x-3 p-3 rounded-neural transition-all duration-300 group ${
                      item.active ? 'active' : 'hover:glass-medium'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-center text-xs text-white/60">
                  <p>v1.0.0 - Quantum Release</p>
                  <p className="mt-1">© 2024 BlackBox AI</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}