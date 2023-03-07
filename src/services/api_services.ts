import AXIOS from "axios"
import parameters from "./parameters";

const  getInstance = () =>  {
    return AXIOS.create({
      // @ts-ignore
      accept: "application/json",
      baseURL: parameters.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }





  async function fetchTrending(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchTrending,params);
  }

  async function fetchActionMovies(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchActionMovies,params);
  }

  async function fetchComedyMovies(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchComedyMovies,params);
  }

  async function fetchDocumentaries(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchDocumentaries,params);
  }


  async function fetchHorrorMovies(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchHorrorMovies,params);
  }


  async function fetchNetflixOriginals(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchNetflixOriginals,params);
  }
  
  
  async function fetchRomanceMovies(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchRomanceMovies,params);
  }

  async function fetchTopRated(params = {}) {
    const instance = getInstance();
    return await instance.get(parameters.requests.fetchTopRated,params);
  }
  async function fetchDetails(id:number) {
    const instance = getInstance();
    return await instance.get(`${parameters.requests.details}${id}?api_key=${process.env.REACT_APP_API_KEY}`);
  }
  
  

const API_SERVICES = {
    fetchTrending,
    fetchActionMovies,
    fetchComedyMovies,
    fetchDocumentaries,
    fetchHorrorMovies,
    fetchNetflixOriginals,
    fetchRomanceMovies,
    fetchTopRated,
    fetchDetails
}

export default API_SERVICES

  