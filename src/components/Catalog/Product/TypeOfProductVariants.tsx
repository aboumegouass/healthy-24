import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Button, TextInput, Space, Checkbox, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreateNewAttribute from './CreateNewAttribute';
import { attributeData } from '../../../lib/variants';
import { useForm } from '@mantine/form';
import VariantsList from './VariantsList';
import { renderAttributes } from '../../renderAttributes';
import { isMobile } from 'react-device-detect';
import { renderSelectOption } from '../../Table/renderAttributeType';
import { Link } from "react-router-dom";

function TypeOfProductVariants() {
    const { t } = useTranslation()
    const [opened, { open, close }] = useDisclosure(false);
    const {
        // onSubmit, 
        // values, 
        // getInputProps, 
        setFieldValue
    } = useForm({
        initialValues: {
            attrubutes: attributeData || [
                {
                    key: 1,
                    name: '',
                    values: [],
                    type: "checkbox"
                }
            ],
        }
    });

    return (
        <>
            <CreateNewAttribute opened={opened} renderSelectOption={renderSelectOption} close={close} />
            <div>
                <div className="flex gap-4 p-6 bg-[#f4f4f4] max-sm:flex-col">
                    <div className="w-1/3 max-sm:w-full">
                        <div className="sticky top-36">
                            <h3 className="text-xl font-bold">{t("Product Attributes")}</h3>
                            <p className="mt-2 text-sm font-normal opacity-70">{t("Key characteristics such as size, color, material, and weight that define the product's specifics")}</p>
                            <p className="mt-2 text-sm font-normal opacity-70">{t("You can manager an")} <Link className='font-bold hover:underline' to={'/settings/attributes'}>{t("Attributes")}</Link></p>
                        </div>
                    </div>
                    <div className="w-2/3 max-sm:w-full">
                        {attributeData?.map((item: any, index: number) => <>
                            {renderAttributes(item?.type, item, index, setFieldValue)}
                            <Space h="md" />
                        </>
                        )}
                        <div className='flex flex-col items-center justify-center w-full gap-2'>
                            <Button onClick={open} type="button" variant="light" size={isMobile ? "sm" : "md"} classNames={{ label: "w-full flex items-center justify-center gap-2", root: "w-full " }}>
                                <Icon icon={`solar:add-square-broken`} className="w-6 h-6 max-sm:h-4 max-sm:w-4" />
                                {t("Add new Attributes")}
                            </Button>
                        </div>
                        <Divider my="md" />
                        <TextInput
                            size={isMobile ? "sm" : "md"}
                            withAsterisk
                            label={t("SKU")}
                            placeholder={t("Enter SKU")}
                            classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                        />
                        <Space h="md" />
                        <Checkbox
                            defaultChecked
                            label="Auto generating QR Codes"
                            description="Lorem ipsum dolor sit consectetur adipisicing elit. Modi quasi impedit"
                            size={isMobile ? "sm" : "md"}
                        />
                        <Space h="md" />
                        <div className='flex flex-col items-center justify-center w-full gap-2'>
                            <Button variant="gradient" size={isMobile ? "sm" : "md"} classNames={{ label: "w-full flex items-center justify-center gap-2", root: "w-full " }}>
                                <Icon icon={`solar:magic-stick-2-broken`} className="w-6 h-6 max-sm:h-4 max-sm:w-4" />
                                {t("Generate Variants")}
                            </Button>
                        </div>
                        <VariantsList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypeOfProductVariants