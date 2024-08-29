import { Button, Group, LoadingOverlay, Modal, Space, Textarea, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { Icon } from "@iconify/react";
type CompsProps = {
    opened: boolean
    close: () => void
    isLoading?: boolean
}

function AddModal({ opened, close, isLoading }: CompsProps) {
    const { t } = useTranslation()
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            description: '',
            attributes: [{ label: '', value: randomId() }],
        },
    });
    return (
        <Modal
            size={isMobile ? '100%' : '550px'}
            classNames={{ content: "dark:bg-slate-800 max-w-7xl", header: "dark:bg-slate-800", title: 'font-bold' }}
            zIndex={100}
            opened={opened}
            onClose={close}
            title={t("Create new type")}
        >
            <div>
                <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                <div>
                    <TextInput
                        label={t("Name of type")}
                        placeholder={t("Name of type")}
                        disabled={isLoading}
                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                        key={form.key(`name`)}
                        {...form.getInputProps(`name`)}
                        size={"sm"}
                    />
                </div>
                <Space h="md" />
                <div>
                    <Textarea
                        label={t("Description")}
                        placeholder={t("Description")}
                        disabled={isLoading}
                        rows={6}
                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                        key={form.key(`description`)}
                        {...form.getInputProps(`description`)}
                        size={"sm"}
                    />
                </div>
                <Space h="md" />
                <Group justify="center" mt="md">
                    <Button
                        leftSection={<Icon icon={`mingcute:add-fill`} />}
                        variant='outline'
                        className='w-full'
                        onClick={() => form.insertListItem('attributes', { label: '', value: randomId() })}
                    >
                        {t("Add new attribute")}
                    </Button>
                </Group>
                <Space h="md" />
                <div className='py-3 mt-5 border-t border-t-slate-200 dark:border-t-slate-700'>
                    <div className='flex items-center justify-end gap-2'>
                        <Button
                            variant='filled'
                            disabled={isLoading}
                            type='button'
                            onClick={() => console.log(form.getValues())}
                        >
                            {isLoading ? t("Loading") : t("Submit")}
                        </Button>
                        <Button variant='outline' type='button' onClick={close}>
                            {t("Cancel")}
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddModal