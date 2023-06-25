import SignIn from '@/components/auth/SignIn'
import CloseModal from '@/components/ui/CloseModal'

const page = () => {
  return (
    <div className='fixed inset-0 bg-zinc-950/40 z-10'>
      <div className='container flex items-center h-full max-w-lg mx-auto'>
        <div className='relative w-full h-fit py-10 px-2 rounded-lg'>
          <div className='absolute top-4 right-6'>
            <CloseModal />
            
          </div>

          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default page