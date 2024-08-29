import { axiosAPI } from './axios'

export const createProduct = async (data: ProductFormData) => {
    const formData = new FormData()
    formData.append('product_type_id', data.product_type_id);
    formData.append('brand_id', data.brand_id);
    formData.append('category_id', data.category_id);
    formData.append('unit_price', String(data.unit_price));

    // Append arrays
    data.product_tags.forEach((tag, index) => {
        formData.append(`product_tags[${index}]`, tag);
    });

    // Append images (assuming images is an array of File objects)
    data.images.forEach((file: any, index: number) => {
        formData.append(`images[${index}]`, file);
    });

    // Append nested objects
    for (const [key, value] of Object.entries(data.name)) {
        formData.append(`name[${key}]`, value);
    }
    for (const [key, value] of Object.entries(data.description)) {
        formData.append(`description[${key}]`, value);
    }

    return axiosAPI().post(`/auth/step-three`, formData).then((res) => res.data)
}
