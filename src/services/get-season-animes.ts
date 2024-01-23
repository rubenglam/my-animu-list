import type { GetSeasonAnime } from '../models/season-animes'

export async function getSeasonAnimes(): Promise<GetSeasonAnime> {
  const response = await fetch(`https://api.jikan.moe/v4/seasons/now`)
  const data: GetSeasonAnime = await response.json()
  return data
}
