import { ActionIcon, Combobox, InputBase, ScrollArea, Tooltip, useCombobox } from '@mantine/core'
import { FormikProps } from 'formik'
import { TFunction } from 'i18next'
import { Icon } from "@iconify/react";
import { Avatar, Text } from '@mantine/core';
import { useState } from 'react';
import { brandsData } from '../../../../utils/makeData';

function BrandsDropdown({ form, t }: { form: FormikProps<ProductFormData>, t: TFunction<"translation", undefined> }) {
    const [search, setSearch] = useState('');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const shouldFilterOptions = brandsData.every((item) => item.name !== search);
    const filteredOptions = shouldFilterOptions
        ? brandsData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase().trim()))
        : brandsData;

    const options = filteredOptions.map((item: any) => (
        <Combobox.Option value={item} key={item.id} className='dark:hover:bg-slate-800'>
            <div className='flex items-center gap-2'>
                <Avatar src={item.logo} size={40} radius="sm" />
                <div>
                    <Text className='text-sm font-bold'>{item?.name}</Text>
                </div>
            </div>
        </Combobox.Option>
    ));
    return (
        <div className='flex items-center gap-1'>
            <div className='w-[calc(100%-39px)]'>
                <Combobox
                    store={combobox}
                    onOptionSubmit={(val: any) => {
                        form.setFieldValue('brand_id', val.id)
                        setSearch(val.name)
                        combobox.closeDropdown();
                    }}
                >
                    <Combobox.Target>
                        <InputBase
                            rightSection={<Combobox.Chevron />}
                            rightSectionPointerEvents="none"
                            onClick={() => combobox.openDropdown()}
                            label={t("Brands")}
                            classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-2' }}
                            onFocus={() => combobox.openDropdown()}
                            onBlur={() => {
                                combobox.closeDropdown();
                                setSearch(search || '');
                            }}
                            placeholder={`${t("Search in brands")}...`}
                            value={search}
                            onChange={(event) => {
                                combobox.updateSelectedOptionIndex();
                                setSearch(event.currentTarget.value);
                            }}
                        />
                    </Combobox.Target>

                    <Combobox.Dropdown className='dark:bg-slate-700 dark:border-slate-800'>
                        <ScrollArea h={290}>
                            <Combobox.Options>
                                {options.length > 0 ? options : <Combobox.Empty>{t("Nothing found")}</Combobox.Empty>}
                            </Combobox.Options>
                        </ScrollArea>
                    </Combobox.Dropdown>
                </Combobox>
            </div>
            <div className='w-[39px]'>
                <Tooltip
                    arrowSize={8}
                    label={<div className="flex items-center gap-2 text-sm">{t("Create new")}</div>}
                    withArrow>
                    <ActionIcon type='button' variant="default" className={`mt-[29px] h-[38px]`} size={'lg'}>
                        <Icon icon={'fa6-solid:plus'} />
                    </ActionIcon>
                </Tooltip>
            </div>
        </div>
    )
}

export default BrandsDropdown