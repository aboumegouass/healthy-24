import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type CompsProps = {
    title: string
    children?: ReactNode
    uppercase?: boolean
    bordered?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg'
}
function HeaderTitle({ title, children, uppercase = false, bordered = true, size = 'sm' }: CompsProps) {
    const { t } = useTranslation()
    const switchSize = () => {
        switch (size) {
            case 'xs':
                return 'text-xs'
            case 'sm':
                return 'text-sm'
            case 'lg':
                return 'text-lg'
            case 'md':
                return 'text-base'

            default:
                return 'text-lg'
        }
    }
    const switchPaddingSize = () => {
        switch (size) {
            case 'xs':
                return 'p-1'
            case 'sm':
                return 'p-2.5'
            case 'lg':
                return 'p-5'
            case 'md':
                return 'p-4'

            default:
                return 'p-5'
        }
    }
    return (
        <div className={`flex items-center justify-between ${switchPaddingSize()} px-0 mb-3 ${bordered ? "border-b-2" : "border-b-0"} max-sm:gap-2 border-slate-300 dark:border-slate-800`}>
            <h2 className={`${switchSize()} font-extrabold text-slate-600 dark:text-slate-100 ${uppercase ? 'uppercase' : ''}`}>{t(title)}</h2>
            {children}
        </div>
    )
}

export default HeaderTitle