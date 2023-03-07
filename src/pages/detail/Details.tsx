import React, { FC, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_SERVICES from '../../services/api_services'
import { ImageBaseUrl } from '../../services/parameters'
import "./Details.css"

const Details: FC = () => {
  const p: any = useParams<any>()
  const [movie, setMovie] = useState<any>({
    id: 0,
    original_name: "",
    title: "",
    name: "",
    backdrop_path: "",
    overview: ""
  })


  const getMoviewDetailFromId = useCallback(async () => {
    let { data } = await API_SERVICES.fetchDetails(p.id)
    if (data) {
      console.log(data)
      setMovie(data)
    }
  }, [p.id])

  useEffect(() => {
    getMoviewDetailFromId()
  }, [getMoviewDetailFromId])
  return (
    <div className='details' style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url('${ImageBaseUrl}${movie?.backdrop_path}')`
  }}>
      <div className='detailsContent'>
        <h1>{movie?.original_title}</h1>
        <div className='detailsTagline'>{movie?.tagline}</div>
        <div className='detailsOverview'>{movie?.overview}</div>
        <div className='detailsGenres'><span>Categories</span> : {movie?.genres?.map((genr:any) => (<div>{genr.name}</div>))}</div>
        <div className='detailsOverview'>{movie?.status}</div>
      </div>
    </div>
  )
}

export default Details