import React, { useState } from "react";
import { Check } from "lucide-react";
import FirstLayout from "../components/FirstLayout";
import BrandLogo from "../components/BrandLogo";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <FirstLayout>
      <div className="flex justify-center mb-6 relative">
        <BrandLogo />
      </div>

      <h2 className="text-[#5BB834] text-center text-xl font-extrabold mb-6 uppercase">
        Dummy Draft
      </h2>

      <div className="text-gray-700 text-[19px] leading-7">
        <p className="mb-4">
          <p className="mb-2">1. Introduction</p>
          Welcome to [Company Name]. By joining our food delivery team, you
          agree to comply with the following terms and conditions. These
          guidelines ensure smooth operations and customer satisfaction.
        </p>
        <p className="mb-4">
          <p className="mb-2">2. Eligibility</p>
          All delivery partners must be at least 18 years old. <br />
          A valid driver’s license and necessary permits are required.
          <br />A smartphone with the company’s delivery app installed is
          mandatory.
        </p>
        <p className="mb-4">
          <p className="mb-2">3. Responsibilities</p>
          Deliver orders promptly and in good condition.
          <br />
          Follow hygiene and safety standards.
          <br /> Maintain professional behavior with customers and restaurant
          partners.
        </p>
        <p className="mb-4">
          <p className="mb-2">4. Payment & Incentives</p>
          Payment is processed weekly/monthly based on completed deliveries.
          <br />
          Incentives and bonuses may be offered based on performance.
        </p>
        <p className="mb-4">
          <p className="mb-2">5. Code of Conduct</p>
          No tampering with food or order packaging. Respectful communication
          with customers and vendors.
          <br /> No involvement in fraudulent activities.
        </p>
        <p className="mb-4">
          <p className="mb-2">6. Termination Policy</p>
          Violation of company policies may result in suspension or termination.
          <br />
          Consistently poor performance may lead to contract termination.
        </p>
        <p className="mb-4">
          <p className="mb-2">7. Liability & Insurance</p>
          The company is not liable for personal injuries or accidents.
          <br /> Delivery partners must ensure their vehicle is insured and
          roadworthy.
        </p>
        <p className="mb-4">
          <p className="mb-2">8. Amendments</p>
          The company reserves the right to update these terms at any time.
          <br />
          Continued participation implies acceptance of any changes.
        </p>
        <p>For further queries, contact [Support Email/Phone].</p>
      </div>

      <div className="flex items-center gap-4 my-10">
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-md border-2 cursor-pointer ${
            accepted ? "bg-[#5BB834] border-[#5BB834]" : "border-gray-300"
          }`}
          onClick={() => setAccepted(!accepted)}
        >
          {accepted && <Check className="text-white w-4 h-4" />}
        </div>
        <span className="text-lg text-gray-800">
          I Accept Above Terms & Conditions
        </span>
      </div>

      <div className="flex justify-center mb-6">
  {accepted ? (
    <Link
      to="/congratulation"
      className="w-1/2 py-2 rounded-lg text-white font-semibold bg-[#5BB834] hover:bg-[#4ea82d] text-center"
    >
      Proceed
    </Link>
  ) : (
    <span
      className="w-1/2 py-2 rounded-lg text-white font-semibold bg-gray-300 cursor-not-allowed text-center"
    >
      Proceed
    </span>
  )}
</div>
    </FirstLayout>
  );
};

export default TermsAndConditions;
