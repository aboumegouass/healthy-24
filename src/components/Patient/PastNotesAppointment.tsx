import { Timeline } from "@mantine/core"
import { generateFakePastNotesAppointments } from "../../utils/makeData"
import { t } from "i18next"
import { useNavigate } from "react-router-dom"
import { format } from "date-fns"
import { Icon } from "@iconify/react"

function PastNotesAppointment() {
    const notesData = generateFakePastNotesAppointments(7)
    const navigate = useNavigate()

    return (
        <Timeline bulletSize={16} color="#192252" active={1} lineWidth={3}>
            {notesData.map((item) => (
                <Timeline.Item classNames={{ itemTitle: 'text-sm text-[#192252]' }} title={format(item.created_at, 'MMMM dd,yyyy')}>
                    <div style={{ borderRadius: 8 }} className='bg-[#FAFAFA] mt-3'>
                        <div className='p-5'>
                            <h2 className='mb-2 text-[#192252] font-medium'>{item.traitment_name}</h2>
                            <p className='text-sm text-[#192252] font-normal opacity-75'>{item.traitment_description}</p>
                        </div>
                        <div className='p-5 border-t border-t-gray-200'>
                            <div className='grid grid-cols-3 gap-3'>
                                <div>
                                    <h3 className='text-sm mb-3 text-[#192252] font-light opacity-75'>{t("Treatment")}</h3>
                                    <h3 className='text-sm text-[#192252] font-medium'>{item.traitment_type}</h3>
                                </div>
                                <div>
                                    <h3 className='text-sm mb-3 text-[#192252] font-light opacity-75'>{t("Duration")}</h3>
                                    <h3 className='text-sm text-[#192252] font-medium'>{item.duration} {t("mounths")}</h3>
                                </div>
                                <div>
                                    <h3 className='text-sm mb-3 text-[#192252] font-light opacity-75'>{t("Document")}</h3>
                                    <h3 className='text-xs text-[#384aaf] font-semibold cursor-pointer' onClick={() => navigate(item.document)}>
                                        {t("Download document")}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Timeline.Item>
            ))}
        </Timeline>
    )
}

export default PastNotesAppointment