export interface CardObject {
  id: string
  age: number
  position: string
  rarity: string
  shirtNumber: number
  serialNumber: number
  season: {
    name: string 
  }
  player: {
    firstName: string
    lastName: string
    pictureUrl: string
    activeClub: {
      name: string
      pictureUrl: string
    }
    country: {
      flagUrl: string
      code: string
    }
  }
}