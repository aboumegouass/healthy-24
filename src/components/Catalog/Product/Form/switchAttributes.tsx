import { Chip, ChipGroup, Group, Radio, Select, TextInput } from "@mantine/core";
import { FormikProps } from "formik";
import React from "react";
import { Icon } from "@iconify/react";

export const SwitchAttributes = (data: { name: string, values: string[], id: number, label: string }, attr_type: "radio" | "dropdown" | "color" | "checkbox" | "text_input", form: FormikProps<ProductFormData>) => {
    switch (attr_type) {
        case 'dropdown':
            return (
                <Select
                    key={data.name}
                    name={data.name}
                    label={data.label}
                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2 text-sm font-bold opacity-85' }}
                    size="sm"
                    placeholder={data.label}
                    data={data.values}
                    value={form.values.attributes[data.id].value}
                    onChange={(value) => form.setFieldValue(`attributes[${data.id}].value`, value)}
                />
            );
        case 'radio':
            return (
                <Radio.Group
                    key={data.name}
                    name={data.name}
                    size="sm"
                    label={data.label}
                    classNames={{ label: 'mb-2 text-sm font-bold opacity-85' }}
                    value={form.values.attributes[data.id].value}
                    onChange={(value) => form.setFieldValue(`attributes[${data.id}].value`, value)}
                >
                    <Group>
                        {data.values.map((item, i) => (
                            <Radio key={i} label={item} value={item} />
                        ))}
                    </Group>
                </Radio.Group>
            );
        case 'color':
            return (
                <>
                    <label className="block mb-2 text-sm font-bold opacity-85" htmlFor="">{data?.label}</label>
                    <Radio.Group
                        value={form.values.attributes[data.id].value}
                        onChange={(value) => form.setFieldValue(`attributes[${data.id}].value`, value)}
                    >
                        <div className="grid grid-cols-12 gap-1 p-2 bg-white rounded-md max-sm:grid-cols-7">
                            {data?.values?.map((item: any, i: number) => (
                                <Radio
                                    key={i}
                                    color={item}
                                    value={item}
                                    radius="lg"
                                    classNames={{ radio: "border-[3px solid #999!important] cursor-pointer opacity-70 hover:opacity-100 shadow-md" }}
                                    styles={{
                                        radio: {
                                            backgroundColor: item
                                        }
                                    }}
                                    size={"lg"}
                                />
                            ))}
                        </div>
                    </Radio.Group>
                </>
            );
        case 'text_input':
            return (
                <TextInput
                    key={data.name}
                    name={data.name}
                    size="sm"
                    withAsterisk
                    label={data.label}
                    placeholder={data.label}
                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2 text-sm opacity-85' }}
                    value={form.values.attributes[data.id].value}
                    onChange={form.handleChange}
                />
            );
        case 'checkbox':
            return (
                <React.Fragment key={data.name}>
                    <label className="block mb-2 text-sm font-bold opacity-85">{data.label}</label>
                    <ChipGroup
                        multiple
                        //name={data.name}
                        value={form.values.attributes[data.id].value}
                        onChange={(value) => form.setFieldValue(`attributes[${data.id}].value`, value)}
                    >
                        <div className="flex gap-1 p-3 bg-white rounded-sm">
                            {data.values.map((item, i) => (
                                <span className=''>
                                    <Chip
                                        key={i}
                                        radius="sm"
                                        classNames={{ label: "max-sm:text-xs" }}
                                        icon={<Icon icon={`fa6-solid:check`} className="w-4 h-4 max-sm:h-3 max-sm:w-3" />}
                                        size="sm"
                                        value={item}
                                    >
                                        {item}
                                    </Chip>
                                </span>
                            ))}
                        </div>
                    </ChipGroup>
                </React.Fragment>
            );
        default:
            return null;
    }
}