odoo.define('pos_cashregist.openRegister', function (require) {
    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const { patch } = require("@web/core/utils/patch");

    patch(PaymentScreen.prototype, {
        async _finalizeValidation() {
            // Langsung cetak tanpa dialog konfirmasi
            if (this.env.pos.config.iface_print_via_proxy || this.env.pos.config.iface_print_auto) {
                this.printReceipt();
            }
            return await this._super(...arguments);
        },
    });
});
