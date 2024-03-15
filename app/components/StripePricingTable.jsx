import React, {useEffect} from 'react';
export const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return React.createElement('stripe-pricing-table', {
    'pricing-table-id': 'prctbl_0O59nzq0lwo4Oj7U6hyfjN1y',
    'publishable-key': 'pk_live_v5buUwzt1n07wutmK99nmOuA',
  });
};
