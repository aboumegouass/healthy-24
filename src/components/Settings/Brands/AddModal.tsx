import { ActionIcon, Button, LoadingOverlay, Modal, Space, Textarea, TextInput, Tooltip } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { Icon } from "@iconify/react";
import ImageUploading from 'react-images-uploading';
import { useState } from 'react';
import { button_default_class } from '../../../lib/style_classe';
type CompsProps = {
    opened: boolean
    close: () => void
    isLoading?: boolean
}

function AddModal({ opened, close, isLoading }: CompsProps) {
    const { t } = useTranslation()
    const [images, setImages]: any = useState([{
        data_url: '/no-logo.jpg',
    }])
    const onChange = (imageList: any) => {
        setImages(imageList)
    }
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
            title={t("Create new brand")}
        >
            <div>
                <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={1}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpdate,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div {...dragProps} className={`border-2 w-36 mx-auto overflow-hidden ${isDragging ? "border-gray-900 bg-gray-200" : "border-gray-100"} border-dashed rounded-lg p-2 py-6`}>
                            <div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    {imageList.map((image, index) => (
                                        <>
                                            <div key={index} className="relative w-20 h-20 overflow-hidden transition-all duration-200 border rounded-full border-slate-200 group">
                                                <img src={image['data_url']} alt="" className="object-cover w-full h-full" />
                                            </div>
                                            <ActionIcon.Group>
                                                <Tooltip
                                                    arrowSize={8}
                                                    label={<div className="flex items-center gap-2 text-xs"><Trans>Upload logo from your device</Trans></div>}
                                                    withArrow>
                                                    <ActionIcon onClick={() => onImageUpdate(index)} variant="default" className={`max-sm:hidden ${button_default_class}`} size={'md'}>
                                                        <Icon icon={'ph:upload-duotone'} />
                                                    </ActionIcon>
                                                </Tooltip>
                                                <Tooltip
                                                    arrowSize={8}
                                                    label={<div className="flex items-center gap-2 text-xs"><Trans>Clear logo</Trans></div>}
                                                    withArrow>
                                                    <ActionIcon
                                                        onClick={() => setImages([
                                                            {
                                                                data_url: '/no-logo.jpg',
                                                            }
                                                        ])}
                                                        variant="default"
                                                        className={button_default_class}
                                                        size={'md'}
                                                    >
                                                        <Icon className="w-4 h-4 text-red-600" icon={'fluent:arrow-reset-24-filled'} />
                                                    </ActionIcon>
                                                </Tooltip>
                                            </ActionIcon.Group>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </ImageUploading>

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