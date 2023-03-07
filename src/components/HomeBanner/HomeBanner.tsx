import React, { useEffect, useState } from 'react'
import API_SERVICES from '../../services/api_services'
import { MOVIE } from '../../services/interfaces'
import { ImageBaseUrl } from '../../services/parameters'
import "./HomeBanner.css"



const HomeBanner = () => {
    const [movie, setMovie] = useState<MOVIE>({
        backdrop_path:"",
        original_name:"",
        title:"",
        overview:"",
        name:"",
        id:Number.MIN_SAFE_INTEGER
    })
    useEffect(() => {
        async function fetchMovieData() {
            const request = await API_SERVICES.fetchNetflixOriginals()
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchMovieData()
    }, [])

    const truncate = (string: string, n: number) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return movie ?  (
        <div className='homeBanner' style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url('${ImageBaseUrl}${movie?.backdrop_path}')`
        }}>
            <div className='bannerContent'>
                <h1 className="banner__title">
                    {movie?.original_name || movie?.title || movie?.name}
                </h1>
                <div className="bannerContentButtons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">Next</button>
                </div>


                <div className="bannerContentText">
                    {truncate(`${movie?.overview}`, 150)}
                </div>
                <div className="banner--fadeBottom" />
            </div>


        </div>
    ) : (
        <>
        Loading...
        </>
    )
}

export default HomeBanner