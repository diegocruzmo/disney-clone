import logo from '../assets/images/logo.png'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from 'react-icons/hi2'
import HeaderItem from './HeaderItem'
import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv }
  ]

  const handleToogle = () => {
    setToggle(!toggle)
  }

  return (
    <header className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-[80px] md:w-[115px] object-cover'
        />
        <div className='hidden md:flex gap-8'>
          {menu.map(({ name, icon }) => (
            <HeaderItem key={name} name={name} Icon={icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map(
            ({ name, icon }, index) =>
              index < 3 && <HeaderItem key={name} name={''} Icon={icon} />
          )}
          <div className='md:hidden' onClick={() => handleToogle()}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle && (
              <div className='absolute mt-3 bg-black border-[1px] p-3 border-gray-700 rounded-md'>
                {menu.map(
                  ({ name, icon }, index) =>
                    index > 2 && (
                      <HeaderItem key={name} name={name} Icon={icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d8/d80aefb5b3873d87ac012d28816e99eed2b24ab7_full.jpg'
        alt='profile image'
        className='w-[40px] rounded-full'
      />
    </header>
  )
}

export default Header
