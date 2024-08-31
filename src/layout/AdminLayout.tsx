import { useState } from 'react'
//import { useTranslation } from "react-i18next"
import { useHotkeys } from "@mantine/hooks"
import { Outlet } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import MobileSidebar from '../components/MobileSidebar';

function AdminLayout() {
    const [isPinned, setIsPinned] = useState(true)
    const [showMenu, setShowMenu] = useState(false)

    const [pinned, setPinned] = useState(false)
    const [clickableItem, setClickableItem] = useState('')
    useHotkeys([
        ['ctrl+b', () => setPinned(!pinned)],
    ]);

    return (
        <>
            <Notifications />
            <Navbar
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <div className={'flex max-md:flex-col'}>
                <BrowserView>
                    <div className={`${!isPinned ? '-translate-x-64 rtl:translate-x--translate-x-64 max-md:-translate-x-96 max-md:rtl:translate-x-96' : 'translate-x-0'} fixed w-64 z-[9000] duration-500 transition-all h-[calc(100vh-66px)]`}>
                        <Sidebar setClickableItem={setClickableItem} clickableItem={clickableItem} />
                    </div>
                </BrowserView>
                <MobileView>
                    {showMenu && <MobileSidebar
                        showMenu={showMenu}
                        setShowMenu={setShowMenu}
                    />}
                </MobileView>
                <div className={`${isPinned ? 'w-[calc(100%-256px)]' : 'w-full'} max-md:w-full max-md:translate-x-0 ${!isPinned ? 'translate-x-0' : 'translate-x-64 rtl:-translate-x-64'} duration-500 transition-all`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout