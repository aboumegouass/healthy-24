import { Icon } from "@iconify/react"
import { ActionIcon } from "@mantine/core"
import { t } from "i18next"

type CompsProps = {
    showMessagesSidebar: boolean
    setShowMessagesSidebar: (showMessagesSidebar: boolean) => void
}
function MessageMobileHeader({ setShowMessagesSidebar, showMessagesSidebar }: CompsProps) {
    return (
        <div className="flex justify-between items-center gap-1">
            <ActionIcon className='text-gray-500' onClick={() => setShowMessagesSidebar(!showMessagesSidebar)} size={'37px'} variant="transparent">
                <Icon className='w-5 h-5' icon={"codicon:menu"} />
            </ActionIcon>
            <h1>{t("Messages")}</h1>
            <ActionIcon className='text-gray-500' size={'37px'} variant="transparent">
                <Icon className='w-5 h-5' icon={"solar:bell-linear"} />
            </ActionIcon>
        </div>
    )
}

export default MessageMobileHeader