import React from 'react'

type EdiitDeliveryProps = {
    onClose?: () => void;
}

const EditDelivery = ({ onClose }: EdiitDeliveryProps) => {
  return (

      <div className="bg-white p-6 relative">
       
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Edits For Delivery</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value="Nupur Kadam"
            className="w-full bg-gray-100 rounded-xl px-4 py-3 text-base font-medium text-gray-900 outline-none"
            readOnly
          />
        </div>

        {/* Mobile Number Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile number<span className="text-red-500">*</span>
          </label>
          <div className="w-full bg-gray-100 rounded-xl px-4 py-3 text-base text-gray-900 flex gap-1">
            <span className="text-gray-800 font-medium">+91</span> | 
            <span className="text-blue-900 font-medium">9321150202</span>
          </div>
        </div>

        {/* Save Button */}
        <button
        onClick={onClose}
          className="w-full bg-[#5BB834] text-white font-semibold py-3 rounded-xl"
        >
          Save Changes
        </button>
      </div>

  )
}

export default EditDelivery
