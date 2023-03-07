import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MOVIE } from '../../services/interfaces'
import { ImageBaseUrl } from '../../services/parameters'
import "./Movie.css"

const Movie:FC<{movie:MOVIE}> = ({movie}) => {
  const navigate = useNavigate()
  return (
    <img
    onClick={ () => navigate(`/details/${movie.id}`)}
      className={"movie"}
      src={`${ImageBaseUrl}${movie.backdrop_path}`}
      alt={`${movie.name}`} />
  )
}

export default Movie