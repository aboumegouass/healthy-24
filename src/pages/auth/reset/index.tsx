import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"
import { useFormik } from "formik"
import { Icon } from "@iconify/react";
import { ActionIcon, Button, Checkbox, Space, TextInput } from "@mantine/core"
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandTelegram } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Index() {
    const { t } = useTranslation()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values);
        }
    })
    return (
        <>
            <Helmet>
                <title>{t("Forget Password")} | Raabit</title>
            </Helmet>
            <div className="flex max-sm:flex-col">
                <div className="w-1/2 max-sm:w-full flex items-center">
                    <div className="p-6 mx-20 max-sm:mx-0 w-full">
                        <div className="mb-7">
                            <h2 className="text-[#192252] text-2xl font-semibold flex items-center gap-2">{t("Forget Password")} <img src="/log_hand3.png" className="w-9" /></h2>
                            <p className="text-[#9b9da7] text-sm font-light">{t("Enter your email to recover password ")}</p>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <TextInput
                                    size="sm"
                                    withAsterisk
                                    label={t("Email")}
                                    value={formik.values.email}
                                    name='email'
                                    error={formik.errors.email}
                                    onChange={formik.handleChange}
                                    placeholder={`${t("Enter Your email here")}`}
                                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                                />
                            </div>
                            <div className="mt-10">
                                <Button className="w-full bg-[#192252] hover:bg-[#161a35] text-sm" radius={10} size="lg" type="submit">
                                    {t("Reset")}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 max-sm:hidden">
                    <div className="flex relative bg-[#56CCF2] overflow-hidden justify-center h-[100vh]">
                        <div className="p-6 px-20">
                            <p className="text-white font-bold mb-4 text-xl text-center justify-center flex items-center gap-2">
                                <span>{t("We give the best experience")}</span>
                                <img src="/image_2024-08-31_17-57-27.png" className="w-8" />
                            </p>
                            <p className="text-white font-light text-base text-center flex items-center gap-2">
                                <span>{t("Dedicated virtual consulting platform for docotrs and patients to help them consult across vatious channels")}</span>
                            </p>
                        </div>
                        <img className="absolute -bottom-12 right-12" src="/logo-search-grid-1x.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}