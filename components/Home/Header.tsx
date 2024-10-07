import { Orbit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className='container flex justify-between items-center px-8 py-4 mx-auto'>
      <div className='flex lg:flex-1'>
        <Link href={'/'} className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>
          <span className='flex items-center gap-2 shrink-0'>
            <Orbit className='hover:rotate-12 transform transition duration-200 ease-in-out' />
            <span className='text-lg font-extrabold'>SpeakEasy</span>
          </span>
        </Link>
      </div>

      <div className='flex lg:justify-center gap-2 lg:gap-12 lg:items-center'>
        <Link href={'/#pricing'} className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>Pricing</Link>
        <Link href={'/#posts'} className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>Your Posts</Link>
      </div>

      <div className='flex lg:flex-1 lg:justify-end'>
        <div className='flex gap-2 items-center'>
          <Link href={'/dashboard'} className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>Upload a Video</Link>
        <Link href={'/login'} className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header