'use client'

import { motion } from 'framer-motion'
import { Brain, Rocket, Sparkles } from 'lucide-react'

type DashboardMode = 'compact' | 'advanced' | 'autopilot'

interface DashboardModeSelectorProps {
  currentMode: DashboardMode
  onModeChange: (mode: DashboardMode) => void
  modeConfigs: Record<DashboardMode, any>
}

export function DashboardModeSelector({ currentMode, onModeChange, modeConfigs }: DashboardModeSelectorProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="glass-heavy rounded-glass p-2 flex space-x-2">
        {Object.entries(modeConfigs).map(([mode, config]) => {
          const isActive = currentMode === mode
          return (
            <motion.button
              key={mode}
              onClick={() => onModeChange(mode as DashboardMode)}
              className={`relative px-6 py-3 rounded-neural transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-r ${config.gradient} border border-${config.color}/50` 
                  : 'glass-light hover:glass-medium'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <config.icon className={`h-5 w-5 ${isActive ? `text-${config.color}` : 'text-white/70'}`} />
                <div className="text-left">
                  <p className={`font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>
                    {config.title}
                  </p>
                  <p className="text-xs text-white/50">{config.widgets} Widgets</p>
                </div>
              </div>
              
              {isActive && (
                <motion.div
                  layoutId="active-mode"
                  className="absolute inset-0 rounded-neural border-2 border-quantum-cyan/50"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}