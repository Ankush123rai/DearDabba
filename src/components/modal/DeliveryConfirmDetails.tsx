import React, { useState } from "react";

type EditAddressProps = {
  onClose: () => void;
};

const DeliveryConfirmDetails = ({ onClose }: EditAddressProps) => {
  const [selectedAddress, setSelectedAddress] = useState("office");

  return (
    <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 relative">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">Home Address</h2>
      <p className="text-sm text-gray-500 mb-4">
        Adding your proper delivery address will help our delivery guy in easy
        delivery
      </p>

      {/* Address Textarea */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address<span className="text-red-500">*</span>
        </label>
        <div className="bg-gray-100 rounded-xl px-4 py-3 text-base font-medium text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna...
        </div>
      </div>

      {/* Address Options */}
      <div className="space-y-4 mb-6">
        {/* Other Address */}
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="addressType"
            value="other"
            checked={selectedAddress === "other"}
            onChange={() => setSelectedAddress("other")}
            className="mt-1 h-4 w-4 text-green-500 border-gray-300"
          />
          <div>
            <p className="font-semibold text-gray-800">Other Address</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </label>

        {/* Office Address */}
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="radio"
            name="addressType"
            value="office"
            checked={selectedAddress === "office"}
            onChange={() => setSelectedAddress("office")}
            className="mt-1 h-4 w-4 text-green-500 border-gray-300"
          />
          <div>
            <p className="font-semibold text-gray-800">Office Address</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </label>
      </div>

      <button
        onClick={onClose}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl"
      >
        Save Changes
      </button>
    </div>
  );
};

export default DeliveryConfirmDetails;
