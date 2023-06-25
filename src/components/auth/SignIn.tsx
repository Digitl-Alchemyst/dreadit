'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserAuthForm from '@/components/auth/UserAuthForm';


  
interface SignInProps {
  isModal?: boolean;
}

const SignIn: FC<SignInProps> = ({ isModal = false }) => {

  return( 
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] '>
        <div className='flex flex-col space-y-2 text-center bg-zinc-600/60 border-2 border-zinc-500/50 rounded-lg shadow-lg shadow-rose-400/50 p-3'>

            {/* Logo  */}
            <Image 
              src='/branding/Dreadit.png'
              alt='Dreadit' 
              width={75}
              height={75}
              className='bg-rose-900 rounded-full self-center shadow-lg shadow-rose-500/50'
            />
            <h1 className='text-2xl font-semibold tracking-tight text-rose-700'>Welcome Back!</h1>
            <p className='text-sm max-w-xs text-stone-600 mx-auto'>By Logging into Dreadit you agree to our Terms of Service & Privacy Policy.</p>
            
            {/* Sign In Form  */}
            <UserAuthForm  />
            <p className='px-8 text-center text-sm text-stone-300 pt-2'>
                New to Dreadit?{`  `}
                <Link 
                    href='/register' 
                    className='text-rose-700 text:sm underline underline-offset-4 hover:text-rose-400'
                    replace={isModal}
                  >
                    Sign Up
                </Link>
            </p>

        </div>        
    </div>
  );
};

export default SignIn;