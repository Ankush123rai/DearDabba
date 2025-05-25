import { useState, useEffect } from "react";
import { SiPhonepe } from "react-icons/si";
import Breadcrumb from "../components/Breadcrumb";
import CashbackCard from "../components/CashbackCard";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import cuponImage from "../assets/images/coupon.png";

const originalOffers = Array(9).fill({
  icon: <SiPhonepe className="text-xl text-purple-700" />,
  title: "EXTRA ₹40 Cashback",
  description:
    "Pay using PhonePe wallet to get an additional flat ₹40 cashback on transactions above ₹399",
});

const CouponPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const filteredOffers = originalOffers.filter((offer) =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm && filteredOffers.length === 0) {
      setStatusMessage("No matching cashback offers found.");
    } else {
      setStatusMessage("");
    }
  }, [searchTerm, filteredOffers]);

  const handleCardClick = (title: string) => {
    setSearchTerm(title);
    setSelectedOffer(title);
  };

  const handleApply = () => {
    if (filteredOffers.length > 0 && searchTerm) {
      setModalOpen(true);
    } else {
      setStatusMessage("Cannot apply. No matching cashback offer.");
    }
  };

  return (
    <div>
      <Breadcrumb
        paths={[
          { label: "Home" },
          { label: "Coupons" },
          { label: "Cashback" },
          { label: "Cashback Offers", isActive: true },
        ]}
      />
      <div className="container mx-auto mt-4">
        <div className="min-h-screen p-6 mx-6">
          <div className="flex bg-[#F9F9F9] border border-gray-300 rounded-lg justify-between items-center mb-2 px-4 py-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for cashback offers"
              className="w-full p-2 bg-transparent focus:outline-none"
            />
            <span
              className="text-green-500 font-bold underline cursor-pointer"
              onClick={handleApply}
            >
              Apply
            </span>
          </div>

          {statusMessage && (
            <div className="text-red-500 text-sm mt-1 ml-2">{statusMessage}</div>
          )}

          <div className="flex items-center my-10">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-xl md:text-2xl font-bold text-[#415227] whitespace-nowrap">
              Payment offers
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {filteredOffers.map((offer, index) => (
              <CashbackCard
                key={index}
                {...offer}
                onClick={() => handleCardClick(offer.title)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <img src={cuponImage} alt="Coupon" className="w-[300px]  mx-auto mb-4" />
        <p className="text-lg text-green-500 font-semibold text-center"> yeeaayy! Coupon applied successfully</p>
        <p className="text-green-500 font-semibold text-center">You have saved ₹50</p>
      </Modal>
    </div>
  );
};

export default CouponPage;
