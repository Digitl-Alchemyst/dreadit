'use client'

import { FC } from 'react'
import { User } from 'next-auth'
import { Avatar, AvatarProps } from '@radix-ui/react-avatar'
import Image from 'next/image'
import { Icons } from '../ui/Icons'
import { AvatarFallback } from '../ui/Avatar'


interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image' >
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar>
        {user.image ? (
            <div className='relative aspect-square h-full w-full'>
                <Image 
                    src={user.image}
                    alt='Avatar' 
                    fill
                    referrerPolicy='no-referrer'
                    className='rounded-full'
                />
            </div>
        ) : (
            <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
                <Icons.user className='h-5 w-5 bg-zinc-950 rounded full' />
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar