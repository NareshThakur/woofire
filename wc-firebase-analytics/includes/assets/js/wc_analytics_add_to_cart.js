//To set firebase analytics events
// const analytics = firebase.analytics();
import { analytics, logEvent } from "./fbConfig.js";

(function ($) {
    
    'use strict';
    if (typeof window.firebaseAddtocart !== 'undefined') {

        logEvent(analytics, 'add_to_cart', {
            item_id: firebaseAddtocart.product_id,
            quantity: firebaseAddtocart.product_qty,
            item_name: firebaseAddtocart.product_name,
            value: firebaseAddtocart.total,
            price: firebaseAddtocart.product_price,
            currency: firebaseAddtocart.currency,
            item_category: firebaseAddtocart.product_category,
            user_id: firebaseAddtocart.user_id,
            user_email: firebaseAddtocart.user_email

        });
        console.log('added to cart');
    }
})(jQuery);

