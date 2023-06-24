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
          clas
        />
        </DropdownMenuTrigger>
      </DropdownMenu>
    // </div>
  )
}

export default AccountMenu