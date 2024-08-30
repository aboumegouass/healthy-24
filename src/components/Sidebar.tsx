import { sidebarMenu } from "../lib/menu";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

type CompsProps = {
    clickableItem?: string
    setClickableItem?: (clickableItem: string) => void
}

function Sidebar({ clickableItem, setClickableItem }: CompsProps) {
    const { t } = useTranslation()
    const location = useLocation();
    return (
        <>
            <div className={`p-2 h-full w-full`}>
                {sidebarMenu.map((elm) => (
                    <Link
                        key={elm.id}
                        to={elm.href}
                        style={{
                            borderRadius: 8
                        }}
                        className={`rounded-lg text-sm flex items-center gap-2 p-4 ${elm.href == location.pathname ? "font-bold bg-[#EFF3FA] opacity-100 text-[#192252]" : "opacity-75"}`}
                        color={elm.href == location.pathname ? "dark" : ""}
                    >
                        <Icon icon={elm.icon} className="w-5 h-5" /> {t(elm.label)}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Sidebar