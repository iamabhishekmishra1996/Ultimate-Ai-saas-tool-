// Core User & Authentication Types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'admin' | 'manager' | 'user'
  company: Company
  preferences: UserPreferences
  subscription: Subscription
  createdAt: Date
  lastActive: Date
}

export interface Company {
  id: string
  name: string
  industry: string
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  country: string
  timezone: string
  currency: 'INR' | 'USD' | 'EUR' | 'GBP'
  logo?: string
  gst?: string
  pan?: string
  settings: CompanySettings
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto'
  dashboardMode: 'compact' | 'advanced' | 'autopilot'
  notifications: NotificationSettings
  language: string
  dateFormat: string
  numberFormat: string
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
  whatsapp: boolean
  alerts: AlertSettings
}

export interface AlertSettings {
  revenueDrops: boolean
  leadSpikes: boolean
  systemErrors: boolean
  performanceIssues: boolean
  securityAlerts: boolean
}

export interface Subscription {
  plan: 'starter' | 'professional' | 'enterprise' | 'quantum'
  status: 'active' | 'cancelled' | 'expired' | 'trial'
  features: string[]
  limits: SubscriptionLimits
  billingCycle: 'monthly' | 'yearly'
  nextBilling: Date
  usage: UsageMetrics
}

export interface SubscriptionLimits {
  widgets: number
  automations: number
  integrations: number
  storage: number // GB
  apiCalls: number
  users: number
}

export interface UsageMetrics {
  widgets: number
  automations: number
  integrations: number
  storage: number
  apiCalls: number
  users: number
}

// Dashboard & Widget Types
export interface DashboardWidget {
  id: string
  type: WidgetType
  title: string
  position: WidgetPosition
  size: WidgetSize
  config: WidgetConfig
  data: any
  isVisible: boolean
  tier: 'compact' | 'advanced' | 'autopilot'
  aiEnabled: boolean
  refreshInterval: number
  lastUpdated: Date
}

export type WidgetType = 
  // Tier 1: Compact Mode (9 widgets)
  | 'quantum-revenue-analytics'
  | 'neural-lead-intelligence'
  | 'whatsapp-command-center'
  | 'predictive-crm-matrix'
  | 'smart-inventory-oracle'
  | 'human-performance-analytics'
  | 'customer-happiness-index'
  | 'financial-intelligence-hub'
  | 'marketing-roi-maximizer'
  // Tier 2: Advanced Mode (additional 9 widgets)
  | 'social-sentiment-constellation'
  | 'email-engagement-predictor'
  | 'seo-quantum-analytics'
  | 'vendor-relationship-optimizer'
  | 'project-success-probability'
  | 'quality-assurance-predictor'
  | 'customer-support-intelligence'
  | 'automated-accounting-prophet'
  | 'supply-chain-visibility'
  // Tier 3: Autopilot Mode (additional 10 widgets)
  | 'market-crystal-ball'
  | 'risk-quantum-scanner'
  | 'automation-health-monitor'
  | 'customer-dna-analyzer'
  | 'neural-notification-intelligence'
  | 'competition-xray-vision'
  | 'resource-optimization-engine'
  | 'regulatory-compliance-autopilot'
  | 'whatsapp-business-omniscience'
  | 'business-growth-accelerator'

export interface WidgetPosition {
  x: number
  y: number
  w: number
  h: number
}

export interface WidgetSize {
  minW: number
  minH: number
  maxW: number
  maxH: number
}

export interface WidgetConfig {
  dataSource: string
  filters: Record<string, any>
  customization: WidgetCustomization
  aiSettings: AISettings
}

export interface WidgetCustomization {
  colors: string[]
  theme: 'glass-light' | 'glass-medium' | 'glass-heavy' | 'glass-ultra'
  animation: boolean
  showLegend: boolean
  showTooltips: boolean
  chartType?: ChartType
}

export interface AISettings {
  predictions: boolean
  insights: boolean
  alerts: boolean
  autoOptimization: boolean
  confidenceThreshold: number
}

export type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'radar' | 'heatmap' | '3d'

// Business Intelligence Types
export interface BusinessMetrics {
  revenue: RevenueMetrics
  leads: LeadMetrics
  customers: CustomerMetrics
  operations: OperationMetrics
  performance: PerformanceMetrics
  predictions: PredictionMetrics
}

export interface RevenueMetrics {
  current: number
  previous: number
  growth: number
  target: number
  forecast: number[]
  breakdown: RevenueBreakdown
  trends: TrendData[]
}

export interface RevenueBreakdown {
  products: Record<string, number>
  channels: Record<string, number>
  regions: Record<string, number>
  customers: Record<string, number>
}

export interface LeadMetrics {
  total: number
  new: number
  qualified: number
  converted: number
  conversionRate: number
  sources: LeadSource[]
  funnel: FunnelStage[]
  predictions: LeadPrediction[]
}

export interface LeadSource {
  name: string
  count: number
  quality: number
  conversionRate: number
  cost: number
}

export interface FunnelStage {
  name: string
  count: number
  conversionRate: number
  averageTime: number
}

export interface LeadPrediction {
  id: string
  contact: Contact
  score: number
  probability: number
  nextAction: string
  timeline: string
  value: number
}

export interface CustomerMetrics {
  total: number
  active: number
  churnRate: number
  satisfaction: number
  lifetime: number
  segments: CustomerSegment[]
  behavior: CustomerBehavior
}

export interface CustomerSegment {
  name: string
  count: number
  value: number
  characteristics: string[]
  trends: TrendData[]
}

export interface CustomerBehavior {
  engagement: number
  frequency: number
  recency: number
  monetary: number
  patterns: BehaviorPattern[]
}

export interface BehaviorPattern {
  type: string
  frequency: number
  value: number
  prediction: string
}

export interface OperationMetrics {
  efficiency: number
  productivity: number
  quality: number
  costs: CostBreakdown
  inventory: InventoryMetrics
  automation: AutomationMetrics
}

export interface CostBreakdown {
  total: number
  categories: Record<string, number>
  trends: TrendData[]
  optimization: OptimizationSuggestion[]
}

export interface InventoryMetrics {
  total: number
  turnover: number
  stockouts: number
  excess: number
  predictions: InventoryPrediction[]
}

export interface InventoryPrediction {
  item: string
  currentStock: number
  demandForecast: number
  reorderPoint: number
  suggestedOrder: number
  confidence: number
}

export interface AutomationMetrics {
  activeWorkflows: number
  totalExecutions: number
  successRate: number
  timesSaved: number
  errorRate: number
  performance: WorkflowPerformance[]
}

export interface WorkflowPerformance {
  id: string
  name: string
  executions: number
  successRate: number
  averageTime: number
  savings: number
  status: 'active' | 'paused' | 'error'
}

export interface PerformanceMetrics {
  kpis: KPI[]
  goals: Goal[]
  benchmarks: Benchmark[]
  trends: TrendData[]
}

export interface KPI {
  id: string
  name: string
  value: number
  target: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  status: 'good' | 'warning' | 'critical'
}

export interface Goal {
  id: string
  name: string
  target: number
  current: number
  deadline: Date
  progress: number
  status: 'on-track' | 'at-risk' | 'behind' | 'completed'
}

export interface Benchmark {
  metric: string
  industry: number
  company: number
  difference: number
  rank: string
}

export interface PredictionMetrics {
  revenue: Prediction
  leads: Prediction
  churn: Prediction
  demand: Prediction
  risks: RiskPrediction[]
}

export interface Prediction {
  value: number
  confidence: number
  range: [number, number]
  factors: PredictionFactor[]
  timeline: string
}

export interface PredictionFactor {
  name: string
  impact: number
  direction: 'positive' | 'negative'
  confidence: number
}

export interface RiskPrediction {
  type: string
  probability: number
  impact: 'low' | 'medium' | 'high' | 'critical'
  timeline: string
  mitigation: string[]
}

export interface TrendData {
  date: Date
  value: number
  change: number
  prediction?: number
}

export interface OptimizationSuggestion {
  category: string
  description: string
  impact: number
  effort: 'low' | 'medium' | 'high'
  roi: number
}

// Automation & Integration Types
export interface Automation {
  id: string
  name: string
  description: string
  type: AutomationType
  status: 'active' | 'paused' | 'error' | 'draft'
  trigger: AutomationTrigger
  actions: AutomationAction[]
  conditions: AutomationCondition[]
  schedule: AutomationSchedule
  performance: AutomationPerformance
  ai: AutomationAI
  createdAt: Date
  updatedAt: Date
}

export type AutomationType = 
  | 'lead-nurturing'
  | 'customer-onboarding'
  | 'order-processing'
  | 'inventory-management'
  | 'support-ticket'
  | 'marketing-campaign'
  | 'data-sync'
  | 'report-generation'
  | 'compliance-check'
  | 'custom'

export interface AutomationTrigger {
  type: 'webhook' | 'schedule' | 'event' | 'condition'
  config: Record<string, any>
  filters: TriggerFilter[]
}

export interface TriggerFilter {
  field: string
  operator: 'equals' | 'contains' | 'greater' | 'less' | 'between'
  value: any
}

export interface AutomationAction {
  id: string
  type: ActionType
  config: ActionConfig
  conditions: ActionCondition[]
  retry: RetryConfig
  timeout: number
}

export type ActionType = 
  | 'send-email'
  | 'send-whatsapp'
  | 'create-task'
  | 'update-crm'
  | 'generate-report'
  | 'api-call'
  | 'data-transform'
  | 'notification'
  | 'approval'
  | 'custom'

export interface ActionConfig {
  service: string
  method: string
  parameters: Record<string, any>
  template?: string
  mapping?: FieldMapping[]
}

export interface FieldMapping {
  source: string
  target: string
  transform?: string
}

export interface ActionCondition {
  field: string
  operator: string
  value: any
  logic: 'and' | 'or'
}

export interface RetryConfig {
  attempts: number
  delay: number
  backoff: 'linear' | 'exponential'
}

export interface AutomationCondition {
  id: string
  field: string
  operator: string
  value: any
  logic: 'and' | 'or'
}

export interface AutomationSchedule {
  type: 'immediate' | 'delay' | 'schedule' | 'recurring'
  delay?: number
  cron?: string
  timezone?: string
  startDate?: Date
  endDate?: Date
}

export interface AutomationPerformance {
  executions: number
  successes: number
  failures: number
  averageTime: number
  lastRun: Date
  nextRun?: Date
  errors: AutomationError[]
}

export interface AutomationError {
  timestamp: Date
  message: string
  step: string
  severity: 'low' | 'medium' | 'high'
  resolved: boolean
}

export interface AutomationAI {
  optimization: boolean
  learning: boolean
  suggestions: AISuggestion[]
  confidence: number
  improvements: AIImprovement[]
}

export interface AISuggestion {
  type: 'optimization' | 'fix' | 'enhancement'
  description: string
  impact: number
  confidence: number
  implementation: string
}

export interface AIImprovement {
  metric: string
  before: number
  after: number
  improvement: number
  appliedAt: Date
}

// Integration Types
export interface Integration {
  id: string
  name: string
  type: IntegrationType
  status: 'connected' | 'disconnected' | 'error' | 'pending'
  config: IntegrationConfig
  credentials: IntegrationCredentials
  sync: SyncSettings
  usage: IntegrationUsage
  health: IntegrationHealth
  createdAt: Date
  lastSync: Date
}

export type IntegrationType = 
  // Communication
  | 'whatsapp-business'
  | 'telegram'
  | 'slack'
  | 'discord'
  | 'email'
  // CRM & Sales
  | 'salesforce'
  | 'hubspot'
  | 'pipedrive'
  | 'zoho-crm'
  // E-commerce
  | 'shopify'
  | 'woocommerce'
  | 'magento'
  | 'bigcommerce'
  // Payment
  | 'stripe'
  | 'razorpay'
  | 'paypal'
  | 'square'
  // Accounting
  | 'quickbooks'
  | 'xero'
  | 'freshbooks'
  | 'zoho-books'
  // Automation
  | 'make'
  | 'zapier'
  | 'n8n'
  | 'power-automate'
  // Analytics
  | 'google-analytics'
  | 'mixpanel'
  | 'amplitude'
  | 'custom-api'

export interface IntegrationConfig {
  endpoint?: string
  version?: string
  features: string[]
  settings: Record<string, any>
  mappings: FieldMapping[]
}

export interface IntegrationCredentials {
  type: 'api-key' | 'oauth' | 'basic' | 'custom'
  encrypted: boolean
  expiresAt?: Date
  refreshToken?: string
  scopes?: string[]
}

export interface SyncSettings {
  enabled: boolean
  frequency: 'realtime' | 'hourly' | 'daily' | 'weekly'
  direction: 'import' | 'export' | 'bidirectional'
  filters: SyncFilter[]
  mapping: Record<string, string>
}

export interface SyncFilter {
  field: string
  operator: string
  value: any
  action: 'include' | 'exclude'
}

export interface IntegrationUsage {
  requests: number
  data: number
  errors: number
  lastRequest: Date
  limits: IntegrationLimits
}

export interface IntegrationLimits {
  requests: number
  data: number
  resetPeriod: string
  remaining: number
}

export interface IntegrationHealth {
  status: 'healthy' | 'warning' | 'critical'
  uptime: number
  latency: number
  errorRate: number
  lastCheck: Date
  issues: HealthIssue[]
}

export interface HealthIssue {
  type: string
  severity: 'low' | 'medium' | 'high'
  message: string
  timestamp: Date
  resolved: boolean
}

// Communication & Contact Types
export interface Contact {
  id: string
  name: string
  email?: string
  phone?: string
  whatsapp?: string
  company?: string
  position?: string
  source: string
  tags: string[]
  customFields: Record<string, any>
  activities: Activity[]
  score: number
  status: ContactStatus
  createdAt: Date
  updatedAt: Date
}

export type ContactStatus = 
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal'
  | 'negotiation'
  | 'closed-won'
  | 'closed-lost'
  | 'nurturing'

export interface Activity {
  id: string
  type: ActivityType
  description: string
  timestamp: Date
  user?: string
  metadata: Record<string, any>
}

export type ActivityType = 
  | 'email-sent'
  | 'email-opened'
  | 'email-clicked'
  | 'whatsapp-sent'
  | 'whatsapp-received'
  | 'call-made'
  | 'meeting-scheduled'
  | 'form-submitted'
  | 'page-visited'
  | 'document-downloaded'

export interface Campaign {
  id: string
  name: string
  type: CampaignType
  status: 'draft' | 'active' | 'paused' | 'completed'
  channels: CommunicationChannel[]
  audience: AudienceSegment
  content: CampaignContent
  schedule: CampaignSchedule
  performance: CampaignPerformance
  ai: CampaignAI
  createdAt: Date
}

export type CampaignType = 
  | 'email-marketing'
  | 'whatsapp-broadcast'
  | 'lead-nurturing'
  | 'customer-retention'
  | 'product-launch'
  | 'promotional'
  | 'educational'

export type CommunicationChannel = 
  | 'email'
  | 'whatsapp'
  | 'sms'
  | 'push'
  | 'in-app'

export interface AudienceSegment {
  id: string
  name: string
  criteria: SegmentCriteria[]
  size: number
  contacts: string[]
}

export interface SegmentCriteria {
  field: string
  operator: string
  value: any
  logic: 'and' | 'or'
}

export interface CampaignContent {
  subject?: string
  message: string
  template?: string
  personalization: PersonalizationRule[]
  attachments: Attachment[]
  variables: Record<string, string>
}

export interface PersonalizationRule {
  placeholder: string
  source: string
  fallback: string
  transform?: string
}

export interface Attachment {
  name: string
  url: string
  type: string
  size: number
}

export interface CampaignSchedule {
  type: 'immediate' | 'scheduled' | 'drip'
  startDate?: Date
  endDate?: Date
  frequency?: string
  sequence?: CampaignStep[]
}

export interface CampaignStep {
  delay: number
  content: CampaignContent
  conditions: StepCondition[]
}

export interface StepCondition {
  type: 'opened' | 'clicked' | 'replied' | 'time'
  value?: any
  action: 'continue' | 'skip' | 'exit'
}

export interface CampaignPerformance {
  sent: number
  delivered: number
  opened: number
  clicked: number
  replied: number
  unsubscribed: number
  bounced: number
  revenue: number
  conversions: number
}

export interface CampaignAI {
  optimization: boolean
  testing: ABTest[]
  insights: CampaignInsight[]
  recommendations: AIRecommendation[]
}

export interface ABTest {
  id: string
  variable: string
  variants: TestVariant[]
  winner?: string
  confidence: number
  status: 'running' | 'completed' | 'paused'
}

export interface TestVariant {
  id: string
  name: string
  content: any
  performance: CampaignPerformance
  traffic: number
}

export interface CampaignInsight {
  type: string
  message: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendation?: string
}

export interface AIRecommendation {
  type: 'content' | 'timing' | 'audience' | 'channel'
  description: string
  impact: number
  confidence: number
  implementation: string
}

// Notification & Alert Types
export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  severity: 'info' | 'warning' | 'error' | 'success'
  read: boolean
  actionable: boolean
  actions: NotificationAction[]
  metadata: Record<string, any>
  timestamp: Date
  expiresAt?: Date
}

export type NotificationType = 
  | 'system'
  | 'alert'
  | 'reminder'
  | 'achievement'
  | 'update'
  | 'integration'
  | 'automation'
  | 'ai-insight'

export interface NotificationAction {
  id: string
  label: string
  type: 'link' | 'button' | 'modal'
  config: Record<string, any>
}

// System & Configuration Types
export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'down'
  uptime: number
  performance: PerformanceStats
  services: ServiceStatus[]
  alerts: SystemAlert[]
  lastCheck: Date
}

export interface PerformanceStats {
  responseTime: number
  throughput: number
  errorRate: number
  cpuUsage: number
  memoryUsage: number
  diskUsage: number
}

export interface ServiceStatus {
  name: string
  status: 'up' | 'down' | 'degraded'
  uptime: number
  latency: number
  lastCheck: Date
}

export interface SystemAlert {
  id: string
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  timestamp: Date
  resolved: boolean
  acknowledgedBy?: string
}

export interface CompanySettings {
  branding: BrandingSettings
  security: SecuritySettings
  integrations: IntegrationSettings
  notifications: NotificationPreferences
  ai: AISettings
  compliance: ComplianceSettings
}

export interface BrandingSettings {
  primaryColor: string
  secondaryColor: string
  logo: string
  favicon: string
  customCss?: string
  whiteLabel: boolean
}

export interface SecuritySettings {
  twoFactor: boolean
  passwordPolicy: PasswordPolicy
  sessionTimeout: number
  ipWhitelist: string[]
  auditLog: boolean
  encryption: EncryptionSettings
}

export interface PasswordPolicy {
  minLength: number
  requireNumbers: boolean
  requireSymbols: boolean
  requireUppercase: boolean
  requireLowercase: boolean
  maxAge: number
}

export interface EncryptionSettings {
  atRest: boolean
  inTransit: boolean
  algorithm: string
  keyRotation: number
}

export interface IntegrationSettings {
  allowed: IntegrationType[]
  rateLimits: Record<string, number>
  webhookSecurity: boolean
  dataRetention: number
}

export interface NotificationPreferences {
  channels: CommunicationChannel[]
  frequency: 'immediate' | 'hourly' | 'daily'
  quietHours: QuietHours
  types: Record<NotificationType, boolean>
}

export interface QuietHours {
  enabled: boolean
  start: string
  end: string
  timezone: string
  days: number[]
}

export interface ComplianceSettings {
  gdpr: boolean
  ccpa: boolean
  sox: boolean
  hipaa: boolean
  dataRetention: number
  rightToErase: boolean
  consentManagement: boolean
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  meta?: ApiMeta
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

export interface ApiMeta {
  page?: number
  limit?: number
  total?: number
  hasMore?: boolean
  timestamp: Date
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: PaginationInfo
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  pages: number
  hasNext: boolean
  hasPrev: boolean
}

// Event & Analytics Types
export interface AnalyticsEvent {
  id: string
  type: string
  category: string
  action: string
  label?: string
  value?: number
  properties: Record<string, any>
  userId?: string
  sessionId: string
  timestamp: Date
  source: string
  ip?: string
  userAgent?: string
}

export interface SessionData {
  id: string
  userId?: string
  startTime: Date
  endTime?: Date
  duration?: number
  events: AnalyticsEvent[]
  device: DeviceInfo
  location: LocationInfo
}

export interface DeviceInfo {
  type: 'desktop' | 'mobile' | 'tablet'
  os: string
  browser: string
  screen: {
    width: number
    height: number
  }
}

export interface LocationInfo {
  country: string
  region: string
  city: string
  timezone: string
  coordinates?: {
    lat: number
    lng: number
  }
}