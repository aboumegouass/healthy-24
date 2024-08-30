import { useState } from 'react'
import { useHotkeys } from "@mantine/hooks"
import { Outlet } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import MessagesSidebar from '../components/Message/MessagesSidebar';
import { generateFakeMessageItems } from '../utils/makeData';

function MessagesLayout() {
    const [isPinned, setIsPinned] = useState(true)

    const [pinned, setPinned] = useState(false)
    const [clickableItem, setClickableItem] = useState('')
    useHotkeys([
        ['ctrl+b', () => setPinned(!pinned)],
    ]);
    const fakedDataMessages = generateFakeMessageItems(20)
    return (
        <>
            <Notifications />
            <div className={'flex max-md:flex-col border border-t-0 border-gray-300'}>
                <div className={`w-72 max-md:w-full`}>
                    <MessagesSidebar data={fakedDataMessages} setClickableItem={setClickableItem} clickableItem={clickableItem} />
                </div>
                <div className={`${isPinned ? 'w-[calc(100%-288px)]' : 'w-full'} max-md:w-full`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MessagesLayout