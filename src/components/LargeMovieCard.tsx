import { Video } from '../types'

interface Props {
  movie: Video
}

const LargeMovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in '>
      <img
        className='w-[110px] md:w-[260px] rounded-md hover:border-[3px] border-gray-400 cursor-pointer'
        src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
        alt={movie.title}
      />
      <h2 className='w-[110px] md:w-[260px] mt-2'>{movie.title}</h2>
    </section>
  )
}

export default LargeMovieCard
