'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Bell, CheckCircle, AlertCircle, Info } from 'lucide-react'

interface NotificationCenterProps {
  isOpen: boolean
  onClose: () => void
  notifications: any[]
}

export function NotificationCenter({ isOpen, onClose, notifications }: NotificationCenterProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle
      case 'alert': return AlertCircle
      default: return Info
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="fixed right-0 top-0 h-full w-96 glass-heavy border-l border-white/10 z-50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Bell className="h-6 w-6 text-quantum-orange" />
                <h2 className="text-xl font-bold text-white">Notifications</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-neural glass-light hover:glass-medium">
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            
            <div className="space-y-4">
              {notifications.map((notification, index) => {
                const Icon = getIcon(notification.severity)
                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-medium rounded-neural p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 text-quantum-cyan mt-1" />
                      <div className="flex-1">
                        <h3 className="font-medium text-white mb-1">{notification.title}</h3>
                        <p className="text-sm text-white/70 mb-2">{notification.message}</p>
                        <span className="text-xs text-white/50">
                          {new Date(notification.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}