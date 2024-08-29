import { Textarea } from "@mantine/core"
import { FormikProps } from "formik"
import { TFunction } from "i18next"

export const switchProductDesription = ({ productForm, t }: { productForm: FormikProps<ProductFormData>, t: TFunction<"translation", undefined> }) => {
    const lang = productForm.values.lang ? productForm.values.lang : 'en'
    switch (productForm.values.lang) {
        case 'ar':
            return <Textarea
                size="sm"
                value={productForm.values.description.ar}
                rows={4}
                error={productForm.errors.description?.ar}
                name='description.ar'
                onChange={productForm.handleChange}
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2' }}
                placeholder={`${t("Description")} (${lang})`}
            />
        case 'en':
            return <Textarea
                size="sm"
                value={productForm.values.description.en}
                rows={4}
                error={productForm.errors.description?.en}
                name='description.en'
                onChange={productForm.handleChange}
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2' }}
                placeholder={`${t("Description")} (${lang})`}
            />
        case 'fr':
            return <Textarea
                size="sm"
                value={productForm.values.description.fr}
                rows={4}
                name='description.fr'
                error={productForm.errors.description?.fr}
                onChange={productForm.handleChange}
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2' }}
                placeholder={`${t("Description")} (${lang})`}
            />
        default:
            return <Textarea
                size="sm"
                value={productForm.values.description.en}
                rows={4}
                error={productForm.errors.description?.en}
                name='description.en'
                onChange={productForm.handleChange}
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2' }}
                placeholder={`${t("Description")} (${lang})`}
            />
    }
}