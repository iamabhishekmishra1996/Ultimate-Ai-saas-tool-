'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

export function PerformanceMonitor() {
  return (
    <motion.div
      className="flex items-center space-x-2 px-3 py-2 rounded-neural glass-light"
      whileHover={{ scale: 1.02 }}
    >
      <Activity className="h-4 w-4 text-quantum-green" />
      <div className="flex items-center space-x-1">
        <span className="text-sm text-white/80">99.8%</span>
        <span className="text-xs text-white/60">uptime</span>
      </div>
    </motion.div>
  )
}