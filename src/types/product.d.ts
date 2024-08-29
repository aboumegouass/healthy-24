
type PostItemCategory = {
  id: number
  title: string
  href: string
}
type PostItemAuthor = {
  id: number
  name: string
  role: string
  href: string
  imageUrl: string
}
type PostItem = {
  id: number
  title: string
  href: string
  description: string
  date?: Date | string
  datetime?: Date | string
  category: PostItemCategory
  author: PostItemAuthor
}
type ProductsType = {
  id: number
  name: string
  reference?: string
  unit_price?: number
  product_type: {
    name: string
  }
  brand: {
    name: string
  }
  image: string
}
type Attribute = {
  key: number
  name: string
  values: string[]
  type: "radio" | "dropdown" | "color" | "checkbox" | "text_input"
}
type ProductFormData = {
  lang: string
  product_tags: string[]
  product_type_id: string
  brand_id: string
  images: any
  isVariant: number
  attributes: ProductAttribute[]
  category_id: string
  unit_price: number
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
}
type ProductAttribute = {
  id: number | any
  label: string
  isRequired?: boolean
  name: string
  value: any
  type: "radio" | "dropdown" | "color" | "checkbox" | "text_input" | any
  values: string[]
}
type ProductTypes = {
  id: number | any
  description: string
  name: string
  attributes_count: number
  products_count: number
}
type ProductBrands = {
  id: number | any
  description: string
  name: string
  logo: string
  products_count: number
}