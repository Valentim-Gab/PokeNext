import React from 'react'
import Image from 'next/image'
import Navbar from './navbar'

export default function Header() {
  return (
    <header>
      <div>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="Logo de Pokebola"
        />
        <p>PokeNext</p>
        <Navbar />
      </div>
    </header>
  )
}
