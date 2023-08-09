'use client'
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import { ThemeProvider } from 'next-themes'
import Head from './head'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head />
      <body className={`dark:bg-[#343f50] bg-slate-100 ${inter.className}`}>
        <ThemeProvider enableSystem attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
