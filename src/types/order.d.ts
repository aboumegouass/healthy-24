type Order = {
    id: number
    tracking_code: string
    status_id: number
    total_price?: number
    created_at: string
    customer: {
        id: number
        full_name: string
        email: string
        phone_number: string
        username: string
    }
    business: {
        id: number
        name: string
        email: string
        phone_number: string
    }
    items_count: number
    status_name: string
    total_ttc: number
    total_ht: number
    tva: number
    discount_value: number
    discount_percentage: number
    shipping_cost: number | string
    items: {
        name: string
        quantity: number
        price: number | string
    }[]
}