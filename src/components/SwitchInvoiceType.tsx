import { Badge } from "@mantine/core";
import { useTranslation } from "react-i18next";

function SwitchInvoiceType({ invoice_type }: {
    invoice_type: 'proforma_invoice' | 'exit_voucher' | 'entry_voucher' | 'purchase_invoice' | 'delivery_slip'
}) {
    const { t } = useTranslation()
    switch (invoice_type) {
        case 'proforma_invoice':
            return <Badge color="grape" variant="outline">{t("Proforma invoice")}</Badge>

        case 'exit_voucher':
            return <Badge color="green" variant="outline">{t("Exit voucher")}</Badge>

        case 'entry_voucher':
            return <Badge color="indigo" variant="outline">{t("Entry voucher")}</Badge>

        case 'purchase_invoice':
            return <Badge color="cyan" variant="outline">{t("Purchase invoice")}</Badge>

        case 'delivery_slip':
            return <Badge color="teal" variant="outline">{t("Delivery slip")}</Badge>

        default:
            return <Badge>{t("Proforma invoice")}</Badge>
    }
}

export default SwitchInvoiceType