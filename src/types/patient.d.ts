type PatientType = {
    address: string
    alergies: string
    appointment?: number | string
    avatar?: string
    blood_glucose: string
    blood_pressure: string
    blood_type: string
    completed?: number | string
    disease: string
    first_name: string
    height?: number
    id?: number
    last_name: string
    patient_id?: string
    weight: number
}
type PastNotesAppointmentType = {
    id?: number
    created_at: string | Date | any
    patient_id?: string
    traitment_name: string
    traitment_description: string
    traitment_type: 'scanning' | 'check-up' | string
    duration: number | string
    document: string
}