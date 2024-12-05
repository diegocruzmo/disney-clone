import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { getMoviesByGenre } from '../services/api'
import { Video } from '../types'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import LargeMovieCard from './LargeMovieCard'
const screenWidth = window.innerWidth

interface Props {
  genreId: number
  index_: number
}

const MovieList: React.FC<Props> = ({ genreId, index_ }) => {
  const [movies, setMovies] = useState<Array<Video>>([])
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getByGenre = async () => {
      try {
        const data = await getMoviesByGenre(genreId)
        setMovies(data.results)
      } catch (error) {
        console.error(error)
      }
    }
    getByGenre()
  }, [genreId])

  const goLeft = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft -= screenWidth - 110
  }

  const goRight = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft += screenWidth - 110
  }

  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={() => goLeft(elementRef.current)}
        className={
          index_ % 3 !== 0
            ? 'hidden md:block text-[50px] absolute mt-[150px] p-2 z-10 cursor-pointer'
            : 'hidden md:block text-[50px] absolute mt-[70px] p-2 z-10 cursor-pointer'
        }
      />
      <div
        ref={elementRef}
        className='flex overflow-x-auto w-full gap-8 scrollbar-hide pt-5 px-3 py-6 scroll-smooth'
      >
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            {index_ % 3 !== 0 ? (
              <MovieCard movie={movie} />
            ) : (
              <LargeMovieCard movie={movie} />
            )}
          </React.Fragment>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => goRight(elementRef.current)}
        className={
          index_ % 3 !== 0
            ? 'hidden md:block text-[50px] absolute mt-[150px] p-2 z-10 cursor-pointer right-0 top-0'
            : 'hidden md:block text-[50px] absolute mt-[70px] p-2 z-10 cursor-pointer right-0 top-0'
        }
      />
    </div>
  )
}

export default MovieList
