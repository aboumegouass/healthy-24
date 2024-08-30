type MedicalHistory = {
    id: number
    patient: {
        id: number
        avatar: string
        full_name: string
        code: string
    }
    appointment: string
    time: string
    created_at: string | Date | any
    status: 'success' | 'pending' | 'canceled'
}