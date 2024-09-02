type Services = {
  option: string
  price: number
}

export interface Case {
  id: number
  title: string
  services: Services[]
  timeFrom: number
  timeTill: number | null
}
