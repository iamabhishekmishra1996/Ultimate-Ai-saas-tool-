'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Brain, Sparkles } from 'lucide-react'

interface AIInsightsPanelProps {
  isOpen: boolean
  onClose: () => void
  insights: any[]
}

export function AIInsightsPanel({ isOpen, onClose, insights }: AIInsightsPanelProps) {
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
                <Brain className="h-6 w-6 text-quantum-cyan" />
                <h2 className="text-xl font-bold text-white">AI Insights</h2>
              </div>
              <button onClick={onClose} className="p-2 rounded-neural glass-light hover:glass-medium">
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-medium rounded-neural p-4"
                >
                  <div className="flex items-start space-x-3">
                    <Sparkles className="h-5 w-5 text-quantum-green mt-1" />
                    <div>
                      <h3 className="font-medium text-white mb-2">{insight.title}</h3>
                      <p className="text-sm text-white/70 mb-3">{insight.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-quantum-cyan">
                          Confidence: {insight.confidence}%
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          insight.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                          insight.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {insight.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}