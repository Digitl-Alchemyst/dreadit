import { FC } from 'react'
import { User } from 'next-auth'
import Image from 'next/image'
import { Icons } from '../ui/Icons'
import { Avatar, AvatarFallback } from '../ui/Avatar'
import { AvatarProps } from '@radix-ui/react-avatar'



interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image' >
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
        {user.image ? (
            <div className='relative aspect-square h-full w-full'>
                <Image 
                    src={user.image}
                    alt='Avatar' 
                    fill
                    referrerPolicy='no-referrer'
                    // className='rounded-full'
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