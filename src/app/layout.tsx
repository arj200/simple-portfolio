import './globals.css'

export const metadata = {
  title: 'Pavithra K - Machine Learning Engineer',
  description: 'Aspiring Machine Learning Engineer with expertise in AI/ML, Python programming, and data science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
