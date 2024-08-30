import { ActionIcon, Drawer, Table, Text } from '@mantine/core'
import { t } from 'i18next'
import HeaderTitle from '../HeaderTitle'
import { SwitchStatus } from '../SwitchStatus'
import { Icon } from '@iconify/react'

type CompsProps = {
    showDetailsDrawer: string | null | number
    setshowDetailsDrawer: (showDetailsDrawer: string | null | number) => void
}
function MedicalHistoryDetails({ setshowDetailsDrawer, showDetailsDrawer }: CompsProps) {

    return (
        <Drawer
            opened={showDetailsDrawer !== null}
            onClose={() => setshowDetailsDrawer(null)}
            title={t("Medical History")}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            position='right'
            classNames={{ header: 'border-b border-b-gray-200 mb-4', title: 'text-[#192252] font-semibold text-xl' }}
        >
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Patient information"
            />
            <div className='flex items-center gap-3 mb-5'>
                <div>
                    <img className='w-12 h-12' style={{ borderRadius: 100 }} src="https://aiphoto.studio/imgs/styles/men/lowres/Anime%20Character.png" alt="" />
                </div>
                <div className='w-[calc(100%-48px)]'>
                    <h2 className='uppercase text-[#192252] text-sm font-medium'>Mr.seddik Mounir</h2>
                    <p className='text-[#192252] opacity-85 text-xs uppercase font-light'>Oran , es senia 310009</p>
                </div>
            </div>
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Payment Detail"
            />
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <h3 className='text-sm mb-2 text-[#192252] font-light opacity-75'>{t("From")}</h3>
                    <h3 className='text-sm text-[#192252] font-medium'>Oran Bank</h3>
                </div>
                <div>
                    <h3 className='text-sm mb-2 text-[#192252] font-light opacity-75'>{t("Pay with")}</h3>
                    <h3 className='text-sm text-[#192252] font-medium'>Debit Card</h3>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 my-6'>
                <div>
                    <h3 className='text-sm mb-2 text-[#192252] font-light opacity-75'>{t("Pay on")}</h3>
                    <h3 className='text-sm text-[#192252] font-medium'>Jan 12, 2023 At 09:00 aM</h3>
                </div>
                <div>
                    <h3 className='text-sm mb-2 text-[#192252] font-light opacity-75'>{t("Statu payment")}</h3>
                    <h3 className='text-sm font-medium'> <SwitchStatus status={'success'} /></h3>
                </div>
            </div>
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Initiel payment"
            />
            <div className='py-3 mb-2 border-b-2 border-dashed border-b-gray-200'>
                <Table horizontalSpacing="xs" withRowBorders={false}>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td className="text-sm text-[#73778b] font-light px-0">{t('Medical check-up')}</Table.Td>
                            <Table.Th className="px-0 text-sm font-semibold text-right">$500</Table.Th>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-sm text-[#73778b] font-light px-0">{t('Medicine')}</Table.Td>
                            <Table.Th className="px-0 text-sm font-semibold text-right">$20</Table.Th>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>
            <div className='py-3 mb-2 border-b-2 border-dashed border-b-gray-200'>
                <Table horizontalSpacing="xs" withRowBorders={false}>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td className="text-sm text-[#73778b] font-light px-0">{t('Medical check-up')}</Table.Td>
                            <Table.Th className="px-0 text-sm font-semibold text-right">$500</Table.Th>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td className="text-sm text-[#73778b] font-light px-0">{t('Medicine')}</Table.Td>
                            <Table.Th className="px-0 text-sm font-semibold text-right">$20</Table.Th>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>
            <div className='py-3 mb-2'>
                <Table horizontalSpacing="xs" withRowBorders={false}>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td className="text-base text-[#73778b] font-bold px-0">{t('Medicine')}</Table.Td>
                            <Table.Th className="px-0 text-base font-extrabold text-right text-green-700">$50</Table.Th>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>

            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Documentation"
            />
            <div className='flex items-center justify-between p-3 border border-gray-200' style={{ borderRadius: 6 }}>
                <div className='flex items-center text-[#1f274e] opacity-80 gap-2'>
                    <Icon icon={'solar:document-text-linear'} />
                    <span className='text-xs font-semibold'>Medical-invoice.pdf</span>
                </div>
                <div>
                    <ActionIcon className='text-[#1f274e] opacity-80' size={'37px'} variant="transparent">
                        <Icon className='w-5 h-5' icon={"solar:download-linear"} />
                    </ActionIcon>
                </div>
            </div>
        </Drawer>
    )
}

export default MedicalHistoryDetails