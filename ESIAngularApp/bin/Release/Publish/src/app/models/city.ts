export class City {
  cityID: string | null | undefined;
  cityName: string | null | undefined;
  /**
   *
   */
  constructor (cityID: string | null = null,
    cityName: string | null = null
  ) {
    this.cityID = cityID;
    this.cityName = cityName;
  }
}
