import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillInstagram } from 'react-icons/ai'

export default function Footer () {
  return (
    <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
      <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 ' />
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between space-y-4 md:space-y-0'>
        <div className='text-neutral-500 dark:text-neutral-100  flex flex-row items-center justify-center space-x-1 font-bold tracking-widest'>
          Elias Gabriel Ojeda Morales
        </div>
        <div className='flex flex-row items-center pb-2 justify-center space-x-12 md:space-x-4 mb-1'>
          <a href='https://github.com/EliasOjedaMorales' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub size={35} className='hover:-translate-y-1 transition-transform cursor-pointer text-[#171515] dark:text-white' />
          </a>
          <a href='https://www.linkedin.com/in/elias-gabriel-ojeda-morales/' target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin size={35} color='#0e76a8' className='hover:-translate-y-1 transition-transform cursor-pointer' />
          </a>
          <a href='https://www.instagram.com/eliasojeda_morales/' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram size={35} color='#C13584' className='hover:-translate-y-1 transition-transform cursor-pointer' />
          </a>
          <a href='mailto:gabriel4081@outlook.es' target='_blank' rel='noopener noreferrer'>
            <AiFillMail size={35} color='#28A8EA' className='hover:-translate-y-1 transition-transform cursor-pointer' />
          </a>
        </div>
      </div>
    </footer>
  )
}
