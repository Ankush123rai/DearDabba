import React, { useEffect, useState, useRef } from "react";
import PriceBreakdown from "../components/PriceBreakdown";
import PaymentOptions from "../components/PaymentOptions";
import OrderItem from "../components/OrderItem";
import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import Footer from "../components/Footer";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      restaurantName: "Rams Kitchen",
      itemName: "Aloo Tiki",
      price: 150,
      quantity: 1,
      isVeg: true,
    },
    {
      id: 2,
      restaurantName: "Lunch Box",
      itemName: "Fish Masala",
      price: 150,
      quantity: 1,
      isVeg: false,
    },
    {
      id: 3,
      restaurantName: "Food Mood",
      itemName: "Samosa",
      price: 150,
      quantity: 1,
      isVeg: true,
    },
  ]);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locations = [
    "Posh Complex, Hatkesh",
    "New City Center, Mira Road",
    "High Street Mall, Thane",
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [placeOrder, setPlaceOrder] = useState(false);
  const [tipAmount, setTipAmount] = useState(10);

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 10;
  const deliveryFee = 50;
  const platformFee = 10;
  const taxes = 48.75;

  return (
    <>
    <div className="mx-4 md:mx-8">
      <Breadcrumb
        paths={[
          { label: "Home" },
          { label: "Search" },
          { label: "Restaurants", isActive: true },
        ]}
        onBack={() => navigate(-1)}
      />

      <div className="flex justify-between items-center mt-4">
        <div
          className="flex items-start sm:items-center gap-4 sm:gap-[30px]"
          ref={dropdownRef}
        >
          <div className="flex flex-col justify-end items-start gap-1.5">
            <h1 className="text-[#415227] font-semibold text-[18px] sm:text-[22px] lg:text-[27px] leading-tight capitalize font-poppins">
              Delivery At Home
            </h1>

            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <p className="text-[#415227] font-normal text-[13px] sm:text-[18px] leading-[24px] capitalize font-poppins truncate max-w-[250px] sm:max-w-[300px]">
                  {selectedLocation.length > 30
                    ? selectedLocation.slice(0, 30) + "..."
                    : selectedLocation}
                </p>
                <FaChevronDown className="text-[#415227] text-[16px]" />
              </div>

              {open && (
                <div className="absolute z-10 mt-2 w-max bg-white border border-gray-200 rounded shadow-md p-2">
                  {locations.map((loc, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#415227]"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-[24px] h-[24px] relative">
          <IoShareSocial className="text-[#415227] opacity-40 w-full h-full" />
        </div>
      </div>

      <div className=" p-4 flex gap-4 justify-between rounded-lg mt-4">
        <div>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <OrderItem
                key={item.id}
                restaurantName={item.restaurantName}
                itemName={item.itemName}
                price={150}
                isVeg={item.isVeg}
                onQuantityChange={(qty) =>
                  console.log("Quantity changed to:", qty)
                }
                onCutleryChange={(noCutlery) =>
                  console.log("Cutlery preference:", noCutlery)
                }
              />
            ))}
          </div>

          <button className="w-full py-2 border border-gray-300 rounded-lg mt-4 flex items-center justify-center">
            View All Coupons
          </button>
        </div>

        {placeOrder ? (
          <PaymentOptions />
        ) : (
          <PriceBreakdown
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            discount={discount}
            platformFee={platformFee}
            taxes={taxes}
            tip={tipAmount}
            distance="1.2kms"
            onTipChange={setTipAmount}
            setPlaceOrder={setPlaceOrder}
          />
        )}
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default Cart;
