type Invoice = {
    id: number
    date: Date | null
    tracking_code: string
    status_id: number
    reference: string
    total_ttc: number
    total_ht: number
    status_name: 'pending' | 'shipped' | 'delivered' | 'canceled'
    total_tva: number
    discount_percentage: number
    discount_amount: number
    methode: string
    discount_value: number
    shipping_cost: number | string
    invoice_type: {
        id: number
        name: 'proforma_invoice' | 'exit_voucher' | 'entry_voucher' | 'purchase_invoice' | 'delivery_slip'
    }
    business: {
        id: number
        name: string
        email: string
        phone_number: string
    }
    items_count: number
    client: Employee
    products: {
        id: number
        name: string
        quantity: number
        price_ht: number
        price_ttc: number
        price_unit: number
        reference: string
        description: string
    }[]
    created_at: Date | string | null
}
