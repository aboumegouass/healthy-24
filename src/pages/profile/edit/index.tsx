import { Helmet } from "react-helmet";
import { t } from "i18next";
import HeaderTitle from "../../../components/HeaderTitle";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { Button, Space, Textarea, TextInput } from "@mantine/core";
import { Icon } from "@iconify/react";

export default function Home() {

    const [images, setImages] = useState([
        {
            data_url: 'data:image/jpeg;base64,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'
        }
    ])
    const onChange = async (imageList: any) => {
        setImages(imageList)
    }
    const maxNumber = 6
    return (
        <>
            <Helmet>
                <title>{t("Edit Profile")} | Healthy 24</title>
            </Helmet>
            <div className="bg-white border border-t-0 border-gray-300">
                <div className="max-w-4xl mx-auto">
                    <div className='overflow-hidden max-sm:mx-2 border my-2 p-4 border-gray-200' style={{ borderRadius: 12 }}>
                        <HeaderTitle
                            size='md'
                            bordered={false}
                            uppercase
                            title="Profile Description"
                        />
                        <p className="text-[#848FAC] mb-4">{t("Your profile will be displayed publicly so be careful what you share")}</p>
                        <HeaderTitle
                            size='xs'
                            bordered={false}
                            uppercase
                            title="Cover"
                        />
                        <img className="w-full object-cover h-44" style={{ borderRadius: 10 }} src="https://grants.gettyimages.com/images/grants/GettyImages-1229275252.png" alt="" />
                        <Space h={'md'} />
                        <HeaderTitle
                            size='xs'
                            bordered={false}
                            uppercase
                            title="Profile picture"
                        />
                        <ImageUploading
                            multiple
                            // @ts-ignore
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpdate,
                                dragProps,
                            }) => (
                                <>
                                    <div {...dragProps}>
                                        {imageList.map((image, index) => (
                                            <div key={index} className="relative items-center gap-2 flex">
                                                <img src={image['data_url']} alt="" style={{ borderRadius: 100 }} className="object-cover w-14 h-14" />
                                                <Button
                                                    size="xs"
                                                    className="bg-[#192252] hover:bg-[#121735]"
                                                    variant="filled"
                                                    onClick={() => onImageUpdate(index)}
                                                >
                                                    {t("Change Photo")}
                                                </Button>
                                                <Button
                                                    size="xs"
                                                    className="text-[#192252]"
                                                    variant="white"
                                                    onClick={() => onImageUpdate(index)}
                                                >
                                                    {t("Remove")}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </ImageUploading>
                        <Space h={'md'} />
                        <div>
                            <TextInput
                                label={t("Full Name")}
                                placeholder={t("Inpute your Fullname here")}
                                classNames={{ label: 'font-semibold mb-2 text-sm text-[#192252]' }}
                            />
                            <Space h={'lg'} />
                            <TextInput
                                label={t("Speciality")}
                                placeholder={t("Inpute your speciality here")}
                                classNames={{ label: 'font-semibold mb-2 text-sm text-[#192252]' }}
                            />
                            <Space h={'lg'} />
                            <Textarea
                                label={t("Profile Desciption")}
                                rows={10}
                                placeholder={t("Inpute your Profile Desciption here")}
                                classNames={{ label: 'font-semibold mb-2 text-sm text-[#192252]' }}
                            />
                        </div>
                        <Space h={'md'} />
                        <div className="flex items-center gap-2 justify-end">
                            <Button
                                size="xs"
                                className="text-[#192252]"
                                variant="white"
                            >
                                {t("Cancel")}
                            </Button>
                            <Button
                                size="xs"
                                className="bg-[#192252] hover:bg-[#121735]"
                                variant="filled"
                            >
                                {t("Save Changes")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}