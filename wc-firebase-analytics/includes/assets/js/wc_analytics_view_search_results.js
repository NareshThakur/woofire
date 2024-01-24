//To set firebase analytics events
import { analytics, logEvent } from "./fbConfig.js";
(function ($) {
    'use strict';
    if (typeof window.firebaseSearchresult !== 'undefined') {

        //Firebase Analytics to log event for add_to_cart
        logEvent(analytics, 'view_search_results', {
            search_term: firebaseSearchresult.search_result,
            //item_location_id: firebaseAddtocart.product_id

        });

    }
})(jQuery);

