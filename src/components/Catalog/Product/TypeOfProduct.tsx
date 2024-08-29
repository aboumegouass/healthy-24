import { Icon } from "@iconify/react";
import { FormikProps } from "formik";
import { useTranslation } from 'react-i18next';

function TypeOfProduct({ productForm }: { productForm: FormikProps<ProductFormData> }) {
    const { t } = useTranslation()

    return (
        <div id='type_of_product' className="flex gap-4 p-6 max-sm:flex-col">
            <div className="w-1/3 max-sm:w-full">
                <div className="sticky top-36">
                    <h3 className="text-xl font-bold">{t("Type of Product")}</h3>
                    <p className="mt-2 text-sm font-normal opacity-70">{t("Product classification: standard product (single item) or variants (different sizes, colors, or options).")}</p>
                </div>
            </div>
            <div className="w-2/3 max-sm:w-full">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <label className="has-[:checked]:bg-gray-100 has-[:checked]:opacity-100 opacity-75 cursor-pointer rounded-lg text-gray-600 border-2 border-gray-300 has-[:checked]:border-gray-800">
                        <div className="p-4">
                            <div className="flex gap-4">
                                <div className="flex items-center justify-center border border-gray-300 rounded-md w-14 h-14 bg-slate-50">
                                    <Icon icon={`solar:file-broken`} className="w-7 h-7" />
                                </div>
                                <div className="w-[calc(100%-56px)]">
                                    <h3 className="text-lg font-bold">{t("Standard")}</h3>
                                    <p className="text-sm opacity-75">{t("A single, unaltered item without variations, options, or customizable features")}</p>
                                </div>
                            </div>
                        </div>
                        <input
                            type="radio"
                            checked={productForm.values.isVariant == 1}
                            name="isVariant"
                            onChange={(e) => productForm.setFieldValue("isVariant", e.target.value)}
                            value={1}
                            className="hidden checked:border-indigo-500"
                        />
                    </label>
                    <label className="has-[:checked]:bg-gray-100 has-[:checked]:opacity-100 opacity-75 cursor-pointer rounded-lg text-gray-600 border-2 border-gray-300 has-[:checked]:border-gray-800">
                        <div className="p-4">
                            <div className="flex gap-4">
                                <div className="flex items-center justify-center border border-gray-300 rounded-md w-14 h-14 bg-slate-50">
                                    <Icon icon={`solar:layers-minimalistic-broken`} className="w-8 h-8" />
                                </div>
                                <div className="w-[calc(100%-56px)]">
                                    <h3 className="text-lg font-bold">{t("Variants")}</h3>
                                    <p className="text-sm opacity-75">{t("Different versions of a product with options like size, color, or style")}</p>
                                </div>
                            </div>
                        </div>
                        <input type="radio"
                            checked={productForm.values.isVariant == 0}
                            name="isVariant"
                            onChange={(e) => productForm.setFieldValue("isVariant", e.target.value)}
                            value={0}
                            className="hidden checked:border-indigo-500"
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TypeOfProduct