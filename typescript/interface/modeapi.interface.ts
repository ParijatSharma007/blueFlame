import { IAccountUser, IModel } from "./apiresponse.interface"



export interface IAccountModelListItem {
  id: string
  entityType: string
  creationDate: number
  lastModifiedDate: number
  lastModifiedUser: string
  isDeleted: boolean
  name: string
  description: string
  modalities: string[]
  account: IAccountUser
  model: IModel
  enabled: boolean
  usageWarning: string
}

export type IAccountModelList = IAccountModelListItem[]

