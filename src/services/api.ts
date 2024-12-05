import axios from 'axios'
import { Videos } from '../types'
import { AxiosResponse } from 'axios'

export const getTrendingVideos = async (): Promise<Videos> => {
  const optionsTrending = {
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/trending/movie/day`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY_RAT}`
    }
  }

  try {
    const response: AxiosResponse<Videos> = await axios.request(optionsTrending)
    return response.data
  } catch (error) {
    console.error('Error fetching trending videos:', error)
    throw error
  }
}

export const getMoviesByGenre = async (genre: number): Promise<Videos> => {
  const optionsGenre = {
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/discover/movie`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      with_genres: genre
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY_RAT}`
    }
  }

  try {
    const response: AxiosResponse<Videos> = await axios.request(optionsGenre)
    return response.data
  } catch (error) {
    console.error('Error fetching trending videos:', error)
    throw error
  }
}
