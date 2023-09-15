import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
  {
    name: 'El pibe de darker than black',
    description: 'Busca el clima actual y el de las proximas 30 horas de la ciudad deseada, la ciudad debe tener un poblacion mayor a 1 millon de habitantes',
    image: '/weatherAPP.png',
    github: 'https://github.com/EliasOjedaMorales/weather-app/',
    link: 'https://elclimademiciudad.vercel.app/'
  },
  {
    name: 'Esos es todo....¡¡Por ahora!! ',
    description: 'Esas son las apps desplegadas, mientras tanto mira este hermosos paisaje.',
    image: '/Nieve.jpg',
    github: 'https://github.com/EliasOjedaMorales/mi-primer-app/blob/main/public/Nieve.jpg',
    link: 'https://egom.vercel.app/_next/image?url=%2FNieve.jpg&w=1080&q=75'
  }

]

export default function ProjectsSection () {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Proyectos
        <hr className='w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded' />
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    <Link href={project.link} target='_blank'>
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </Link>
                  </div>
                  <div className='mt-8 md:w-1/2'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}
