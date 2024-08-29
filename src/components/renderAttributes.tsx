import { Icon } from "@iconify/react";
import { Group, TextInput, Radio, Checkbox, Chip, Select, ChipGroup } from '@mantine/core';
import { isMobile } from "react-device-detect";

export const renderAttributes = (type: string, data: any, index: number, setFieldValue: any) => {
    switch (type) {
        case 'checkbox':
            return (
                <>
                    <label className="mb-2 font-semibold block" htmlFor="">{data?.name}</label>
                    <ChipGroup
                        multiple
                        onChange={(e) => setFieldValue(`attrubutes.${index}.values`, e)}
                    >
                        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2 max-md:grid-cols-3 gap-4 rounded-md p-3 bg-white">
                            {data?.values?.map((item: any, i: number) => (
                                <Chip
                                    key={i}
                                    radius="sm"
                                    classNames={{ label: "max-sm:text-xs" }}
                                    icon={<Icon icon={`fa6-solid:check`} className="w-4 h-4 max-sm:h-3 max-sm:w-3" />}
                                    size={isMobile ? "xs" : "sm"}
                                    value={item}
                                >
                                    {item}
                                </Chip>
                            ))}
                        </div>
                    </ChipGroup>
                </>
            )
        case 'color':
            return (
                <>
                    <label className="mb-2 font-semibold block" htmlFor="">{data?.name}</label>
                    <Checkbox.Group
                        onChange={(e) => setFieldValue(`attrubutes.${index}.values`, e)}
                    >
                        <div className="grid grid-cols-12 max-sm:grid-cols-7 gap-4 rounded-md p-3 bg-white">
                            {data?.values?.map((item: any, i: number) => (
                                <Checkbox
                                    key={i}
                                    color={item}
                                    value={item}
                                    radius="xl"
                                    classNames={{ input: "border-[3px solid #999!important] cursor-pointer opacity-70 hover:opacity-100 shadow-md" }}
                                    styles={{
                                        input: {
                                            backgroundColor: item
                                        }
                                    }}
                                    size={"xl"}
                                />
                            ))}
                        </div>
                    </Checkbox.Group>
                </>
            )
        case 'radio':
            return (
                <Radio.Group
                    size={isMobile ? "sm" : "md"}
                    name="favoriteFramework"
                    label={data?.name}
                    classNames={{ label: 'font-semibold block mb-2' }}
                    withAsterisk
                    onChange={(e) => setFieldValue(`attrubutes.${index}.values`, [e])}
                >
                    <div className="flex items-center gap-4 max-sm:gap-2 rounded-md p-3 bg-white">
                        <Group>
                            {data?.values?.map((item: any, i: number) => (
                                <Radio key={i} value={item} label={item} />
                            ))}
                        </Group>
                    </div>
                </Radio.Group>
            )
        case 'dropdown':
            return (
                <Select
                    label={data?.name}
                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'font-semibold block mb-2' }}
                    size={isMobile ? "sm" : "md"}
                    onChange={(e) => setFieldValue(`attrubutes.${index}.values`, [e])}
                    placeholder="Choose Attribute #1"
                    data={data?.values}
                />
            )

        case 'text_input':
            return (
                <TextInput
                    size={isMobile ? "sm" : "md"}
                    withAsterisk
                    label={data?.name}
                    onChange={(e) => setFieldValue(`attrubutes.${index}.values`, [e.target.value])}
                    placeholder={data?.name}
                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'font-semibold block mb-2' }}
                />
            )

        default:
            break;
    }
}