import Script from "next/script";

export default function Head() {
    return (
        <>
            {/* Google Tag source script */}
            <Script
                id="google-gtag-src"
                src="https://www.googletagmanager.com/gtag/js?id=AW-11196953099"
                strategy="afterInteractive"
            />

            {/* Google Tag initialization */}
            <Script
                id="google-gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11196953099');
                `,
                }}
            />

            {/* ⭐ Google Ads Conversion Event Snippet */}
            <Script
                id="google-ads-conversion-report"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    function gtag_report_conversion(url) {
                    var callback = function () {
                        if (typeof(url) !== 'undefined') {
                        window.location = url;
                        }
                    };
                    gtag('event', 'conversion', {
                        'send_to': 'AW-11196953099/TYw3CLeljJwaEIvkj9sp',
                        'event_callback': callback
                    });
                    return false;
                    }
                `,
                }}
            />
        </>
    );
}
