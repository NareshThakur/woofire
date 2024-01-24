//To set firebase analytics events
import { analytics, logEvent } from "./fbConfig.js";
console.log('pur');
(function ($) {
    'use strict';
    console.log(window.firebaseEcompurchase);
    if (typeof window.firebaseEcompurchase !== 'undefined') {

        logEvent(analytics, 'purchase', {
            coupon: firebaseEcompurchase.order_coupon,
            transaction_id: firebaseEcompurchase.order_transaction_id,
            value: firebaseEcompurchase.order_value,
            shipping: firebaseEcompurchase.order_shipping,
            tax: firebaseEcompurchase.order_tax,
            currency: firebaseEcompurchase.order_currency,
            number_of_items: firebaseEcompurchase.order_total,
            payment_method: firebaseEcompurchase.payment_method,
            user_id: firebaseEcompurchase.user_id,
            user_email: firebaseEcompurchase.user_email

        });

    }
})(jQuery);

