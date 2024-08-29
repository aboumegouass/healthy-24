import { TextInput } from "@mantine/core"
import { FormikProps } from "formik"
import { TFunction } from "i18next"

export const switchProductName = ({ productForm, t }: { productForm: FormikProps<ProductFormData>, t: TFunction<"translation", undefined> }) => {
    const lang = productForm.values.lang ? productForm.values.lang : 'en'
    switch (productForm.values.lang) {
        case 'ar':
            return <TextInput
                size="sm"
                withAsterisk
                value={productForm.values.name.ar}
                name='name.ar'
                error={productForm.errors.name?.ar}
                onChange={productForm.handleChange}
                placeholder={`${t("Enter Product Name")} (${lang})`}
                classNames={{ input: "ring-1 border-e-0 rounded-e-none ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
            />
        case 'en':
            return <TextInput
                size="sm"
                withAsterisk
                value={productForm.values.name.en}
                name='name.en'
                error={productForm.errors.name?.en}
                onChange={productForm.handleChange}
                placeholder={`${t("Enter Product Name")} (${lang})`}
                classNames={{ input: "ring-1 border-e-0 rounded-e-none ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
            />

        case 'fr':
            return <TextInput
                size="sm"
                withAsterisk
                value={productForm.values.name.fr}
                name='name.fr'
                error={productForm.errors.name?.fr}
                onChange={productForm.handleChange}
                placeholder={`${t("Enter Product Name")} (${lang})`}
                classNames={{ input: "ring-1 border-e-0 rounded-e-none ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
            />
        default:
            return <TextInput
                size="sm"
                withAsterisk
                value={productForm.values.name.en}
                name='name.en'
                error={productForm.errors.name?.en}
                onChange={productForm.handleChange}
                placeholder={`${t("Enter Product Name")} (${lang})`}
                classNames={{ input: "ring-1 border-e-0 rounded-e-none ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
            />
    }
}