export type PrivacyPolicySection = {
    heading: string
    info: string
}

export const privacyPolicy = [
    {
        heading: "Information We Collect",
        info:   `<p>We collect the following personal information when you make a booking:</p>
                <ul>
                    <li>Full Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>ID or passport number (only required for trips)</li>
                </ul>
                <p>We <strong>DO NOT</strong> collect or store any credit card or banking details. Payments made via Payfast and EFT are processed securely through their respective platforms.`
    },{
        heading: 'How We Collect Your Data',
        info:   `<p>Data is collected directly from you when:</p>
                <ul>
                    <li>You submit a booking or contact form</li>
                    <li>You provide details for a trip</li>
                </ul>
                <p>This information is recorded and managed using Google Sheets, a secure tool provided by Google.</p>`
    },{
        heading: 'Third-Party Tools We Use',
        info:   `<p>We utilize the following platforms:</p>
                <ul>
                    <li>Google Sheets – for managing bookings and contact information</li>
                    <li>PayFast – for secure payment processing</li>
                    <li>Google Analytics – to understand website performance and user behavior (non-personal, anonymized data only)</li>
                </ul>`
    },{
        heading: 'Data Retention',
        info: `<p>In compliance with legal and administrative requirements, we retain all customer data for a minimum of 5 years. After this period, the data is permanently deleted from our records.</p>`
    },{
        heading: 'Who Has Access to Your Data',
        info:   `<ul>
                    <li><strong>Admin staff</strong> have access to all customer data for operational purposes.</li>
                    <li>Drivers are only given essential trip-related information, such as the name and contact details of passengers.</li>
                </ul>`
    },{
        heading: 'Data Sharing',
        info:   `<p>We do not sell, share, or disclose your personal information to any third parties for marketing or other commercial purposes.</p>`
    },{
        heading: 'Sensitive Information',
        info:   `<p>We <strong>DO NOT</strong> store credit card information.<p>
                <p>When necessary, we may request ID or passport numbers for specific trips. Any medical information you choose to share with us is only used for your safety and is not stored longer than needed for the duration of the trip.</p>`
    },{
        heading: 'Data Security',
        info:   `<p>Our website is secured using HTTPS encryption, ensuring that any data you provide is transmitted securely.</p>
                <p>Payments are processed through PayFast, a reputable and secure payment gateway.</p>`
    },{
        heading: 'Your Rights',
        info:   `<p>You have the right to:</p>
                <ul>
                    <li>Request a copy of your personal data</li>
                    <li>Correct any incorrect or outdated information</li>
                    <li>Request that your data be deleted after the 5-year legal period</li>
                </ul>
                <p>For any data-related requests, please contact us at [Insert Contact Email].</p>`
    },{
        heading: 'Changes to This Policy',
        info: `<p>We may update this Privacy Policy from time to time. The latest version will always be available on our website, with the “Last Updated” date shown at the top of the page.</p>`
    }
]