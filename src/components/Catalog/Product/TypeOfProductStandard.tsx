import { useTranslation } from 'react-i18next';
import { NumberInput, Space, TextInput } from '@mantine/core';
import UploadingGallery from '../../UploadingGallery';
import { FormikProps } from 'formik';
import { SwitchAttributes } from './Form/switchAttributes';
import { Link } from 'react-router-dom';

function TypeOfProductStandard({ form }: { form: FormikProps<ProductFormData> }) {
    const { t } = useTranslation()
    const onChange = (imageList: any) => {
        form.setFieldValue('images', imageList.map((image: any) => image))
    }

    return (
        <div>
            <div id='product_attributes' className="flex gap-4 p-6 bg-[#f4f4f4] max-sm:flex-col">
                <div className="w-1/3 max-sm:w-full">
                    <div className="sticky top-36">
                        <h3 className="text-xl font-bold">{t("Product Attributes")}</h3>
                        <p className="mt-2 text-sm font-normal opacity-70">{t("Key characteristics such as size, color, material, and weight that define the product's specifics")}</p>
                        <p className="mt-2 text-sm font-normal opacity-70">{t("You can manager an")} <Link className='font-bold hover:underline' to={'/settings/attributes'}>{t("Attributes")}</Link></p>
                    </div>
                </div>
                <div className="w-2/3 max-sm:w-full">
                    {form.values.attributes.map((attribute, index) => (
                        <div className='mb-4'>
                            {SwitchAttributes({ ...attribute, id: index }, attribute.type, form)}
                        </div>
                    ))}

                    {/* {form.errors.attributes && form.errors.attributes.map((error, index) => (
                        form.touched.attributes && form.touched.attributes[index] && error && (
                            <div key={index} className="text-red-600">{error.value}</div>
                        )
                    ))} */}

                    <Space h="sm" />
                    <div className='flex items-center gap-3'>
                        <div className='w-3/5'>
                            <NumberInput
                                size="sm"
                                value={form.values.unit_price}
                                onChange={(price) => form.setFieldValue("unit_price", price)}
                                label={t("Product Price")}
                                placeholder={t("Product Price")}
                                classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                            />
                        </div>
                        <div className='w-2/5'>
                            <NumberInput
                                size="sm"
                                label={t("Quantity")}
                                placeholder={t("Quantity")}
                                classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-0' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id='product_gallery' className="flex gap-4 p-6 max-sm:flex-col">
                <div className="w-1/3 max-sm:w-full">
                    <div className="sticky top-36">
                        <h3 className="text-xl font-bold">{t("Product Gallery")}</h3>
                        <p className="mt-2 text-sm font-normal opacity-70">{t("A collection of product images showcasing different angles, features, and details to enhance customer viewing")}</p>
                    </div>
                </div>
                <div className="w-2/3 max-sm:w-full">
                    <UploadingGallery images={form.values.images} onChange={onChange} />
                </div>
            </div>
            <div id='inventory' className="flex gap-4 p-6 bg-slate-100 max-sm:flex-col">
                <div className="w-1/3 max-sm:w-full">
                    <div className="sticky top-36">
                        <h3 className="text-xl font-bold">{t("Inventory")}</h3>
                        <p className="mt-2 text-sm font-normal opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius asperiores?</p>
                    </div>
                </div>
                <div className="w-2/3 max-sm:w-full">
                    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                        <div>
                            <TextInput
                                size="md"
                                withAsterisk
                                label={t("SKU")}
                                placeholder={t("SKU")}
                                classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                            />
                            <p className="text-sm italic opacity-50">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius asperiores?")}</p>
                        </div>
                        <div>
                            <TextInput
                                size="md"
                                withAsterisk
                                label={t("QR Code")}
                                placeholder={t("Enter QR Code")}
                                classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                            />
                            <p className="text-sm italic opacity-50">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius asperiores?")}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TypeOfProductStandard