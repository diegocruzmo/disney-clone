import { Video } from '../types'

interface Props {
  movie: Video
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <>
      <img
        className='w-[110px] md:w-[200px] rounded-md hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer'
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
        alt={movie.title}
      />
    </>
  )
}

export default MovieCard
