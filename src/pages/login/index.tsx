import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"
import { useFormik } from "formik"
import { Icon } from "@iconify/react";
import { ActionIcon, Button, Space, TextInput } from "@mantine/core"
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css'
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandTelegram } from "@tabler/icons-react";

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
                <title>{t("Login")} | Raabit</title>
            </Helmet>
            <div className="flex">
                <div className="w-1/2">
                    <div className="p-6">
                        <img src="/login-logo.png" className="w-56 mb-4" alt="" />
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
                                    placeholder={`${t("Email")}`}
                                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                                />
                            </div>
                            <Space h={'sm'} />
                            <div>
                                <TextInput
                                    size="sm"
                                    withAsterisk
                                    label={t("Password")}
                                    type="password"
                                    value={formik.values.password}
                                    name='password'
                                    error={formik.errors.password}
                                    onChange={formik.handleChange}
                                    placeholder={`${t("Password")}`}
                                    classNames={{ input: "ring-1 ring-slate-300 focus:ring-1 focus:ring-gray-800", label: 'mb-0' }}
                                />
                            </div>
                            <div className="mt-5">
                                <Button className="w-full" type="submit">
                                    {t("Login")}
                                </Button>
                            </div>
                        </form>
                        <div className="py-2 my-3 border-t border-t-gray-100">
                            <h1 className="text-xs font-bold text-center uppercase opacity-75">{t("Login with")}</h1>
                        </div>
                        <div className="flex justify-center gap-2 py-2">
                            <ActionIcon variant="filled" color="#0866ff" size={'lg'} aria-label="Settings">
                                <IconBrandFacebookFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <ActionIcon variant="filled" color="#dc0f0f" size={'lg'} aria-label="Settings">
                                <IconBrandGoogleFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <ActionIcon variant="filled" color="#3fa6e0" size={'lg'} aria-label="Settings">
                                <IconBrandTelegram style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex items-center justify-center bg-[#313131] h-[410px]">
                        <Carousel
                            withIndicators
                            withControls={false}
                            height={200}
                            slideSize="100%"
                            slideGap="md"
                            loop
                            align="start"
                            slidesToScroll={1}
                        >
                            <Carousel.Slide>
                                <div className="p-3 text-center">
                                    <div className="flex justify-center mb-3">
                                        <Icon icon={'clarity:help-outline-badged'} className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-white">About Raabit</h3>
                                    <p className="font-light text-white">{t("Raabit is website refers to a site for Enterprise Resource Planning software solutions")}</p>
                                </div>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <p>{t("Raabit is website refers to a site for Enterprise Resource Planning software solutions")}</p>
                            </Carousel.Slide>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}