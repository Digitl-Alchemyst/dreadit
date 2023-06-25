'use client'

import { X } from 'lucide-react'
import { Button } from './Button'
import { useRouter } from 'next/navigation'



const CloseModal = () => {

    const router = useRouter()
  return (
    <Button aria-label='close modal' onClick={() => router.back()} className='h-6 w-6 p-0 rounded-md bg-zinc-500 text-stone-800 shadow shadow-stone-300 hover:bg-zinc-800 hover:text-stone-500' > 
        <X className='w-5 h-5' />
    </Button>
  )
}

export default CloseModal