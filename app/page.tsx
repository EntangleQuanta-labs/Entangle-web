"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Smartphone, Apple, Shield, Zap, Share2, Github, Twitter, Heart, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [stars, setStars] = useState<number>(0)
  // Remove these lines
  // const [textIndex, setTextIndex] = useState(0)

  const texts = [
    "Build the Automate Workflow for Your mobile",
    "Seamless connectivity across devices",
    "Secure file sharing made simple",
    "Boost your productivity with Entangle",
  ]

  useEffect(() => {
    // Simulated GitHub stars count - replace with actual API call if needed
    setStars(1337)

    // Remove this useEffect
    // const interval = setInterval(() => {
    //   setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    // }, 5000)

    // return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-background/90 to-background dark:from-background/50 dark:to-background/80">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 md:py-24">
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12 md:mb-24 bg-background/50 dark:bg-background/30 backdrop-blur-sm p-4 rounded-lg">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold flex items-center gap-2"
            >
              <div className="logo-shadow dark:logo-shadow-dark">
                <Image width={40} height={40} src="/logo.png" alt="Entangle Logo" />
              </div>
              Entangle
            </motion.h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-2 sm:gap-6 order-2 sm:order-1">
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  Features
                </Button>
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  About
                </Button>
                <Button variant="ghost" size="sm" className="text-sm font-medium">
                  Support
                </Button>
              </div>
              <div className="flex items-center gap-4 order-1 sm:order-2">
                <ThemeToggle />
                <motion.a
                  href="https://github.com/EntangleQuanta-labs/Entangle-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">{stars.toLocaleString()}</span>
                </motion.a>
              </div>
            </div>
          </nav>

          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 bg-background/50 dark:bg-background/30 backdrop-blur-sm p-8 rounded-3xl">
            <motion.div
              className="flex-1 space-y-8 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
                variants={fadeInUp}
              >
               Build Automate Workflow for Your mobile
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
                variants={fadeInUp}
              >
                Experience seamless connectivity and sharing with Entangle. Download now and join millions of users
                worldwide.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start"
                variants={fadeInUp}
              >
                <Button size="lg" className="gap-2 w-full sm:w-auto text-lg px-8 py-6">
                  <Download className="h-6 w-6" />
                  Download for Android
                </Button>
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto text-lg px-8 py-6" disabled>
                  <Image src="/apple.svg" alt="Apple" width={24} height={24} />
                  iOS Coming Soon
                </Button>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center md:justify-start gap-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg backdrop-blur-sm transition-all hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <Github className="h-8 w-8 text-primary" />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Proudly open source</span>
                  <span className="text-sm text-muted-foreground">Join our community on GitHub</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 w-full md:w-auto relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-foreground/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80"
                alt="Entangle App Preview"
                className="rounded-3xl shadow-2xl w-full max-w-[600px] mx-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
    {/*     <section className="py-24 md:py-32 bg-gradient-to-b from-background/90 to-background dark:from-background/50 dark:to-background/80">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Entangle?
            </motion.h2>
            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Shield,
                  title: "Secure Sharing",
                  description: "End-to-end encryption ensures your data stays private and secure.",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Optimized for speed with minimal latency for real-time sharing.",
                },
                {
                  icon: Smartphone,
                  title: "Cross-Platform",
                  description: "Coming soon to iOS - share across all your devices seamlessly.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 space-y-6 h-full bg-background/50 dark:bg-card/20 backdrop-blur-sm border-primary/10 hover:bg-background/70 dark:hover:bg-card/30 transition-colors">
                    <feature.icon className="h-16 w-16 text-primary" />
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Download Section */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="bg-background/50 dark:bg-background/30 backdrop-blur-sm p-8 rounded-3xl">
            <motion.div
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Download Entangle now and experience the future of connectivity. iOS version coming soon!
              </p>
              <div className="flex justify-center gap-6 pt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="gap-2 text-lg px-8 py-6">
                    <Download className="h-6 w-6" />
                    Download APK
                  </Button>
                </motion.div>
              </div>
              <p className="text-lg text-muted-foreground pt-6">Version 1.0.0 | Released April 2024</p>
            </motion.div>
          </div>
        </section>
        

        {/* Footer */}
        <footer className="border-t border-primary/10 bg-background/50 dark:bg-card/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-6 col-span-2 sm:col-span-2 md:col-span-1">
                <div className="flex items-center gap-3">
                  <Share2 className="h-8 w-8 text-primary" />
                  <span className="font-bold text-2xl">Entangle</span>
                </div>
                <p className="text-lg text-muted-foreground">Open source file sharing and connectivity solution.</p>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-xl">Community</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary flex items-center gap-3 transition-colors">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary flex items-center gap-3 transition-colors">
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-xl">Resources</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contributing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-semibold text-xl">Legal</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-lg text-muted-foreground text-center md:text-left">
                © 2024 Entangle. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                Made with <Heart className="h-5 w-5 text-red-500" /> by the
                <Link href="#">Entangle Quanta Labs</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

