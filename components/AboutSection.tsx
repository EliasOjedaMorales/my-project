import React from 'react'

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'SQL' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind' },
  { skill: 'Git' },
  { skill: 'GitHub' }
]

export default function AboutSection () {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-16'>
        <h2 className='text-center font-bold text-4xl'>Sobre mi</h2>
        <hr className='w-6 h-1 mx-auto my-4 bg-amber-500 border-0 rounded' />
        <div className='flex flex-col space-y-16 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
          <div className='md:w-1/2 '>
            <h3 className='text-center text-2xl font-bold mb-6 md:text-left'>¡Conoceme un poco!</h3>
            <p>¡Hola! Soy Elías, un entusiasta en ciernes de la ingeniería en sistemas, actualmente embarcado en mi viaje educativo en la Universidad Tecnológica Nacional.</p>
            <p>Mi pasión por la tecnología y el desarrollo web nació a través de la autodidacta exploración de tutoriales en línea, videos inspiradores y las gemas ocultas de la comunidad en blogs.</p>
            <p>Mi camino en el desarrollo de páginas web ha sido una emocionante aventura, donde no solo me he sumergido en la documentación para comprender los entresijos del código, sino que también he experimentado con audaces ideas y he confiado en la ayuda de inteligencias artificiales para superar desafíos.</p>
            <p>Cada línea de código que escribo es un paso hacia la creación de soluciones que hagan la vida más eficiente y atractiva. Mi viaje no es solo sobre aprender, sino también sobre aplicar mi conocimiento en formas creativas y útiles.</p>
            <p>¡Estoy emocionado de seguir explorando el mundo de la tecnología y colaborar en proyectos que hagan una diferencia significativa!</p>
            <p>No dudes en ponerme en contacto si deseas colaborar, aprender juntos o simplemente charlar.</p>
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-center text-2xl font-bold mb-6 md:text-left'>Mis habilidades</h3>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (<p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 rounded font-semibold dark:bg-gray-800'>{item.skill}</p>)
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
