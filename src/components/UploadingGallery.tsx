import ImageUploading from 'react-images-uploading';
import { Icon } from "@iconify/react";
import { Button } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type CompProps = {
    images: any[],
    onChange: (imageList: any, addUpdateIndex: any) => void,
    maxNumber?: number
}
function UploadingGallery({ images, onChange, maxNumber = 6 }: CompProps) {
    const { t } = useTranslation()
    return (
        <>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div {...dragProps} className={`border-2 overflow-hidden ${isDragging ? "border-gray-900 bg-gray-200" : "border-gray-200 bg-slate-50"} border-dashed rounded-lg p-4 py-6`}>
                        <div>
                            {imageList.length == 0 && <h3 className="text-lg font-extrabold text-center">{t("Drag & Drop on Upload")}</h3>}
                            {imageList.length == 0 && <p className="text-sm text-center opacity-70">{t("Easily upload product images by dragging and dropping them into the designated area for fast and efficient handling")}</p>}
                            <div className="flex justify-center my-2">
                                <Button
                                    classNames={{ label: "px-7" }}
                                    variant="light"
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    {t("Click or Drop here")}
                                </Button>
                            </div>
                            {imageList.length == 0 && <p className="text-sm text-center opacity-50"><strong>{t("Images Formats:")}</strong> JPG, PNG, BMB</p>}

                            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                                <AnimatePresence>
                                    {imageList.map((image, index) => (
                                        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} key={index} className="relative overflow-hidden transition-all duration-200 rounded-md group h-44">
                                            <img src={image['data_url']} alt="" className="object-cover w-full h-full" />
                                            <div className="absolute flex justify-center items-center gap-2 bg-gradient-to-t left-0 right-0 top-0 -bottom-72 group-hover:bottom-0 z-20 transition-all duration-200 from-[#00000017] group-hover:from-[#000] to-[#00000019]">
                                                <Button variant="white" onClick={() => onImageUpdate(index)}><Icon icon={'mynaui:edit-one'} className="w-5 h-5" /></Button>
                                                <Button variant="filled" color="red" onClick={() => onImageRemove(index)}><Icon className="w-5 h-5" icon={'solar:trash-bin-minimalistic-2-broken'} /></Button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                )}
            </ImageUploading>
        </>
    )
}

export default UploadingGallery