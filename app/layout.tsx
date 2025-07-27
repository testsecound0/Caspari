import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Caspari Italian Restaurant - The Taste of Italy in Englefield Green',
  description: 'Experience authentic Italian cuisine at Caspari Italian Restaurant in Englefield Green. Fresh ingredients, traditional recipes, and warm hospitality.',
  keywords: 'Italian restaurant, Englefield Green, authentic Italian food, pizza, pasta, wine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  )
} 