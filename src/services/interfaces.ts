export interface PARAMETERS {
    baseUrl:string
    requests:{
        fetchTrending: string
        fetchNetflixOriginals: string,
        fetchTopRated: string,
        fetchComedyMovies: string
        fetchActionMovies: string
        fetchHorrorMovies: string
        fetchRomanceMovies: string
        fetchDocumentaries:   string
        details:string
    }

}


export interface MOVIE {
    id:number
    original_name:string
    title :string
    name:string
    backdrop_path: string
    overview: string 
}


export interface BannerLayoutProps   {
    children:any
}

export interface MovieContainerProps {
    heading:string
    handleFetchShows:any
}

