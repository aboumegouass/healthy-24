import { Icon } from "@iconify/react"
import HeaderTitle from "./HeaderTitle"
import { ActionIcon, Table } from "@mantine/core"
import { t } from "i18next"
import { SwitchStatus } from "./SwitchStatus"
import { generateFakeMedicalHistories } from "../utils/makeData"
import { format, formatDistance, getTime } from "date-fns"

function MedicalHistoryTable() {
    const historyData = generateFakeMedicalHistories(10)
    return (
        <div className="p-4 ml-3 bg-white border border-gray-300 rounded-lg">
            <HeaderTitle
                size='xs'
                bordered={false}
                uppercase
                title="Medical History"
            />
            <Table withRowBorders={false}>
                <Table.Thead className="rounded-lg bg-slate-100">
                    <Table.Tr style={{
                        borderRadius: 8
                    }}>
                        <Table.Th className="font-medium text-[#192252]">{t("Patient")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Appointment")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Date")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Time")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Status")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Action")}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {historyData.map((item) => (
                        <Table.Tr key={item.id}>
                            <Table.Td>
                                <div className="flex items-center gap-2 p-3 py-1 rounded-md">
                                    <img src={item.patient.avatar} className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-white bg-[#2952CC]" />
                                    <div className="w-[calc(100%-36px)]">
                                        <h2 className="text-[#192252] text-sm font-semibold">{item.patient.full_name}</h2>
                                        <p className="text-xs text-gray-500">{item.patient.code}</p>
                                    </div>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                {item.appointment}
                            </Table.Td>
                            <Table.Td>
                                {item.created_at ? formatDistance(item.created_at, new Date(), { addSuffix: true }) : ''}
                            </Table.Td>
                            <Table.Td>
                                {item.created_at ? format(item.created_at, 'HH:S') : ''}
                            </Table.Td>
                            <Table.Td>
                                <SwitchStatus status={item.status} />
                            </Table.Td>
                            <Table.Td>
                                <ActionIcon className='text-gray-500' size={'37px'} variant="transparent">
                                    <Icon className='w-5 h-5' icon={"ri:eye-off-line"} />
                                </ActionIcon>
                                <ActionIcon className='text-gray-500' size={'37px'} variant="transparent">
                                    <Icon className='w-5 h-5' icon={"hugeicons:delete-02"} />
                                </ActionIcon>
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </div>
    )
}

export default MedicalHistoryTable