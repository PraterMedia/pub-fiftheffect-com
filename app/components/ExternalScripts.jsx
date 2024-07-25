import {useEffect} from 'react';

export const Gtm = () => {
  let loaded = false;
  useEffect(() => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = '/gtm.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export const DriftChat = () => {
  let loaded = false;
  useEffect(() => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = '/driftchat.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export const Accessibe = () => {
  let loaded = false;
  useEffect(() => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
    script.onload = function () {
      acsbJS.init({
        statementLink: '',
        footerHtml: '',
        hideMobile: true,
        hideTrigger: true,
        disableBgProcess: false,
        language: 'en',
        position: 'right',
        leadColor: '#3693ff',
        triggerColor: '#3693ff',
        triggerRadius: '50%',
        triggerPositionX: 'right',
        triggerPositionY: 'bottom',
        triggerIcon: 'people',
        triggerSize: 'medium',
        triggerOffsetX: 20,
        triggerOffsetY: 20,
        mobile: {
          triggerSize: 'small',
          triggerPositionX: 'right',
          triggerPositionY: 'bottom',
          triggerOffsetX: 10,
          triggerOffsetY: 10,
          triggerRadius: '50%',
        },
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
