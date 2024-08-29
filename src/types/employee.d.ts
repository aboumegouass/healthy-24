type Employee = {
    bio: string | null
    full_name: string
    phone_number: string
    completed_at: string | null
    created_at: string
    id: number
    is_active: boolean
    avatar: string | null
    username: string
    type: 'client' | 'employee'
    email: string
    role_name: string
    business: {
        id: number
        name: string
    }
    status: string
}

type EmployeeForm = {
    lang: string
    first_name: {
        en: string
        fr: string
        ar: string
    }
    last_name: {
        en: string
        fr: string
        ar: string
    }
    phone_number: string
    username: string
    role_id: string | null
    type?: 'client' | 'employee'
    business_id: string | null
    email: string
    bio: {
        en: string
        fr: string
        ar: string
    }
}