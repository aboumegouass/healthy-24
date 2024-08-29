type Role = {
    id?: number
    name: string
    position: number
    permissions: string[]
    created_at: string
}
type RoleForm = {
    lang: string
    name: {
        en: string
        fr: string
        ar: string
    }
    description: {
        en: string
        fr: string
        ar: string
    }
    permissions: string[]
}