import { Button, Modal } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type CompsProps = {
    opened: boolean
    setOpened: (opened: boolean) => void
    handleDelete: () => void
}
function ConfirmDeletion({ opened, setOpened, handleDelete }: CompsProps) {
    const { t } = useTranslation()
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            withCloseButton={false}
            centered>
            <h3 className="mb-2 text-base font-bold text-center">{t("Confirm deletion")}</h3>
            <p className="text-base text-center">{t("Do you really want to delete this item?")}</p>
            <div className="flex justify-center gap-2 mt-3">
                <Button onClick={handleDelete} className="text-sm" variant="outline">
                    {t("Yes, Delete it")}
                </Button>
                <Button
                    onClick={() => setOpened(false)}
                    className="text-sm dark:border-[#25314f] dark:text-white/70 dark:hover:bg-transparent dark:hover:border-[#34446f]"
                    variant="default"
                >
                    {t("No")}
                </Button>
            </div>
        </Modal>
    )
}

export default ConfirmDeletion