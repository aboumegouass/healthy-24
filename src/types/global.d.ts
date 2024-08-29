type Settings = {
    language: 'en' | 'tr' | 'fr' | 'ar' | 'gr' | string
    primaryColor: string
    companyName: string
    templateId: 1 | 2 | 3 | number
    mode: 'light' | 'dark' | string
}

type PageProps = {
    name: string
    href: string
}
type CateSectionItem = {
    name: string
    href: string
}
type CateSection = {
    id: number | string
    name: string
    items: CateSectionItem[]
}
type CateFeatured = {
    name: string
    href?: string
    imageSrc: string
    imageAlt?: string
}
type CateProps = {
    id: number
    name: string,
    featured: CateFeatured[]
    sections: CateSection[]
}
type NavProps = {
    id: number
    name: string
    href: string
    isDropdown: boolean
    isActive: boolean
}
type SolutionType = {
    name: string
    description?: string
    href: string
    icon: any
}
