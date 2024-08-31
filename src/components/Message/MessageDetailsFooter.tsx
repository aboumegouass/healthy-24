import { Icon } from "@iconify/react"
import { ActionIcon, TextInput } from "@mantine/core"
import { t } from "i18next"

function MessageDetailsFooter() {
    return (
        <div className="flex sticky bg-white bottom-0 gap-3 border-t border-t-gray-200 p-4 items-center">
            <div>
                <ActionIcon className='text-[#1f274e]' size={'37px'} variant="transparent">
                    <Icon className='w-5 h-5' icon={"solar:document-text-linear"} />
                </ActionIcon>
            </div>
            <div className="w-[calc(100%-93px)]">
                <TextInput
                    placeholder={t("Write something here")}
                    radius={8}
                    classNames={{ input: "text-sm" }}
                    size="lg"
                />
            </div>
            <div>
                <ActionIcon className='text-white bg-[#1f274e]' radius={100} size={'55px'} variant="filled">
                    <Icon className='w-5 h-5' icon={"fa:send"} />
                </ActionIcon>
            </div>
        </div>
    )
}

export default MessageDetailsFooter