import { useState } from 'react'
import { useHotkeys } from "@mantine/hooks"
import { Outlet, useLocation } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import MessagesSidebar from '../components/Message/MessagesSidebar';
import { generateFakeMessageItems } from '../utils/makeData';
import { BrowserView, MobileView } from 'react-device-detect';
import MessagesSidebarMobile from '../components/Message/MessagesSidebarMobile';
import MessageMobileHeader from '../components/Message/MessageMobileHeader';

function MessagesLayout() {
    const [isPinned, setIsPinned] = useState(true)
    const [showMessagesSidebar, setShowMessagesSidebar] = useState(false)
    const location = useLocation()
    const [pinned, setPinned] = useState(false)
    useHotkeys([
        ['ctrl+b', () => setPinned(!pinned)],
    ]);
    const fakedDataMessages = generateFakeMessageItems(20)

    return (
        <>
            <Notifications />
            <div className={'flex max-md:flex-col border border-t-0 border-gray-300'}>
                <BrowserView>
                    <div className={`w-72 max-md:w-full`}>
                        <MessagesSidebar
                            pathname={location.pathname}
                            data={fakedDataMessages}
                        />
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="sticky top-0">
                        <div className="p-2">
                            <MessageMobileHeader
                                showMessagesSidebar={showMessagesSidebar}
                                setShowMessagesSidebar={setShowMessagesSidebar}
                            />
                            {showMessagesSidebar && <MessagesSidebarMobile
                                pathname={location.pathname}
                                showMessagesSidebar={showMessagesSidebar}
                                setShowMessagesSidebar={setShowMessagesSidebar}
                                data={fakedDataMessages}
                            />}
                        </div>
                    </div>
                </MobileView>
                <div className={`${isPinned ? 'w-[calc(100%-288px)]' : 'w-full'} max-md:w-full`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MessagesLayout