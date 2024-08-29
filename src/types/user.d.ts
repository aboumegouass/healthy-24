type UserInfo = {
    id: number
    avatar: string
    created_at: string
    first_name: string
    is_owner: boolean
    phone: string
    last_name: string
}
type BusinessUser = {
    bio: string | null
    business_type: BusinesseTypesType
    commune: CommuneType
    completed_at: string | null
    created_at: string
    id: number
    is_active: boolean
    logo: string | null
    name: string
    offers_shipping: boolean
    payment_when_receiving: boolean
    pickup_service: boolean
    prepayment: boolean
    status: boolean
    step: number
}

type User = {
    id: number
    completed_at: string
    created_at: string
    current_plan: Plan
    lang?: string
    email: string
    theme?: string
    info: UserInfo
    business?: BusinessUser | null
    last_login: string
    info_of_pages: InfoOfPages[]
    step: number
    status: boolean
    username: string
}
type InfoOfPages = {
    business: string
    created_at: string
    id: number
    image: string
    is_choose: boolean
    name: string
    tasks: string[]
}
type Plan = {
    description: string
    eligibilities: {
        max_categories: number
        max_employees: number
        max_orders: number
        max_products: number
    }
    features: string[]
    interval: string[]
    key: string
    monthlyIncentive: number | null
    name: string
    planId: {
        monthly: string
        yearly: string
    }
    price: {
        monthly: number | string
        yearly: number | string
    }
    trialDays: number
    yearlyIncentive: number | null
}