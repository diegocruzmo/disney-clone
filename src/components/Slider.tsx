import { useEffect, useRef, useState } from 'react'
import { getTrendingVideos } from '../services/api'
import { Movie, Trending } from '../types'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const screenWidth = window.innerWidth

const Slider = () => {
  const [trending, setTrending] = useState<Movie[]>([])
  const imagesRef = useRef<HTMLDivElement>(null)

  const goLeft = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft -= screenWidth - 110
  }

  const goRight = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft += screenWidth - 110
  }

  const getTrending = async () => {
    try {
      const data: Trending = await getTrendingVideos()
      setTrending(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <div>
      <HiChevronLeft
        onClick={() => goLeft(imagesRef.current)}
        className='hidden md:block text-[30px] absolute mx-8 my-[150px] cursor-pointer'
      />
      <HiChevronRight
        onClick={() => goRight(imagesRef.current)}
        className='hidden md:block text-[30px] absolute right-0 mx-8 my-[150px] cursor-pointer'
      />
      <div
        className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'
        ref={imagesRef}
      >
        {trending.map((item) => (
          <img
            key={item.id}
            src={import.meta.env.VITE_IMAGE_URL + item.backdrop_path}
            alt={item.name}
            className='min-w-full md:h-[310px] object-cover mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
