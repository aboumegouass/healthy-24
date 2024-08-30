import { ScrollArea, Space, TextInput } from "@mantine/core"
import HeaderTitle from "../HeaderTitle"
import { t } from "i18next"
import { Icon } from "@iconify/react"
import MessageItem from "./MessageItem"

type CompsProps = {
    clickableItem?: string
    setClickableItem?: (clickableItem: string) => void
    data: MessageItem[]
}

function MessagesSidebar({ clickableItem, setClickableItem, data }: CompsProps) {
    return (
        <div>
            <div className="p-2">
                <HeaderTitle
                    size='md'
                    bordered={false}
                    uppercase
                    title="Messages"
                />
                <TextInput
                    placeholder={t("Search for something")}
                    radius={8}
                    classNames={{ input: "text-sm" }}
                    leftSection={<Icon className="w-6 h-6" icon={'iconamoon:search-light'} />}
                    size="lg"
                />
                <Space h={'lg'} />
                <div>
                    <ScrollArea h={500}>
                        {data?.map((item) => (
                            <MessageItem item={item} key={item.id} />
                        ))}
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default MessagesSidebar