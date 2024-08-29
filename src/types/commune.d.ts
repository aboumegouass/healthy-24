type CommuneType = {
    arabic_name: string
    created_at: string
    id: number
    latitude: number | string
    longitude: number | string
    name: string
    wilaya: {
        arabic_name: string
        created_at: string
        id: number
        latitude: number | string
        longitude: number | string
        name: string
    }
}