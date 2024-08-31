import { ScrollArea, Space, TextInput } from "@mantine/core"
import HeaderTitle from "../HeaderTitle"
import { t } from "i18next"
import { Icon } from "@iconify/react"
import UserMessageItem from "./UserMessageItem"

type CompsProps = {
    data: MessageItem[]
    pathname: string
}

function MessagesSidebar({ data, pathname }: CompsProps) {
    return (
        <div className="sticky top-0">
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
                    <ScrollArea h={'66vh'}>
                        {data?.map((item) => (
                            <UserMessageItem active={pathname == `/messages/${item.id}`} item={item} key={item.id} />
                        ))}
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default MessagesSidebar