import { Button, Drawer, Select, Space, Group, ActionIcon, TextInput, ColorInput, ScrollArea, Checkbox } from '@mantine/core'
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

type CompProps = {
    opened: boolean,
    renderSelectOption: any,
    close: () => void
}
function CreateNewAttribute({ opened, renderSelectOption, close }: CompProps) {
    const { t } = useTranslation()
    const form = useForm({
        initialValues: {
            values: [
                {
                    name: '',
                    value: '',
                    key: randomId()
                }
            ],
            name: '',
            type: '',
            isRequired: false,
        },
    });
    const fields = form.values.values.map((item, index: number) => (
        <Group key={item.key} mt="xs">
            <TextInput
                placeholder="Name of value"
                withAsterisk
                style={{ flex: 1 }}
                {...form.getInputProps(`values.${index}.name`)}
            />
            <ActionIcon color="red" onClick={() => form.removeListItem('values', index)}>
                <IconTrash size="1rem" />
            </ActionIcon>
        </Group>
    ));
    const fieldsColor = form.values.values.map((item, index: number) => (
        <div key={item.key} className='flex items-center gap-2 mb-2'>
            <TextInput
                className='w-2/3'
                placeholder="Name of value"
                withAsterisk
                {...form.getInputProps(`values.${index}.name`)}
            />
            <ColorInput
                className='w-1/3'
                label={null}
                {...form.getInputProps(`values.${index}.value`)}
                placeholder="Value"
            />
            <ActionIcon color="red" onClick={() => form.removeListItem('values', index)}>
                <IconTrash size="1rem" />
            </ActionIcon>
        </div>
    ));
    return (
        <Drawer offset={8} radius="md" position="right" zIndex={300} opened={opened} onClose={close} title={t("Create new Attribute")}>
            <TextInput
                label={t("Attribute Name")}
                placeholder={t("Attribute Name")}
                {...form.getInputProps('name')}
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
            />
            <Space h="sm" />
            <Select
                label="Attribute Type"
                classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                placeholder="Choose Attribute Type"
                renderOption={renderSelectOption}
                {...form.getInputProps('type')}
                data={[
                    {
                        label: "Dropdown",
                        value: "dropdown"
                    },
                    {
                        label: "Text Input",
                        value: "text_input"
                    },
                    {
                        label: "CheckBox",
                        value: "checkbox"
                    },
                    {
                        label: "Radio",
                        value: "radio"
                    },
                    {
                        label: "Color",
                        value: "color"
                    },
                ]}
            />
            <Space h="md" />
            <div className='p-4 border-2 border-gray-200 border-dashed'>
                <ScrollArea h={260}>
                    {fields.length == 0 ? <div className='flex justify-center h-[260px] items-center flex-col gap-1 w-full'>
                        <p className='text-lg font-extrabold text-center opacity-80'>{t("Add New Attribute")}</p>
                        <p className='text-sm text-center opacity-65'>{t("Click on button to add Values to attribute")}</p>
                    </div>
                        : (form.values.type == 'color' ? fieldsColor : fields)}
                </ScrollArea>
            </div>
            <Space h="md" />
            <div className='flex flex-col justify-center gap-4'>
                <Button
                    type='button'
                    onClick={() =>
                        form.insertListItem('values', { name: '', key: randomId() })
                    }
                    variant='light'
                    classNames={{ label: 'flex items-center gap-2 px-8' }}
                >
                    <Icon icon={`solar:add-circle-broken`} className='w-4 h-4' />
                    {t("Add a value")}
                </Button>
                <Checkbox
                    label={t("Add this attribute for this product")}
                />
                <Checkbox
                    {...form.getInputProps('isRequired')}
                    checked={form.getValues().isRequired}
                    label={t("This Attribute is required")}
                />
                <Button
                    classNames={{ label: 'flex items-center gap-2 px-8' }}
                >
                    <Icon icon={`bi:save`} className='w-4 h-4' />
                    {t("Create")}
                </Button>
            </div>
        </Drawer>
    )
}

export default CreateNewAttribute