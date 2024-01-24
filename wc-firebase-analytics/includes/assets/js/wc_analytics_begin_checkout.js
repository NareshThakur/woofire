//To set firebase analytics events
import { analytics, logEvent } from "./fbConfig.js";
(function ($) {
    'use strict';
    if (typeof window.firebaseBegincheckout !== 'undefined') {
        
        //Firebase Analytics to log event for add_to_cart
        logEvent(analytics, 'begin_checkout', {
            coupon: firebaseBegincheckout.check_coupon,
            currency: firebaseBegincheckout.check_currency,
            value: firebaseBegincheckout.check_value,
            number_of_items: firebaseBegincheckout.check_total,
            user_id: firebaseBegincheckout.user_id,
            user_email: firebaseBegincheckout.user_email

        });

        logEvent(analytics, 'add_payment_info', {
            value: firebaseBegincheckout.check_value,
            number_of_items: firebaseBegincheckout.check_total,
            payment_method: firebaseBegincheckout.payment_method,
            user_id: firebaseBegincheckout.user_id,
            user_email: firebaseBegincheckout.user_email
        });

    }
})(jQuery);

