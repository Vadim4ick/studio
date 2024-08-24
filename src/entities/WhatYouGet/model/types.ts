export interface IOption {
  id: string
  description: string
}

export type WhatYouGetList = {
  id: string
  imageUrl: string
  title: string
  options: IOption[]
}
