import { useState } from 'react'
import { TextInput, Table, TableThead, TableTr, TableTh, TableTbody, TableTd, Avatar, Modal } from '@mantine/core';
import UploadingGallery from '../../UploadingGallery';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Icon } from "@iconify/react";

function VariantsList() {
    const { t } = useTranslation()
    const [openedImages, { open: openImagesModal, close: closeImagesModal }] = useDisclosure(false);
    const [images, setImages]: any = useState([]);

    const onChange = (imageList: any[]) => {
        // data for submit
        setImages(imageList);
    }
    return (
        <div>
            <Modal size={'lg'} opened={openedImages} onClose={closeImagesModal} title="Authentication" centered>
                <UploadingGallery images={images} onChange={onChange} />
            </Modal>
            <label className="my-2 font-semibold flex items-center justify-between" htmlFor="">
                {t("Variants")}
            </label>
            <div className="bg-white rounded-md p-4 shadow-md overflow-hidden">
                <Table.ScrollContainer h={330} minWidth={500}>
                    <Table striped stickyHeader classNames={{ thead: "z-50", th: "border-b-2 border-gray-200" }} highlightOnHover>
                        <TableThead>
                            <TableTr>
                                <TableTh>{t("Name")}</TableTh>
                                <TableTh>{t("SKU")}</TableTh>
                                <TableTh>{t("QR Code")}</TableTh>
                                <TableTh>{t("Images")}</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div onClick={openImagesModal} className="flex items-center cursor-pointer opacity-75 hover:opacity-100">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr><TableTr>
                                <TableTd>Option #1, Option #1</TableTd>
                                <TableTd width={140}>
                                    <TextInput
                                        leftSectionWidth={60}
                                        leftSection={<div className="p-2 text-xs">Prod-</div>}
                                        label={null}
                                        placeholder={t("Enter SKU")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <TextInput
                                        leftSection={<Icon icon={`solar:code-scan-broken`} className="w-4 h-4" />}
                                        label={null}
                                        placeholder={t("Enter QR Code")}
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </TableTd>
                                <TableTd>
                                    <div className="flex items-center">
                                        <Avatar.Group>
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                                            <Avatar radius="sm" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                                            <Avatar radius="sm">+5</Avatar>
                                        </Avatar.Group>
                                    </div>
                                </TableTd>
                            </TableTr>
                        </TableTbody>
                    </Table>
                </Table.ScrollContainer>
            </div>
        </div>
    )
}

export default VariantsList