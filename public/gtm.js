// Dynamically execute the GTM script in the head
const GTM_ID = 'GTM-WMNJ6HG';
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    j.nonce =
      d.querySelector('[nonce]').nonce ||
      d.querySelector('[nonce]').getAttribute('nonce');
    j.setAttribute(
      'data-dsn',
      d.querySelector('[nonce]').nonce ||
        d.querySelector('[nonce]').getAttribute('nonce'),
    );
    j.id = 'gtm-script';
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', GTM_ID);

  // GTM noscript for the body as a fallback
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);