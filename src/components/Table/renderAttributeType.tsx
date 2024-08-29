import { Icon } from "@iconify/react";
import { Group, SelectProps } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const customize_class = "flex items-center justify-center w-8 h-8 bg-white rounded-md"
const customize_icon_class = "w-5 opacity-80 h-5"

const iconProps = {
    stroke: 1.5,
    color: 'currentColor',
    opacity: 0.6,
    size: 18,
};
export const icons: Record<string, React.ReactNode> = {
    dropdown: <div className={customize_class}><Icon icon={`tdesign:component-dropdown`} className={customize_icon_class} /></div>,
    text_input: <div className={customize_class}><Icon icon={`radix-icons:input`} className={customize_icon_class} /></div>,
    checkbox: <div className={customize_class}><Icon icon={`ion:checkbox-outline`} className={customize_icon_class} /></div>,
    color: <div className={customize_class}><Icon icon={`ic:outline-color-lens`} className={customize_icon_class} /></div>,
    radio: <div className={customize_class}><Icon icon={`ri:radio-button-line`} className={customize_icon_class} /></div>,
}
export const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
    <Group flex="1" gap="xs">
        {icons[option.value]}
        {option.label}
        {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
    </Group>
);
export const renderAttributeType = (type: "radio" | "dropdown" | "color" | "checkbox" | "text_input" | any) => {

    switch (type) {
        case "radio":
            return <div title={type}>{icons.radio}</div>
        case "dropdown":
            return <div title={type}>{icons.dropdown}</div>
        case "text_input":
            return <div title={type}>{icons.text_input}</div>
        case "color":
            return <div title={type}>{icons.color}</div>
        case "checkbox":
            return <div title={type}>{icons.checkbox}</div>
    }

}
