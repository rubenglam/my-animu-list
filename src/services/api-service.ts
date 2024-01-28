import type { GetSeasonAnimesResponse } from '../models/get-season-animes-response'
import type { GetAnimeByIDResponse } from '../models/get-anime-by-id-response'

export async function getSeasonAnimes(): Promise<GetSeasonAnimesResponse> {
  const response = await fetch(`https://api.jikan.moe/v4/seasons/now`)
  const data: GetSeasonAnimesResponse = await response.json()
  return data
}

export async function getAnimeById(id: string): Promise<GetAnimeByIDResponse> {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const data: GetAnimeByIDResponse = await response.json()
  return data
}
