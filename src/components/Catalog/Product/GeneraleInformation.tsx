import { useTranslation } from 'react-i18next'
import { Space, TagsInput, Select } from '@mantine/core';
import { Icon } from "@iconify/react";
import { FormikProps } from 'formik';
import { switchProductName } from './Form/SwitchProductName';
import { switchProductDesription } from './Form/SwitchProductDescription';
import ProductTypesDropdown from './Form/ProductTypesDropdown';
import BrandsDropdown from './Form/BrandsDropdown';

function GeneraleInformation({ productForm }: { productForm: FormikProps<ProductFormData> }) {
    const { t } = useTranslation()
    const lang = productForm.values.lang ? productForm.values.lang : 'en'

    return (
        <div id='general_information' className="flex gap-4 p-6 bg-[#f4f4f4] max-sm:flex-col">
            <div className="w-1/3 max-sm:w-full">
                <div className="sticky top-36">
                    <h3 className="text-xl font-bold">{t("General Information")}</h3>
                    <p className="mt-2 text-sm font-normal opacity-70">{t("When adding a new product, provide detailed information including its description, key features, technical specifications, target audience, pricing, availability, marketing strategy, and unique selling points")}</p>
                </div>
            </div>
            <div className="w-2/3 max-sm:w-full">
                <label htmlFor="" className='text-sm font-semibold'>{`${t("Product Name")} (${lang})`}</label>
                <p className='mb-3 text-xs opacity-65'>{t("Provide the product name in Arabic, English, or French for multi-lingual accessibility and recognition")}</p>
                <div className='flex items-center'>
                    <div className='w-[calc(100%-112px)]'>
                        {switchProductName({ productForm, t })}
                    </div>
                    <div className='w-28'>
                        <Select
                            label={''}
                            classNames={{ input: "ring-1 border-s-0 rounded-s-none ring-s-0 ring-slate-300 focus:ring-1 focus:ring-gray-800", wrapper: "border-s-0 rounded-s-0 ring-s-0" }}
                            size="sm"
                            name="lang"
                            placeholder={t("Form Languages")}
                            value={productForm.values.lang}
                            onChange={(e) => productForm.setFieldValue('lang', e)}
                            data={[
                                { value: 'ar', label: 'Arabic' },
                                { value: 'en', label: 'English' },
                                { value: 'fr', label: 'French' },
                            ]}
                        />
                    </div>
                </div>
                <Space h="sm" />
                <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                    <div>
                        <ProductTypesDropdown form={productForm} t={t} />
                    </div>
                    <BrandsDropdown form={productForm} t={t} />
                </div>

                <Space h="sm" />

                <label htmlFor="" className='flex items-center gap-1 text-sm font-semibold'>
                    {`${t("Description")} (${lang})`}
                    <Select
                        label={''}
                        classNames={{ input: "ring-0 text-xs opacity-80 border-0 bg-transparent rounded-s-none ring-s-0 ring-slate-300 focus:ring-0 focus:ring-gray-800", wrapper: "border-s-0 rounded-s-0 ring-s-0" }}
                        size="sm"
                        name="lang"
                        placeholder={t("Form Languages")}
                        value={productForm.values.lang}
                        onChange={(e) => productForm.setFieldValue('lang', e)}
                        data={[
                            { value: 'ar', label: 'Arabic' },
                            { value: 'en', label: 'English' },
                            { value: 'fr', label: 'French' },
                        ]}
                    />
                </label>

                {switchProductDesription({ productForm, t })}
                <Space h="sm" />
                <TagsInput
                    size="sm"
                    rightSection={<Icon icon={`solar:tag-broken`} className="w-5 h-5" />}
                    leftSection={<Icon icon={`bi:ui-radios-grid`} className="w-4 h-4" />}
                    label={`${t("Product Tags")}`}
                    data={productForm.values.product_tags}
                    defaultValue={productForm.values.product_tags}
                    onChange={(e) => productForm.setFieldValue("product_tags", e)}
                    placeholder={`${t("Product Tags")}`}
                    description={t("Relevant keywords, categories, brand names, product types, and unique identifiers for searchability")}
                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", pill: 'bg-[#313131!important] rounded-[4px!important] text-[#fff!important]', description: 'mb-2' }}
                />
            </div>
        </div>
    )
}

export default GeneraleInformation