import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="flex justify-beetwen items-center gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}
