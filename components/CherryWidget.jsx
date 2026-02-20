'use client';

import Script from 'next/script';

const CherryWidget = () => (
  <section className="w-full">
    {/* Step 1: inline script sets up the _hw queue and enqueues the init call */}
    <Script
      id="cherry-widget-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (w, d, s, o, f, js, fjs) {
            w[o] = w[o] || function () {
              (w[o].q = w[o].q || []).push(arguments);
            };
            (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
          })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");

          _hw("init", {
            debug: false,
            variables: {
              slug: "rhij-aesthetics-llc",
              name: "Rhij Aesthetics LLC",
              images: [6],
              customLogo: "",
              defaultPurchaseAmount: 1000,
              customImage: "",
              imageCategory: "other",
              language: "en"
            },
            styles: {
              primaryColor: "#e091c8",
              secondaryColor: "#e091c810",
              fontFamily: "Open Sans",
              headerFontFamily: "Open Sans"
            }
          }, ["hero", "calculator", "howitworks", "faq"]);
        `,
      }}
    />

    <div id="all" />
    <div id="hero" />
    <div id="calculator" />
    <div id="howitworks" />
    <div id="testimony" />
    <div id="faq" />
  </section>
);

export default CherryWidget;
