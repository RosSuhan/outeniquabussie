import Script from "next/script";

export default function Head() {
    return (
        <>
            <Script
                id="google-gtag-src"
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-11196953099"
            />

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
        </>
    )
}