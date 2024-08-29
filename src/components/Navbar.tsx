import { useState } from 'react'
import { motion } from 'framer-motion';
import { ActionIcon, Avatar, Button, Indicator, Kbd, Menu, Popover, ScrollArea } from '@mantine/core';
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { Link, useNavigate } from "react-router-dom"

type CompProps = {
    isPinned: boolean
    setIsPinned: (isPinned: boolean) => void
}
function Navbar({ isPinned, setIsPinned }: CompProps) {
    const animateX = 45
    const { t } = useTranslation()
    const navigate = useNavigate()
    const animateDuration = 0.36
    const [isNotification, setIsNotification] = useState(false)
    const draw = {
        hidden: { pathLength: 0, opacity: 0, x: animateX },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                x: 0,
                transition: {
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 4.5,
                    },
                    opacity: { delay, duration: 0.01 },
                    x: {
                        delay: 3,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2.7,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                }
            };
        }
    };
    const draw2 = {
        hidden: { pathLength: 0, opacity: 0, scale: 0, x: animateX },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                scale: 1,
                opacity: 1,
                x: 0,
                transition: {
                    pathLength: {
                        delay,
                        type: "spring",
                        duration: 4.5,
                    },
                    opacity: { delay, duration: 0.51 },
                    scale: {
                        delay,
                        duration: 0.51,
                        damping: 3,
                        stiffness: 50,
                        restDelta: 0.001
                    },
                    x: {
                        delay: 3,
                        type: "spring",
                        duration: animateDuration,
                        damping: 2.3,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                },
            };
        }
    };
    const draw3 = {
        hidden: { pathLength: 0, opacity: 0, x: animateX, rotate: 8 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                x: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                    pathLength: { delay, type: "spring", duration: 4.5 },
                    opacity: { delay, duration: 0.51 },
                    rotate: {
                        delay,
                        type: "spring",
                        duration: animateDuration,
                        damping: 4,
                        stiffness: 30,
                        restDelta: 0.001
                    },
                    x: {
                        delay,
                        type: "spring",
                        duration: animateDuration + 32,
                        damping: 5.5,
                        stiffness: 50,
                        restDelta: 0.001
                    }
                },
            };
        }
    };
    return (
        <div className='sticky top-0 p-3.5 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b-2 lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/70 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'>
            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-3 pl-2'>
                    <Link to={'/home'}>
                        <img src='/LOGO.png' className='h-8' />
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    <BrowserView>
                        <Indicator color="red" offset={9} processing>
                            <Popover width={400} withArrow arrowSize={13} opened={isNotification} onChange={setIsNotification}>
                                <Popover.Target>
                                    <ActionIcon className='text-gray-500' onClick={() => setIsNotification((o) => !o)} size={'37px'} variant="transparent">
                                        <Icon className='w-5 h-5' icon={isNotification ? "solar:bell-bold" : "solar:bell-broken"} />
                                    </ActionIcon>
                                </Popover.Target>
                                <Popover.Dropdown classNames={{ dropdown: "shadow-lg" }}>
                                    <div className='overflow-hidden border border-gray-200 rounded-lg bg-gray-50'>
                                        <div className='flex items-center justify-between p-3 py-5 border-b-2 border-b-gray-200'>
                                            <h3 className="flex items-center gap-2 text-base font-bold opacity-70"> <Icon className='w-5 h-5' icon="solar:bell-broken" />{t("Notifications")}</h3>
                                            <p>
                                                <Link to={`/`}>
                                                    <a className='text-sm font-bold hover:underline'>{t("See more...")}</a>
                                                </Link>
                                            </p>
                                        </div>
                                        <ScrollArea className='h-72'>
                                            <div>
                                                <div className="relative flex p-4 border-b rounded-lg group gap-x-6 last-of-type:border-b-0 hover:bg-gray-100">
                                                    <div className="flex items-center justify-center flex-none bg-white rounded-lg shadow-sm h-14 w-14 group-hover:bg-white">
                                                        <Icon icon={`pepicons-print:smartphone-home-button-circle`} className="w-8 h-8 text-gray-600 group-hover:text-black" aria-hidden="true" />
                                                    </div>
                                                    <div>
                                                        <a href={'/'} className="font-semibold text-gray-900 group-hover:text-black">
                                                            Lorem ipsum dolor sit
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet explicabo fugiat eaque, ea provident nemo.</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex p-4 border-b rounded-lg group gap-x-6 last-of-type:border-b-0 hover:bg-gray-100">
                                                    <div className="flex items-center justify-center flex-none bg-white rounded-lg shadow-sm h-14 w-14 group-hover:bg-white">
                                                        <Icon icon={`pepicons-print:smartphone-home-button-circle`} className="w-8 h-8 text-gray-600 group-hover:text-black" aria-hidden="true" />
                                                    </div>
                                                    <div>
                                                        <a href={'/'} className="font-semibold text-gray-900 group-hover:text-black">
                                                            Lorem ipsum dolor sit
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet explicabo fugiat eaque, ea provident nemo.</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex p-4 border-b rounded-lg group gap-x-6 last-of-type:border-b-0 hover:bg-gray-100">
                                                    <div className="flex items-center justify-center flex-none bg-white rounded-lg shadow-sm h-14 w-14 group-hover:bg-white">
                                                        <Icon icon={`pepicons-print:smartphone-home-button-circle`} className="w-8 h-8 text-gray-600 group-hover:text-black" aria-hidden="true" />
                                                    </div>
                                                    <div>
                                                        <a href={'/'} className="font-semibold text-gray-900 group-hover:text-black">
                                                            Lorem ipsum dolor sit
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet explicabo fugiat eaque, ea provident nemo.</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex p-4 border-b rounded-lg group gap-x-6 last-of-type:border-b-0 hover:bg-gray-100">
                                                    <div className="flex items-center justify-center flex-none bg-white rounded-lg shadow-sm h-14 w-14 group-hover:bg-white">
                                                        <Icon icon={`pepicons-print:smartphone-home-button-circle`} className="w-8 h-8 text-gray-600 group-hover:text-black" aria-hidden="true" />
                                                    </div>
                                                    <div>
                                                        <a href={'/'} className="font-semibold text-gray-900 group-hover:text-black">
                                                            Lorem ipsum dolor sit
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet explicabo fugiat eaque, ea provident nemo.</p>
                                                    </div>
                                                </div>
                                                <div className="relative flex p-4 border-b rounded-lg group gap-x-6 last-of-type:border-b-0 hover:bg-gray-100">
                                                    <div className="flex items-center justify-center flex-none bg-white rounded-lg shadow-sm h-14 w-14 group-hover:bg-white">
                                                        <Icon icon={`pepicons-print:smartphone-home-button-circle`} className="w-8 h-8 text-gray-600 group-hover:text-black" aria-hidden="true" />
                                                    </div>
                                                    <div>
                                                        <a href={'/'} className="font-semibold text-gray-900 group-hover:text-black">
                                                            Lorem ipsum dolor sit
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet explicabo fugiat eaque, ea provident nemo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        </Indicator>
                    </BrowserView>

                    <ActionIcon className='text-gray-500' onClick={() => setIsNotification((o) => !o)} size={'37px'} variant="transparent">
                        <Icon className='w-5 h-5' icon={"solar:settings-linear"} />
                    </ActionIcon>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Avatar
                                className='ml-3 cursor-pointer'
                                size="38px"
                                radius="xl"
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
                            />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item onClick={() => navigate('/profile')} leftSection={<Icon className='w-5 h-5' icon="solar:user-id-broken" />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item leftSection={<Icon className='w-5 h-5' icon="solar:settings-broken" />}>
                                Settings
                            </Menu.Item>

                            <Menu.Divider />
                            <Menu.Item
                                color="red"
                                leftSection={<Icon className='w-5 h-5' icon="solar:logout-2-broken" />}
                            >
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                </div>
            </div>
        </div>
    )
}

export default Navbar