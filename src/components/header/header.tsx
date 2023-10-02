import React from 'react'
import Image from 'next/image'
import Navbar from './navbar'
import './header.scss'

export default function Header() {
  return (
    <header className="header flex items-center justify-between">
      <div className="flex justify-between items-center gap-1">
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="Logo de Pokebola"
        />
        <p className="title-logo">PokeNext</p>
      </div>
      <Navbar />
    </header>
  )
}
