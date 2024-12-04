import axios from 'axios'
import { Trending } from '../types'

const options = {
  method: 'GET',
  url: `${import.meta.env.VITE_API_URL}/trending/movie/day`,
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_RAT}`
  }
}

export const getTrendingVideos = async (): Promise<Trending> => {
  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error('Error fetching trending videos:', error)
    throw error
  }
}
