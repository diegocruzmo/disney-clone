import disneyP from '../assets/images/disney.png'
import marvelP from '../assets/images/marvel.png'
import nationalP from '../assets/images/nationalG.png'
import pixarP from '../assets/images/pixar.png'
import starwarsP from '../assets/images/starwars.png'
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalV from '../assets/videos/nationalG.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarsV from '../assets/videos/starwars.mp4'

const ProductionsHouse = () => {
  const productionsHouseList = [
    {
      id: 1,
      Image: disneyP,
      video: disneyV
    },
    {
      id: 2,
      Image: marvelP,
      video: marvelV
    },
    {
      id: 3,
      Image: nationalP,
      video: nationalV
    },
    {
      id: 4,
      Image: pixarP,
      video: pixarV
    },
    {
      id: 5,
      Image: starwarsP,
      video: starwarsV
    }
  ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
      {productionsHouseList.map((production) => (
        <div
          key={production.id}
          className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray'
        >
          <video
            src={production.video}
            autoPlay
            loop
            playsInline
            muted
            className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'
          ></video>
          <img src={production.Image} className='w-full z-[1]' />
        </div>
      ))}
    </div>
  )
}

export default ProductionsHouse
