import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="not-found min-h-screen flex flex-col items-center gap-16 p-4">
      <h1>Se perdeu?</h1>
      <Image
        src="/images/mega-slowbro.png"
        width={500}
        height={500}
        alt="Mega Slowbro dormindo"
      />
      <Link href="/">Início</Link>
    </main>
  )
}
