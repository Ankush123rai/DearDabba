import mapImage from "../assets/images/map.png";
import location from "../assets/images/location.png";
import { useState } from "react";
import AddressForm from "./AddressForm";

const LocationPopup = () => {
  const [enterManually, setEnterManually] = useState(false);
  return (
    <div className="relative mt-[-12rem] z-10 w-full h-[82vh]">
      <img src={mapImage} alt="Map" className="w-full h-full object-cover" />

      {enterManually ? (
        <AddressForm />
      ) : (
        <div
          className="absolute max-w-6xl bg-transparent"
          style={{
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="  rounded-[16px] ">
            <div className="bg-[#5BB834] text-white w-1/2 text-center py-3 rounded-xl shadow mb-4 inline-block">
              Your Address
            </div>
            <div className="bg-white shadow-md rounded-t-2xl mt-4  p-6 w-[400px]">
              <h2 className="text-sm text-gray-500 mb-3">
                Add delivery location
              </h2>

              <div className="flex items-start mb-4">
                <div className="text-[#5BB834] mr-2 w-20 h-10">
                  <img src={location} alt="Location" className="w-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mumbai</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setEnterManually(true)}
                  className="bg-[#5BB8342E] text-[#5BB834] px-4 py-2 font-semibold rounded-md w-[48%]"
                >
                  Enter Manually
                </button>
                <button className="bg-[#5BB834] font-semibold text-white px-4 py-2 rounded-md w-[48%]">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPopup;
