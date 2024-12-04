import { IconType } from 'react-icons'

interface Props {
  name: string
  Icon: IconType
}

const HeaderItem: React.FC<Props> = ({ name, Icon }) => {
  return (
    <div className='flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 m-2'>
      <Icon />
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem