import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import '../styles/index.css'

import { Providers } from './providers'

export const metadata: Metadata = {
    title: '弥生会計 A2E Prototype',
    description: 'キーボード・ファースト、高密度UIのPoC',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>
                <Providers>
                    {children}
                    <Toaster richColors closeButton />
                </Providers>
            </body>
        </html>
    )
}
