import { TCommonSchema } from "@/types/common/common-schema";


export type TBooksModel = {
    IDOC: {
        kind: string
        id: number
        etag: string
        volumeInfo: TBooksModel["VolumeInfo"]
    },
    VolumeInfo: {
        title: string
        subtitle?: string
        authors: string[]
        publisher: string
        publishedDate: string
        description: string
        industryIdentifiers?: TBooksModel["IndustryIdentifier"][]
        readingModes: TBooksModel["ReadingModes"]
        pageCount: number
        printType: string
        categories: string[]
        maturityRating: string
        allowAnonLogging: boolean
        contentVersion: string
        panelizationSummary?: TBooksModel["PanelizationSummary"]
        imageLinks: TBooksModel["ImageLinks"]
        language: string
        previewLink: string
        infoLink: string
        canonicalVolumeLink: string
        averageRating?: number
        ratingsCount?: number
      }

      IndustryIdentifier: {
        type: string
        identifier: string
      }
      
      ReadingModes: {
        text: boolean
        image: boolean
      }
      
      PanelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
      }
      
      ImageLinks: {
        smallThumbnail: string
        thumbnail: string
      }
      

    getAllBooksSuccessResponse :TCommonSchema['BaseApiResponse'] & {
      data: TCommonSchema['BaseApiPaginationResponse'] & {
        data: TBooksModel['IDOC'][];
      };
    }
    
}