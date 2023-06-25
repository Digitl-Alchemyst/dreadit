'use client'

import { User } from 'next-auth'
import { FC } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/DropdownMenu'
import UserAvatar from '../global/UserAvatar'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface AccountMenuProps {
  user: Pick<User, 'name' | 'image' | 'email' >
}

const AccountMenu: FC<AccountMenuProps> = ({user}) => {
  return (

      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={{
            name: user.name || null,
            image: user.image || null,
          }}
          className='h-11 w-11 shadow-md shadow-rose-500/50'
        />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className=''>
          <div className='flex items-center justify-start gap-2 p-2 bg-zinc-700 text-stone-300 '>
            <div className='flex flex-col space-y-` leading-none'>
              {user.name && <p className='font-medium'>{user.name}</p>}
              {user.email && <p className='w-[200px] trencate text-sm text-stone-400'>{user.email}</p>}
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* <DropdownMenuItem asChild>
            <Link href='/u/[username]' className='flex items-center gap-2 p-2 hover:bg-zinc-400'> Profile </Link>
          </DropdownMenuItem> */}

          <DropdownMenuItem asChild>
            <Link href='/u/username' className='flex items-center gap-2 p-2 bg-zinc-800 hover:bg-zinc-400'> Profile </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/' className='flex items-center gap-2 p-2 bg-zinc-800 hover:bg-zinc-400'> Home </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/d/create' className='flex items-center gap-2 p-2 bg-zinc-800 hover:bg-zinc-400'> Create a SubDreadit </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/settings' className='flex items-center gap-2 p-2 bg-zinc-800 hover:bg-zinc-400'> Settings </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/login`
            })
          }} className='cursor-pointer'> Logout </DropdownMenuItem>
          <p className='text-stone-500 text-sm w-[200px]'>Dreadit, Inc. © 2023. All rights reserved.</p>





        </DropdownMenuContent>
      </DropdownMenu>

  )
}

export default AccountMenu