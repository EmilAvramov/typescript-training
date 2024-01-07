export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(anchor: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(anchor) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 }
      }
    )
  }

  addMarker(object: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: object.location.lat,
        lng: object.location.lng
      }
    })

    const infoWindow = new google.maps.InfoWindow({
      content: object.markerContent()
    })

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker)
    })
  }
}
