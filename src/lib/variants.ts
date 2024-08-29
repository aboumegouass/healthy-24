import { randomId } from "@mantine/hooks";

export const attributeData = [
    {
        key: 1,
        name: "Attribute #1",
        values: ["Attr #1 Option 1", "Attr #1 Option 2", "Attr #1 Option 3", "Attr #1 Option 4"],
        type: "radio"
    },
    {
        key: 2,
        name: "Attribute #2",
        values: ["Attr #2 Option 1", "Attr #2 Option 2", "Attr #2 Option 3", "Attr #2 Option 4"],
        type: "checkbox"
    },
    {
        key: 3,
        name: "Attribute #3",
        values: ["Attr #3 Option 1"],
        type: "text_input"
    },
    {
        key: 4,
        name: "Attribute #4",
        values: ["Attr #4 Option 1", "Attr #4 Option 2", "Attr #4 Option 3", "Attr #4 Option 4"],
        type: "dropdown"
    },
    {
        key: 5,
        name: "Attribute #5",
        values: ["#179916", "#1087f1", "#28ff00", "#765551"],
        type: "color"
    },
]

export const variantsData = [
    {
        id: randomId(),
        name: ""
    }
]

