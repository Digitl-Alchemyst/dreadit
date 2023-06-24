import { User } from 'next-auth'
import { FC } from 'react'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/DropdownMenu'
import UserAvatar from '../global/UserAvatar'

interface AccountMenuProps {
  user: Pick<User, 'name' | 'image' | 'email' >
}

const AccountMenu: FC<AccountMenuProps> = ({user}) => {
  return (
    // <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={{
            name: user.name || null,
            image: user.image || null,
          }}
          className='h-11 w-11 rounded-full bg-zinc-950 shadow-md shadow-rose-500/50'
        />
        </DropdownMenuTrigger>
      </DropdownMenu>
    // </div>
  )
}

export default AccountMenu