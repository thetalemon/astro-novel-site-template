import { createClient, MicroCMSQueries } from 'microcms-js-sdk'
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

export type Novel = {
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  abstract: string
}

export type NovelResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Novel[]
}

export const getNovels = async (queries?: MicroCMSQueries) => {
  return await client.get<NovelResponse>({ endpoint: 'novels', queries })
}

export const getNovelDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Novel>({
    endpoint: 'novels',
    contentId,
    queries,
  })
}

export type Illust = {
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  caption: string
  illust: {
    url: string
    height: number
    width: number
  }
}

export type IllustResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Illust[]
}

export const getIllustraitons = async (queries?: MicroCMSQueries) => {
  return await client.get<IllustResponse>({
    endpoint: 'illustrations',
    queries,
  })
}

export const getIllustraitonDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Illust>({
    endpoint: 'illustrations',
    contentId,
    queries,
  })
}

export type Category = {
  id: string
  name: string
}

export type CategoryResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Category[]
}

export const getCategories = async (queries?: MicroCMSQueries) => {
  return await client.get<CategoryResponse>({ endpoint: 'categories', queries })
}
