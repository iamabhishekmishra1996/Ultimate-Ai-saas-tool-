import type { Metadata } from "next"
import { Inter, Orbitron, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers/Providers"
import { Toaster } from "react-hot-toast"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BlackBox AI - Revolutionary Business Automation Platform",
  description: "The world's most advanced AI-powered business automation platform with quantum analytics, neural intelligence, and autonomous decision-making capabilities.",
  keywords: [
    "AI automation",
    "business intelligence", 
    "quantum analytics",
    "neural networks",
    "WhatsApp automation",
    "predictive analytics",
    "glassmorphism UI",
    "Indian business solutions"
  ],
  authors: [{ name: "BlackBox AI" }],
  creator: "BlackBox AI",
  publisher: "BlackBox AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackbox.ai",
    title: "BlackBox AI - Revolutionary Business Automation Platform",
    description: "Experience the future of business automation with AI-powered quantum analytics and neural intelligence.",
    siteName: "BlackBox AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlackBox AI - Revolutionary Business Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlackBox AI - Revolutionary Business Automation Platform",
    description: "Experience the future of business automation with AI-powered quantum analytics and neural intelligence.",
    images: ["/og-image.png"],
    creator: "@blackboxai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00FFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/orbitron-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/roboto-mono-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.blackbox.ai" />
        
        {/* Quantum performance optimizations */}
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Advanced browser features */}
        <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Progressive Web App capabilities */}
        <meta name="application-name" content="BlackBox AI" />
        <meta name="apple-mobile-web-app-title" content="BlackBox AI" />
        <meta name="msapplication-starturl" content="/" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BlackBox AI",
              "description": "Revolutionary AI-powered business automation platform",
              "url": "https://blackbox.ai",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "1000"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-quantum-gradient text-white antialiased overflow-x-hidden">
        {/* Cosmic particle system */}
        <div className="particles fixed inset-0 pointer-events-none z-0">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Neural network background pattern */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-purple/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--quantum-green)_1px,_transparent_1px)] bg-[length:100px_100px] opacity-20" />
        </div>

        {/* Main application */}
        <div className="relative z-10 min-h-screen">
          <Providers>
            {children}
          </Providers>
        </div>

        {/* Global toast notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            className: "quantum-toast",
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 255, 255, 0.3)",
              borderRadius: "16px",
              color: "#FFFFFF",
              fontSize: "14px",
              fontFamily: "var(--font-roboto-mono)",
            },
            success: {
              iconTheme: {
                primary: "#39FF14",
                secondary: "#000000",
              },
              style: {
                borderLeft: "4px solid #39FF14",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#000000",
              },
              style: {
                borderLeft: "4px solid #EF4444",
              },
            },
            loading: {
              iconTheme: {
                primary: "#00FFFF",
                secondary: "#000000",
              },
              style: {
                borderLeft: "4px solid #00FFFF",
              },
            },
          }}
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Web Vitals monitoring
              function vitalsHandler({name, value, id}) {
                // Send to analytics
                if (typeof gtag !== 'undefined') {
                  gtag('event', name, {
                    event_category: 'Web Vitals',
                    event_label: id,
                    value: Math.round(name === 'CLS' ? value * 1000 : value),
                    non_interaction: true,
                  });
                }
              }
              
              // Load Web Vitals
              import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({onCLS, onFID, onFCP, onLCP, onTTFB}) => {
                onCLS(vitalsHandler);
                onFID(vitalsHandler);
                onFCP(vitalsHandler);
                onLCP(vitalsHandler);
                onTTFB(vitalsHandler);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
