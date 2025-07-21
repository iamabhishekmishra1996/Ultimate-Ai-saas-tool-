import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Quantum Animation Utilities
export const quantumAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  quantumPulse: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  },
  neuralGlow: {
    initial: { opacity: 0.5 },
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
}

// Business Intelligence Formatters
export const formatters = {
  currency: (amount: number, currency = 'INR') => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(amount)
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  },
  
  percentage: (value: number, decimals = 1) => {
    return `${value.toFixed(decimals)}%`
  },
  
  largeNumber: (num: number) => {
    if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`
    return num.toString()
  },
  
  duration: (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) return `${hours}h ${mins}m`
    return `${mins}m`
  },
  
  dateTime: (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(d)
  }
}

// AI Prediction Utilities
export const aiPredictions = {
  confidenceLevel: (score: number) => {
    if (score >= 0.9) return { level: 'Very High', color: 'text-quantum-green' }
    if (score >= 0.75) return { level: 'High', color: 'text-quantum-cyan' }
    if (score >= 0.6) return { level: 'Medium', color: 'text-quantum-orange' }
    if (score >= 0.4) return { level: 'Low', color: 'text-yellow-400' }
    return { level: 'Very Low', color: 'text-red-400' }
  },
  
  trendDirection: (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100
    if (Math.abs(change) < 0.1) return { trend: 'stable', icon: '→', color: 'text-gray-400' }
    if (change > 0) return { trend: 'up', icon: '↗', color: 'text-quantum-green' }
    return { trend: 'down', icon: '↘', color: 'text-red-400' }
  },
  
  riskLevel: (score: number) => {
    if (score <= 0.2) return { level: 'Low Risk', color: 'text-quantum-green', bg: 'bg-green-500/20' }
    if (score <= 0.5) return { level: 'Medium Risk', color: 'text-quantum-orange', bg: 'bg-orange-500/20' }
    if (score <= 0.8) return { level: 'High Risk', color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
    return { level: 'Critical Risk', color: 'text-red-400', bg: 'bg-red-500/20' }
  }
}

// Data Validation Utilities
export const validators = {
  email: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  phone: (phone: string) => /^[+]?[\d\s-()]{10,}$/.test(phone),
  indianPhone: (phone: string) => /^[+]?91[\s-]?[6-9]\d{9}$/.test(phone),
  gst: (gst: string) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gst),
  pan: (pan: string) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)
}

// Performance Metrics Utilities
export const performance = {
  calculateGrowthRate: (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0
    return ((current - previous) / previous) * 100
  },
  
  calculateEfficiency: (output: number, input: number) => {
    if (input === 0) return 0
    return (output / input) * 100
  },
  
  calculateROI: (profit: number, investment: number) => {
    if (investment === 0) return 0
    return ((profit - investment) / investment) * 100
  },
  
  predictNextValue: (values: number[], periods = 1) => {
    if (values.length < 2) return values[0] || 0
    
    // Simple linear regression prediction
    const n = values.length
    const sumX = n * (n - 1) / 2
    const sumY = values.reduce((sum, val) => sum + val, 0)
    const sumXY = values.reduce((sum, val, index) => sum + val * index, 0)
    const sumX2 = n * (n - 1) * (2 * n - 1) / 6
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)
    const intercept = (sumY - slope * sumX) / n
    
    return slope * (n + periods - 1) + intercept
  }
}

// Color Utilities for Dynamic Theming
export const colors = {
  getQuantumColor: (index: number) => {
    const colors = ['cyan', 'purple', 'green', 'orange', 'pink', 'blue']
    return colors[index % colors.length]
  },
  
  getGlassOpacity: (depth: 'light' | 'medium' | 'heavy' | 'ultra') => {
    const opacities = {
      light: 'bg-white/[0.03]',
      medium: 'bg-white/[0.08]',
      heavy: 'bg-white/[0.15]',
      ultra: 'bg-white/[0.05]'
    }
    return opacities[depth]
  },
  
  getStatusColor: (status: string) => {
    const statusColors = {
      success: 'text-status-success',
      warning: 'text-status-warning',
      error: 'text-status-error',
      info: 'text-status-info',
      pending: 'text-quantum-orange',
      active: 'text-quantum-green',
      inactive: 'text-gray-400'
    }
    return statusColors[status as keyof typeof statusColors] || 'text-gray-400'
  }
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Local Storage utilities
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}

// Generate mock data for Indian businesses
export const mockDataGenerators = {
  generateRevenue: (baseAmount: number, months = 12) => {
    return Array.from({ length: months }, (_, index) => ({
      month: new Date(2024, index).toLocaleDateString('en-IN', { month: 'short' }),
      revenue: baseAmount * (0.8 + Math.random() * 0.4) * (1 + index * 0.05),
      growth: Math.random() * 20 - 5
    }))
  },
  
  generateLeads: (baseCount: number, days = 30) => {
    return Array.from({ length: days }, (_, index) => ({
      date: new Date(Date.now() - (days - index) * 24 * 60 * 60 * 1000),
      leads: Math.floor(baseCount * (0.7 + Math.random() * 0.6)),
      conversions: Math.floor(baseCount * 0.15 * (0.5 + Math.random() * 0.5))
    }))
  },
  
  generatePerformanceMetrics: () => ({
    efficiency: 75 + Math.random() * 20,
    productivity: 80 + Math.random() * 15,
    satisfaction: 85 + Math.random() * 12,
    quality: 90 + Math.random() * 8
  })
}