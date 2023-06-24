import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import SignIn from '@/components/auth/SignIn'



const page: FC = () => {
  return (
  <div className='absolute inset-0'>
    <div className='h-full max-2-2xl mx-auto flex flex-col items-center justify-center gap-20'>

        <SignIn />

        <Link href='/' className={cn(buttonVariants({variant: 'ghost'}), 'self-center mt-5')}> {/* self-start */}
          Return Home
        </Link>

        
    </div>
  </div>
)}

export default page