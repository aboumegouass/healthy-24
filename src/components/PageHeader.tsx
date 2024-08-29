import { ReactNode } from 'react'
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';
type CompsProps = {
    title: string
    children?: ReactNode
}
function PageHeader({ title, children }: CompsProps) {
    const { t } = useTranslation()
    return (
        <div className="p-2 flex items-center justify-between py-6">
            <h1 className="text-3xl opacity-80 font-black flex items-center gap-3"> <Icon icon="mage:dashboard-2" className="w-8 h-8" />{t(title)}</h1>
            {children}
        </div>
    )
}

export default PageHeader