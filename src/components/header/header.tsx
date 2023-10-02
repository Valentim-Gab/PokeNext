import React from 'react'
import Image from 'next/image'
import Navbar from './navbar'
import './header.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header flex items-center justify-between">
      <Link href="/">
        <div className="flex justify-between items-center gap-2">
          <Image
            src="/images/pokeball.png"
            width={30}
            height={30}
            alt="Logo de Pokebola"
          />
          <p className="title-logo">PokeNext</p>
        </div>
      </Link>
      <Navbar />
    </header>
  )
}
