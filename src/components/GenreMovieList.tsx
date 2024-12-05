import { genres } from '../constants/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <>
      {genres.map(
        (genre, index) =>
          index < 5 && (
            <div key={genre.id} className='p-8 md:px-16'>
              <h2 className='text-[20px] font-bold' key={genre.id}>
                {genre.name}
              </h2>
              <MovieList genreId={genre.id} index_={index} />
            </div>
          )
      )}
    </>
  )
}

export default GenreMovieList
