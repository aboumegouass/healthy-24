type DeliveryCompany = {
    id: number
    name: string
    address: string
    phone_number: string
    type: 'provider' | 'normal'
}
type DeliveryCompanyForm = {
    lang: string
    name: {
        en: string
        fr: string
        ar: string
    }
    address: string
    phone_number: string
    type: 'provider' | 'normal'
    description?: {
        en: string
        fr: string
        ar: string
    }
}