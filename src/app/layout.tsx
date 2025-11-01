import './globals.css'
import React from 'react'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

export const metadata = {
  title: 'Mẹ & Bé',
  description: 'Cửa hàng Mẹ & Bé - Sản phẩm chất lượng cho mẹ và bé'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
