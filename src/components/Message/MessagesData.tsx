import { ScrollArea } from "@mantine/core"
import MessageItem from "./MessageItem"

function MessagesData({ data }: { data: Message[] }) {
    return (
        <div>
            <ScrollArea h={'65vh'}>
                <div className="p-4">
                    {data.map((item) => (
                        <MessageItem key={item.id} item={item} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default MessagesData