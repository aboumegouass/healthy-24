import { Table } from '@mantine/core'
import { t } from 'i18next'
import HeaderTitle from '../HeaderTitle'

type CompsProps = {
    patient_data?: PatientType
}
function PatientDetailsSidebarCard({ patient_data }: CompsProps) {
    return (
        <div className="p-4 border border-gray-100" style={{ borderRadius: 9 }}>
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title={`Patient information`}
            />
            <Table className="my-4" horizontalSpacing="xs" withRowBorders={false}>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#73778b] font-light px-0">{t('Weight')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">12 lb</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#73778b] font-light px-0">{t('Height')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">1.72 m</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#9da4cf] font-light px-0">{t('Blood Type')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">O- (Negative)</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#9da4cf] font-light px-0">{t('Blood Pressure')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">120/80mmHg</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#9da4cf] font-light px-0">{t('Blood Glucose')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">92mg/dL</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#9da4cf] font-light px-0">{t('Disease')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">Diabetes</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-xs text-[#9da4cf] font-light px-0">{t('Alergies')}</Table.Td>
                        <Table.Th className="px-0 text-xs font-medium text-right">Peanut</Table.Th>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </div>
    )
}

export default PatientDetailsSidebarCard