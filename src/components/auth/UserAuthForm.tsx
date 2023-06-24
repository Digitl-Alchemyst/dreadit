'use client'

import { FC, useState } from 'react'
import { Button} from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { Icons } from '@/components/ui/Icons'
import { useToast } from "../../hooks/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {toast} = useToast()

    const loginWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signIn('google')     
        } catch (error) {
            // Toast Notify
            toast({
                title: 'There was an error logging in with Google',
                description: 'Please configure the Google OAuth provider correctly.',
                variant: 'destructive',
            })
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button
                onClick={loginWithGoogle}
                isLoading={isLoading} 
                size='sm' 
                className='w-full text-stone-300 bg-zinc-800 border border-zinc-600 shadow-md shadow-zinc-900/60 hover:bg-zinc-600 hover:text-stone-800 hover:border-zinc-500 hover:shadow-rose-500/60'
            >
                {isLoading ? null : <Icons.google className='w-5 h-5 mr-3' />}
                Google
            </Button>
        </div>
    )
}

export default UserAuthForm