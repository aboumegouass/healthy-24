import { ScrollArea, Space, TextInput } from "@mantine/core"
import { t } from "i18next"
import { Icon } from "@iconify/react"
import UserMessageItem from "./UserMessageItem"

type CompsProps = {
    data: MessageItem[]
    pathname: string
    showMessagesSidebar: boolean
    setShowMessagesSidebar: (showMessagesSidebar: boolean) => void
}

function MessagesSidebarMobile({ data, pathname, setShowMessagesSidebar, showMessagesSidebar }: CompsProps) {
    return (
        <div>
            <TextInput
                placeholder={t("Search for something")}
                radius={8}
                classNames={{ input: "text-sm" }}
                leftSection={<Icon className="w-6 h-6" icon={'iconamoon:search-light'} />}
                size="lg"
            />
            <Space h={'lg'} />
            <div>
                <ScrollArea h={'66vh'}>
                    {data?.map((item) => (
                        <UserMessageItem
                            setShowMessagesSidebar={setShowMessagesSidebar}
                            showMessagesSidebar={showMessagesSidebar}
                            active={pathname == `/messages/${item.id}`}
                            item={item}
                            key={item.id}
                        />
                    ))}
                </ScrollArea>
            </div>
        </div>
    )
}

export default MessagesSidebarMobile