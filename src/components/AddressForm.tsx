import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddressFormData {
  shopPlotNumber: string;
  floor: string;
  buildingName: string;
  landmark: string;
  pincode: string;
}

const AddressForm = () => {
  const [formData, setFormData] = useState<AddressFormData>({
    shopPlotNumber: 'D-2',
    floor: 'D-2',
    buildingName: '',
    landmark: '',
    pincode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/privacy-policy')
  };

  return (
    <div
      className="bg-white rounded-2xl w-full max-w-4xl p-4 md:p-5"
      style={{
        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <h1 className="text-xl sm:text-xl font-semibold text-[#2A334A] tracking-tight capitalize">
            Enter address
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="sm:w-1/4 w-full">
              <div className="bg-[#F9F9F9] rounded-2xl px-4 py-3 sm:px-5">
                <label className="block">
                  <span className="text-[#666666] block text-sm sm:text-base">Shop/Plot number*</span>
                  <input
                    type="text"
                    name="shopPlotNumber"
                    value={formData.shopPlotNumber}
                    onChange={handleChange}
                    className="w-full text-lg bg-transparent border-none focus:outline-none text-[#121212]"
                  />
                </label>
              </div>
            </div>

            <div className="sm:w-1/4 w-full">
              <div className="bg-[#F9F9F9] rounded-2xl px-4 py-3 sm:px-5">
                <label className="block">
                  <span className="text-[#666666] block text-sm sm:text-base">Floor</span>
                  <input
                    type="text"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    className="w-full text-lg bg-transparent border-none focus:outline-none text-[#121212]"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F9F9] rounded-2xl px-4 py-3 sm:px-5">
            <label className="block">
              <span className="text-[#666666] block text-sm sm:text-base">Building/ Mall/ Complex name*</span>
              <input
                type="text"
                name="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                className="w-full text-lg bg-transparent border-none focus:outline-none text-[#121212]"
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="bg-[#F9F9F9] rounded-2xl px-4 py-3 sm:px-5">
                <label className="block">
                  <span className="text-[#666666] block text-sm sm:text-base">Landmark*</span>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    className="w-full text-lg bg-transparent border-none focus:outline-none text-[#121212]"
                  />
                </label>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-[#F9F9F9] rounded-2xl px-4 py-3 sm:px-5">
                <label className="block">
                  <span className="text-[#666666] block text-sm sm:text-base">Pincode*</span>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full text-lg bg-transparent border-none focus:outline-none text-[#121212]"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 sm:mt-8">
            <button
              type="submit"
              className="bg-[#5BB834] w-1/2 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base font-medium tracking-tight capitalize hover:bg-[#4da02c] transition-colors"
            >
              Save & Proceed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
