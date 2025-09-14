export interface IBooksAPIResponse {
    statusCode: number
    data: IBooksList
    message: string
    success: boolean
  }
  
  export interface IBooksList {
    page: number
    limit: number
    totalPages: number
    previousPage: boolean
    nextPage: boolean
    totalItems: number
    currentPageItems: number
    data: IBooksData[]
  }
  
  export interface IBooksData {
    kind: string
    id: number
    etag: string
    volumeInfo: VolumeInfo
  }
  
interface VolumeInfo {
    title: string
    subtitle?: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers?: IndustryIdentifier[]
    readingModes: ReadingModes
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary?: PanelizationSummary
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    averageRating?: number
    ratingsCount?: number
  }
  
 interface IndustryIdentifier {
    type: string
    identifier: string
  }
  
 interface ReadingModes {
    text: boolean
    image: boolean
  }
  
interface PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  
  interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
  }
  