import React from 'react'
import Image from 'next/image'
import './about.scss'
import Link from 'next/link'

export default function About() {
  return (
    <main className="about min-h-screen flex flex-col items-center px-5">
      <h1>Sobre o projeto</h1>
      <p>
        Site que apresenta os detalhes dos personagens chamados de "Pokémon" da
        franquia Pokémon.
      </p>
      <p>
        Fazendo o curso Hora de Codar Next.js, mas adaptando para Next.js 13.
      </p>
      <p>
        <strong className="flex items-center justify-center gap-1">
          Criado por:{' '}
          <Link href="https://github.com/Valentim-Gab" target="_blank">
            Gabriel Valentim
          </Link>
        </strong>
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
    </main>
  )
}
