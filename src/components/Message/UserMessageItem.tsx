import { Badge } from '@mantine/core'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

function UserMessageItem({
    item,
    showMessagesSidebar,
    setShowMessagesSidebar,
    active
}: {
    item: MessageItem,
    active: boolean,
    showMessagesSidebar?: boolean,
    setShowMessagesSidebar?: (showMessagesSidebar: boolean) => void
}) {
    return (
        <Link
            onClick={() => setShowMessagesSidebar?.(false)}
            className={`relative flex items-center hover:bg-gray-100 ${active ? 'bg-gray-100 after:bg-sky-700' : ''} gap-2 p-3 after:content-[""] after:absolute after:w-1 after:top-0 after:bottom-0 after:left-0 mb-1`}
            to={`/messages/${item.id}`}
        >
            {item.unread_messages_count > 0 && <Badge variant='light' color='' className='absolute right-4 top-10' size="sm" circle>
                {item.unread_messages_count}
            </Badge>}
            <div>
                <img src={item.avatar} className="w-10 h-10" style={{ borderRadius: 100 }} alt={item.full_name} />
            </div>
            <div className="w-[calc(100%-40px)]">
                <div className="flex items-center justify-between">
                    <p className={`text-sm ${item.unread_messages_count > 0 ? 'font-bold' : 'font-medium'}`}>{item.full_name}</p>
                    <p className={`text-xs ${item.unread_messages_count > 0 ? 'font-normal text-gray-800' : 'font-light text-gray-700'} `}>{item.dateTime ? format(item.dateTime, 'HH:S') : ''}</p>
                </div>
                <p className={`text-xs ${item.unread_messages_count > 0 ? 'font-medium' : 'font-light'} text-gray-900`}>{item.text.length > 20 ? `${item.text.substring(0, 20)}...` : item.text}</p>
            </div>
        </Link>
    )
}

export default UserMessageItem