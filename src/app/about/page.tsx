import React from 'react'
import Image from 'next/image'
import './about.scss'

export default function About() {
  return (
    <main className="about min-h-screen flex flex-col items-center p-5">
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        placeat aut quia eligendi quibusdam unde architecto, rem earum,
        veritatis excepturi maiores asperiores magni illum vitae praesentium
        voluptatum amet? Vel, doloribus.
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
