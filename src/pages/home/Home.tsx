import React, { FC } from 'react'
import MovieContainer from '../../components/MovieContainer/MovieContainer'
import BannerLayout from '../../Layouts/BannerLayout/BannerLayout'
import API_SERVICES from '../../services/api_services'
import "./Home.css"

const Home : FC<any> = () => {
    const fetchActionMovies = async () => {
        let {data} = await API_SERVICES.fetchActionMovies()
        if(data) {
            return data
        }
    }

    const fetchComedyMovies = async () => {
        let {data} = await API_SERVICES.fetchComedyMovies()
        if(data) {
            return data
        }
    }    
    const fetchDocumentaries = async () => {
        let {data} = await API_SERVICES.fetchDocumentaries()
        if(data) {
            return data
        }
    }    
    const fetchHorrorMovies = async () => {
        let {data} = await API_SERVICES.fetchHorrorMovies()
        if(data) {
            return data        }
    }    
    const fetchNetflixOriginals = async () => {
        let {data} = await API_SERVICES.fetchNetflixOriginals()
        if(data) {
            return data        }
    }
    const fetchRomanceMovies = async () => {
        let {data} = await API_SERVICES.fetchRomanceMovies()
        if(data) {
            return data        }
    }

    const fetchTopRated = async () => {
        let {data} = await API_SERVICES.fetchTopRated()
        if(data) {
            return data        }
    }
    const fetchTrending = async () => {
        let {data} = await API_SERVICES.fetchTrending()
        if(data) {
            return data        }
    }
  return (
    <BannerLayout>
        <MovieContainer heading='Action Movies' handleFetchShows={fetchActionMovies}/>
        <MovieContainer heading='Comedy' handleFetchShows={fetchComedyMovies}/>
        <MovieContainer heading='Documentaries' handleFetchShows={fetchDocumentaries}/>
        <MovieContainer heading='Horror' handleFetchShows={fetchHorrorMovies}/>
        <MovieContainer heading='Originals' handleFetchShows={fetchNetflixOriginals}/>
        <MovieContainer heading='Romance' handleFetchShows={fetchRomanceMovies}/>
        <MovieContainer heading='Top Rated' handleFetchShows={fetchTopRated}/>
        <MovieContainer heading='Trending' handleFetchShows={fetchTrending}/>
    </BannerLayout>
  )
}

export default Home

