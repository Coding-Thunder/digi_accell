import React, { FC, useCallback, useEffect, useState } from 'react'
import { MOVIE, MovieContainerProps } from '../../services/interfaces'
import Movie from '../Movie/Movie'
import "./MovieContainer.css"

const MovieContainer: FC<MovieContainerProps> = ({ heading, handleFetchShows }) => {
  const [movies, setMovies] = useState<any>(null)


  const handleRender = useCallback(async () => {
    const { results } = await handleFetchShows()
    if (results) {
      setMovies(results)
    }
  }, [handleFetchShows])
  useEffect(() => {
    handleRender()
  }, [handleRender])
  return movies ? (
    <div className='MovieContainer'>
      <div className='MovieContainerHeading'>
        {heading}
      </div>
      <div className='MovieContainerMovies'>
        {movies?.map((movie: MOVIE) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  ) : <div>
    Loading...
  </div>
}

export default MovieContainer