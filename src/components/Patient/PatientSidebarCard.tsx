import { Button } from "@mantine/core"
import { t } from "i18next"
import { useNavigate } from "react-router-dom"

type CompsProps = {
    patient_data?: PatientType
}
function PatientSidebarCard({ patient_data }: CompsProps) {
    const navigate = useNavigate()
    return (
        <div className="p-4 border border-gray-100" style={{ borderRadius: 9 }}>
            <div className="flex justify-center mb-2">
                <img
                    className="w-20 h-20"
                    style={{ borderRadius: 100 }}
                    src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg"
                    alt=""
                />
            </div>
            <div>
                <h2 className="text-[#192252] text-center">Sarah Lee</h2>
                <p className="my-2 text-xs font-light text-center">{t("Patient ID")}: <strong>#D0820815</strong></p>
                <p className="text-xs font-light text-center">321 Maple St, Anytown, USA</p>
            </div>
            <div className="grid grid-cols-2 gap-2 my-4">
                <div>
                    <h3 className="font-bold text-center">13</h3>
                    <h3 className="text-sm font-light text-center">Appointment</h3>
                </div>
                <div>
                    <h3 className="font-bold text-center">8</h3>
                    <h3 className="text-sm font-light text-center">Completed</h3>
                </div>
            </div>
            <Button
                variant="filled"
                color="#192252"
                onClick={() => navigate(`/messages/D2796297523`)}
                radius={10}
                className="w-full text-xs font-medium"
                size="lg"
            >
                {t("Message patient")}
            </Button>
        </div>
    )
}

export default PatientSidebarCard