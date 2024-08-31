import { Icon } from "@iconify/react"
import { ActionIcon } from "@mantine/core"
import { t } from "i18next"

function MessageDetailsHeader() {
    return (
        <div className="flex sticky top-0 justify-between border-b border-b-gray-200 p-4 items-center">
            <div className="flex items-center gap-2">
                <div>
                    <img src={'https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'} className="w-10 h-10" style={{ borderRadius: 100 }} alt="Boumegouas Abdelhamid" />
                </div>
                <div className="w-[calc(100%-40px)]">
                    <div className="">
                        <p className={`text-sm font-medium`}>Boumegouas Abdelhamid</p>
                        <p className={`text-xs font-light text-gray-700`}>{t("Online")}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <ActionIcon className='text-[#1f274e] opacity-80' size={'37px'} variant="transparent">
                    <Icon className='w-5 h-5' icon={"octicon:device-camera-video-16"} />
                </ActionIcon>
                <ActionIcon className='text-[#1f274e] opacity-80' size={'37px'} variant="transparent">
                    <Icon className='w-5 h-5' icon={"ph:info"} />
                </ActionIcon>
            </div>
        </div>
    )
}

export default MessageDetailsHeader