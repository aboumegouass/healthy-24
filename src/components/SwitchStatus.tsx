import { Button, Menu, Popover } from "@mantine/core";
import { t } from "i18next";
import { Icon } from "@iconify/react";

export const HandleSwitchStatus = ({
    status,
    status_id,
    onStatusChange,
}: {
    status: "pending" | "shipped" | "delivered" | "canceled";
    status_id: string | number;
    onStatusChange: (status: string, status_id: string | number) => void;
}) => {
    return (
        <Popover width={130} position="bottom" withArrow shadow="md">
            <Popover.Target>
                <SwitchStatus status_id={status_id} status={status} />
            </Popover.Target>
            <Popover.Dropdown>
                <Menu>
                    <Menu.Item onClick={() => onStatusChange('pending', status_id)}>
                        {t("Pending")}
                    </Menu.Item>
                    <Menu.Item onClick={() => onStatusChange('shipped', status_id)}>
                        {t("Shipped")}
                    </Menu.Item>
                    <Menu.Item onClick={() => onStatusChange('delivered', status_id)}>
                        {t("Delivered")}
                    </Menu.Item>
                    <Menu.Item onClick={() => onStatusChange('canceled', status_id)}>
                        {t("Canceled")}
                    </Menu.Item>
                </Menu>
            </Popover.Dropdown>
        </Popover>
    );
};

export const SwitchStatus = ({
    status,
    showMenu,
    status_id,
}: {
    status: "pending" | "shipped" | "delivered" | "canceled";
    showMenu?: (status_id: number | string) => void;
    status_id: number | string;
}) => {
    const buttonProps = {
        size: "xs",
        className: "rounded-lg",
        onClick: () => showMenu?.(status_id),
        rightSection: <Icon icon={`ph:caret-down`} />,
    };

    switch (status) {
        case "pending":
            return (
                <Button {...buttonProps} variant="outline">
                    {t("Pending")}
                </Button>
            );
        case "shipped":
            return (
                <Button {...buttonProps} variant="outline" color="teal">
                    {t("Shipped")}
                </Button>
            );
        case "delivered":
            return (
                <Button {...buttonProps} color="green">
                    {t("Delivered")}
                </Button>
            );
        case "canceled":
            return (
                <Button {...buttonProps} color="red">
                    {t("Canceled")}
                </Button>
            );
        default:
            return (
                <Button {...buttonProps} variant="outline">
                    {t("Pending")}
                </Button>
            );
    }
};
