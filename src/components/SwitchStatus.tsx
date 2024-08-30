import { Badge, Button } from "@mantine/core";
import { t } from "i18next";

export const SwitchStatus = ({
    status,
}: {
    status: "pending" | "success" | "canceled";
}) => {
    const buttonProps = {
        size: "md",
        className: "rounded-lg py-2",
    };

    switch (status) {
        case "pending":
            return (
                <Badge {...buttonProps} color="yellow" variant="outline">
                    {t("Pending")}
                </Badge>
            )
        case "success":
            return (
                <Badge {...buttonProps} color="green">
                    {t("Success")}
                </Badge>
            );
        case "canceled":
            return (
                <Badge {...buttonProps} color="red">
                    {t("Canceled")}
                </Badge>
            );
        default:
            return (
                <Button {...buttonProps} variant="outline">
                    {t("Pending")}
                </Button>
            );
    }
};
