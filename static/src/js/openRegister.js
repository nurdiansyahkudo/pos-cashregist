import { patch } from 'web.utils';
import { useListener } from 'web.custom_hooks';
import { Registries } from '@web/core/registry';

// PosPaymentScreen ada di module point_of_sale. Kita extend method printReceipt
const PosPaymentScreen = (await import('point_of_sale.PaymentScreen')).PaymentScreen;

patch(PosPaymentScreen.prototype, 'pos_cashdrawer_open', {
    async printReceipt() {
        // Panggil method asli printReceipt dulu
        await this._super(...arguments);

        // Cek apakah metode pembayaran yang terakhir adalah cash
        const paymentLines = this.currentOrder.paymentLines.models;
        if (paymentLines.length) {
            const lastPayment = paymentLines[paymentLines.length - 1];
            if (lastPayment.payment_method && lastPayment.payment_method.is_cash_count) {
                // Ini method bawaan POS untuk buka cashdrawer via printer
                this.env.pos.proxy.printer.open_cashbox();
                console.log('Cash drawer should be opened');
            }
        }
    }
});

Registries.Component.extend(PosPaymentScreen, {});
