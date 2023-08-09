'use client'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Image from 'next/image'

interface NavItem {
  label: string;
  page: string;
}

const NavItems : Array <NavItem> = [
  {
    label: 'Inicio',
    page: 'home'
  },
  {
    label: 'Proyectos',
    page: 'projects'
  },
  {
    label: 'Sobre mi',
    page: 'about'
  }
]

export default function Navbar () {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className='w-full mx-auto px-4 bg-white shadow dark:bg-[#232b36] fixed top-0 z-50 dark:border-stone-600 sm:px-20'>
      <nav className='justify-between md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between py-3'>
            <div>
              <Image src='/logoWix.jpg' alt='logo EGOM' width={100} height={100} className='rounded-3xl' />
            </div>
            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className='items-center justify-center md:flex md:space-x-6 space-y-8 md:space-y-0'>
              {NavItems.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className='block lg:inline-block text-neutral-900  hover:text-neutral-500 hover:scale-125 duration-500 dark:text-neutral-100 cursor-pointer'
                    activeClass='active'
                    // eslint-disable-next-line react/jsx-boolean-value
                    spy={true}
                    // eslint-disable-next-line react/jsx-boolean-value
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === 'dark'
                ? (
                  <button
                    onClick={() => setTheme('light')}
                    className='bg-slate-100 p-2 rounded-xl hover:bg-neutral-500 hover:scale-125 duration-500'
                  >
                    <RiSunLine size={25} color='black' />
                  </button>
                  )
                : (
                  <button
                    onClick={() => setTheme('dark')}
                    className='bg-slate-100 p-2 rounded-xl hover:bg-neutral-500 hover:scale-125 duration-500'
                  >
                    <RiMoonFill size={25} />
                  </button>
                  )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
