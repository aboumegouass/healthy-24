import { Icon } from "@iconify/react"
import HeaderTitle from "./HeaderTitle"
import { ActionIcon, Table } from "@mantine/core"
import { t } from "i18next"

function MedicalHistoryTable() {
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
                    <Table.Tr>
                        <Table.Th className="font-medium text-[#192252]">{t("Patient")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Appointment")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Date")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Time")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Status")}</Table.Th>
                        <Table.Th className="font-medium text-[#192252]">{t("Action")}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>
                            <div className="flex items-center gap-2 p-3 py-1 rounded-md">
                                <img src="/no-image.jpg" className="flex items-center justify-center w-9 h-9 rounded-full font-bold text-white bg-[#2952CC]" />
                                <div className="w-[calc(100%-36px)]">
                                    <h2 className="text-[#192252] text-sm font-semibold">{"Mohammed Sabbah"}</h2>
                                    <p className="text-xs text-gray-500">{'#2973976'}</p>
                                </div>
                            </div>
                        </Table.Td>
                        <Table.Td>
                            Monthly Medical Check-up
                        </Table.Td>
                        <Table.Td>
                            Dec 22-2024
                        </Table.Td>
                        <Table.Td>
                            12:00 PM
                        </Table.Td>
                        <Table.Td>
                            12:00 PM
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
                </Table.Tbody>
            </Table>
        </div>
    )
}

export default MedicalHistoryTable