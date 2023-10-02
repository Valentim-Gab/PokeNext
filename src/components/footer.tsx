import React from 'react'
import './footer.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer flex flex-col items-center justify-center gap-4">
      <p>
        <span>PokeNext</span> &copy; 2023
      </p>
      <p className="flex gap-1">
        Desenvolvido por
        <span>
          <Link href="https://github.com/Valentim-Gab" target="_blank">
            Gabriel Valentim
          </Link>
        </span>
      </p>
    </footer>
  )
}
