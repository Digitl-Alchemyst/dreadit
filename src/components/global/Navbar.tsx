import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '../ui/Button'
import { getAuthSession } from '@/lib/auth'
import AccountMenu from '../modules/AccountMenu'


const Navbar = async () => {

  const session = await getAuthSession()

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-800 border-b-2 border-zinc-500/50 z-[10] py-2 shadow-md shadow-rose-500/30">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* Logo  */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src='/branding/Dreadit.png'
            alt='Dreadit' 
            width={50}
            height={50}
            className='bg-rose-900 rounded-full self-center shadow-md shadow-rose-500/50'
          />

          <p className="hidden md:block text-2xl font-bold text-rose-900">dreadit</p>
        </Link>

        {/* Subreddit Dropdown Menu  */}

        {/* Search Bar  */}

        {/* Button Bar  */}

        
        {session?.user ? (

        /* Account Dropdown Menu */
            <AccountMenu user={session.user} />
          
        /* Login  */
            ) : (
              <Link href="/login" className={buttonVariants()}>
                Login
              </Link>
            )
        }
        
      </div>      
    </div>
  )
}

export default Navbar

