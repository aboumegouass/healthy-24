import { Button, Divider, Table } from "@mantine/core"
import { t } from "i18next"
import { useNavigate } from "react-router-dom"

type CompsProps = {
    patient_data: PatientType
}
function PatientCard({ patient_data }: CompsProps) {
    const navigate = useNavigate()
    return (
        <div className="p-4 border border-gray-100" style={{ borderRadius: 9 }}>
            <img style={{ borderRadius: 100 }} className="w-12 h-12" src={patient_data.avatar} alt={`${patient_data.first_name} ${patient_data.last_name}`} />
            <div className="my-3">
                <h3 className="text-[#192252] mb-3 text-sm font-medium">{`${patient_data.first_name} ${patient_data.last_name}`}</h3>
                <h3 className="text-xs font-light text-[#73778b]">{patient_data.address}</h3>
            </div>
            <Divider />
            <Table className="my-4" horizontalSpacing="xs" withRowBorders={false}>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td className="text-[11px] text-[#73778b] font-light px-0">{t('Weight')}</Table.Td>
                        <Table.Th className="text-[11px] font-medium px-0 text-right">{patient_data.weight} lb</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-[11px] text-[#9da4cf] font-light px-0">{t('Blood Pressure')}</Table.Td>
                        <Table.Th className="text-[11px] font-medium px-0 text-right">{patient_data.blood_pressure}</Table.Th>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Td className="text-[11px] text-[#9da4cf] font-light px-0">{t('Blood Glucose')}</Table.Td>
                        <Table.Th className="text-[11px] font-medium px-0 text-right">{patient_data.blood_glucose}</Table.Th>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
            <Button
                variant="filled"
                color="#192252"
                onClick={() => navigate(`/patients-list/${patient_data.id}`)}
                radius={10}
                className="w-full text-xs font-medium"
                size="lg"
            >
                {t("View detail patient")}
            </Button>
        </div>
    )
}

export default PatientCard