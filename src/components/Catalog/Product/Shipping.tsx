import { AnimatePresence, motion } from 'framer-motion'
import { Switch, Checkbox, NumberInput, Space } from '@mantine/core';
import { useTranslation } from 'react-i18next';
type CompProps = {
    rechargeable: boolean
    setRechargeable: (rechargeable: boolean) => void
}
function Shipping({ rechargeable, setRechargeable }: CompProps) {
    const { t } = useTranslation()

    return (
        <div id='shipping' className="p-6 flex max-sm:flex-col gap-4">
            <div className="w-1/3 max-sm:w-full">
                <div className="sticky top-36">
                    <h3 className="text-xl font-bold">{t("Shipping")}</h3>
                    <p className="opacity-70 font-normal text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius asperiores?</p>
                </div>
            </div>
            <div className="w-2/3 max-sm:w-full">
                <div className="border-2 overflow-hidden border-gray-200 border-dashed rounded-lg bg-slate-50 p-4">
                    <div className="flex justify-between">
                        <div className="w-[calc(100%-80px)]">
                            <h3 className="text-lg font-bold">{t("This product is rechargeable")}</h3>
                            <p className="text-sm opacity-65">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quasi impedit")}</p>
                        </div>
                        <div className="w-20">
                            <Switch
                                size="md"
                                onChange={(e) => setRechargeable(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
                <Space h="md" />
                <AnimatePresence>
                    {rechargeable &&
                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
                            <div>
                                <Checkbox
                                    defaultChecked
                                    label="Free Shipping"
                                    description="Lorem ipsum dolor sit consectetur adipisicing elit. Modi quasi impedit"
                                    size="md"
                                />
                            </div>
                            <Space h="md" />
                            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-4">
                                <div>
                                    <NumberInput
                                        size="md"
                                        label="Width"
                                        placeholder="Width"
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </div>
                                <div>
                                    <NumberInput
                                        size="md"
                                        label="Height"
                                        placeholder="Height"
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </div>
                                <div>
                                    <NumberInput
                                        size="md"
                                        label="Length"
                                        placeholder="Length"
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </div>
                                <div>
                                    <NumberInput
                                        size="md"
                                        label="Weight"
                                        placeholder="Weight"
                                        classNames={{ input: "ring-1 ring-slate-300 focus:ring-2 focus:ring-gray-800", label: 'mb-2' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Shipping