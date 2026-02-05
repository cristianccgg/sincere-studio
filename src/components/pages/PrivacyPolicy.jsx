import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mt-[90px] mb-[105px]">
      <div className="max-w-[1304px] mx-auto md:px-[20px] xl:px-0 ">
        {/* Title */}
        <h1 className="xl:text-[48px] text-[32px] font-bold leading-[100%]">
          Our Policies
        </h1>

        {/* Subtitle */}
        <h2 className="mt-[8px] xl:text-[36px] text-[24px] font-medium text-[#E85102]">
          Thank you for choosing us!
        </h2>

        {/* Body content */}
        <div className="mt-[52px] xl:text-[24px]  text-[18px] font-medium tracking-[2%] flex flex-col gap-6">
          {/* Welcome paragraph - justified */}
          <p className="text-justify">
            Welcome to Sincere Studio ("we," "our," or "us"). We are committed
            to protecting your personal data and respecting your privacy. This
            Privacy Policy explains how we collect, use, store, and protect your
            personal data when you visit our website sincerestudio.nl or engage
            with our software development services.
          </p>

          {/* Section 1 */}
          <div>
            <p>
              1. WHO WE ARE (THE DATA CONTROLLER) For the purposes of the GDPR,
              the data controller responsible for your personal data is: Sincere
              Studio [Insert Physical Address] [Insert City, Postal Code], The
              Netherlands KvK Number: [Insert Number] Email:
              privacy@sincerestudio.nl
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <p>
              2. THE DATA WE COLLECT We may collect and process different kinds
              of personal data about you, grouped as follows:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Identity Data: Name, username, or similar identifier.</li>
              <li>
                Contact Data: Billing address, email address, and telephone
                numbers.
              </li>
              <li>
                Technical Data: IP address, browser type, time zone setting, and
                operating system.
              </li>
              <li>
                Usage Data: Information about how you use our website and
                services.
              </li>
              <li>
                Marketing Data: Your preferences in receiving communication from
                us.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <p>
              3. LEGAL BASIS FOR PROCESSING We only use your personal data when
              the law allows us to. Most commonly, we rely on:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>
                Performance of a Contract: To fulfill our software development
                agreements.
              </li>
              <li>
                Legitimate Interests: For business management and improving our
                services.
              </li>
              <li>
                Legal Obligation: To comply with Dutch tax or regulatory laws.
              </li>
              <li>Consent: For specific marketing activities.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <p>4. HOW WE USE YOUR DATA</p>
            <ul className="list-disc pl-6 mt-1">
              <li>Registering new clients: Based on Contract Performance.</li>
              <li>
                Delivering software services: Based on Contract Performance.
              </li>
              <li>
                Website troubleshooting/security: Based on Legitimate Interests.
              </li>
              <li>Improving our website: Based on Legitimate Interests.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <p>
              5. DATA RETENTION We keep your data only as long as necessary. For
              example, under Dutch tax law, we are required to keep basic
              information about our customers (Contact, Identity, Financial, and
              Transaction Data) for 7 years after they cease being customers.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <p>
              6. YOUR LEGAL RIGHTS Under the GDPR, you have the following
              rights:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Access: Request a copy of the data we hold about you.</li>
              <li>Correction: Request correction of inaccurate data.</li>
              <li>Erasure: Request that we delete your data.</li>
              <li>
                Object/Restrict: Object to or limit the processing of your data.
              </li>
              <li>
                Portability: Request the transfer of your data to another party.
              </li>
            </ul>
            <p className="mt-1">
              To exercise these rights, please email us at
              privacy@sincerestudio.nl.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <p>
              7. COMPLAINTS You have the right to lodge a complaint with the
              Dutch Data Protection Authority (Autoriteit Persoonsgegevens) via
              www.autoriteitpersoonsgegevens.nl.
            </p>
          </div>

          {/* Copyright */}
          <p className="mt-4">
            (c) 2026 Sincere Studio. This document should be reviewed by legal
            counsel to ensure it meets your specific operational needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
