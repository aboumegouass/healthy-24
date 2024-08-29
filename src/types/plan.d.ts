type PlanType = {
    id: number
    theme: string
    title: string
    price: number
    timePeriod: string
    features: {
        name: string
        value: string | number
    }[]
}