import React from 'react';

const FoodOrderApp: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-start p-0 gap-[54px] w-[1120px] h-[1187px] absolute left-[60px] top-[225px]">
      {/* Left Column - Food Items */}
      <div className="flex flex-col justify-center items-center p-0 gap-[24px] w-[436px] h-[734.76px]">
      
       

        {/* Coupons Section */}
       
      </div>

      {/* Right Column - Order Summary */}
      <div className="w-[630px] h-[1187px] bg-[rgba(91,184,52,0.18)] rounded-[16px] relative">
        {/* Payment Card */}
        <div className="absolute w-[558.35px] h-[391px] left-[calc(50%-279.175px+0.17px)] top-[40px] bg-white border border-[rgba(42,51,74,0.15)] rounded-[25.02px]">
          {/* Payment Type */}
          <div className="absolute w-[503.61px] h-[50.05px] left-[calc(50%-251.805px-0.17px)] top-[40.66px] flex flex-row justify-center items-center p-0 gap-[226.78px]">
            <div className="flex flex-col justify-center items-center p-[7.82px_12.51px] gap-[15.64px] w-[187.68px] h-[50.05px] bg-[rgba(91,184,52,0.18)] rounded-[12.51px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[12.51px] w-[151px] h-[33px]">
                <div className="w-[151px] h-[33px] font-poppins font-normal text-[21.9px] leading-[33px] flex items-center text-center tracking-[-0.5px] capitalize text-[#267F00]">
                  Payment type
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-[7.82px_12.51px] gap-[15.64px] w-[78.2px] h-[50.05px] bg-[rgba(255,255,255,0.5)] rounded-[12.51px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[12.51px] w-[32px] h-[33px]">
                <div className="w-[32px] h-[33px] font-poppins font-normal text-[21.9px] leading-[33px] flex items-center text-center tracking-[-0.5px] capitalize text-[#267F00]">
                  tip
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="absolute w-[495.79px] h-[75px] left-[calc(50%-247.895px-0.96px)] top-[calc(50%-37.5px-35.47px)] flex flex-col justify-center items-start p-0">
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[137.63px] h-[33px]">
              <div className="w-[114.17px] h-[33px] font-poppins font-normal text-[21.9px] leading-[33px] flex items-center text-[#666666]">
                Pay using
              </div>
              <div className="w-[18.77px] h-[9.38px] border-t-2 border-r-2 border-[#2A334A]"></div>
            </div>
            <div className="w-[495.79px] h-[42px] font-poppins font-medium text-[28.15px] leading-[42px] text-[#121212]">
              Cash
            </div>
          </div>

          {/* To Pay Section */}
          <div className="absolute w-[489.23px] h-[75px] left-[calc(50%-244.615px+0px)] top-[calc(50%-37.5px-239.14px)] flex flex-row justify-center items-center p-0 gap-[23.45px]">
            <div className="w-[37.51px] h-[37.51px] relative">
              <div className="absolute left-[12.5%] right-[12.5%] top-[8.33%] bottom-[9.14%] bg-[#5BB834]"></div>
            </div>
            <div className="flex flex-col justify-center items-start p-0 w-[428.27px] h-[75px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[378.25px] h-[33px]">
                <div className="w-[378.25px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
                  To pay ₹250 ₹250
                </div>
              </div>
              <div className="w-[428.27px] h-[42px] font-poppins font-medium text-[28.13px] leading-[42px] text-[#5BB834]">
                ₹20 saved on the total!
              </div>
            </div>
          </div>

          <div className="absolute w-[495.54px] h-0 left-[calc(50%-247.77px+0.03px)] top-[125.82px] border-t border-[rgba(42,51,74,0.15)]"></div>

          {/* Order Details */}
          <div className="absolute w-[331.36px] h-[159.82px] left-[28.13px] top-[151.61px] flex flex-col justify-center items-start p-0 gap-[10.94px]">
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
              <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
                Total Item
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
              <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center underline text-[#666666]">
                Delivery fee | 1.2kms
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[331.36px] h-[28px]">
              <div className="w-[331.36px] h-[28px] font-poppins font-light text-[18.76px] leading-[28px] flex items-center text-[#666666]">
                Order above ₹250 to save ₹10
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
              <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center underline text-[#666666]">
                Extra discount for you
              </div>
            </div>
          </div>

          {/* Prices */}
          <div className="absolute w-[85.97px] h-[159.61px] left-[443.9px] top-[151.61px]">
            <div className="absolute w-[75.03px] h-[33px] left-[450.15px] top-[151.61px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
              ₹250
            </div>
            <div className="absolute w-[75.03px] h-[33px] left-[447.03px] top-[195.38px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
              ₹50.00
            </div>
            <div className="absolute w-[85.97px] h-[33px] left-[443.9px] top-[278.22px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#5BB834]">
              -₹10.00
            </div>
          </div>

          <div className="absolute w-[495.54px] h-0 left-[calc(50%-247.77px+0.03px)] top-[342.3px] border-t border-[rgba(42,51,74,0.15)]"></div>

          {/* Additional Charges */}
          <div className="absolute w-[497.04px] h-[120.88px] left-[31.26px] top-[367.31px] flex flex-row items-center p-0 gap-[81.28px]">
            <div className="flex flex-col justify-center items-start p-0 gap-[10.94px] w-[331.36px] h-[120.88px]">
              <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
                <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
                  Delivery tip
                </div>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
                <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center underline text-[#666666]">
                  Platform fee
                </div>
              </div>
              <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[314.17px] h-[33px]">
                <div className="w-[314.17px] h-[33px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center underline text-[#666666]">
                  GST & Restaurant charges
                </div>
              </div>
            </div>
            <div className="w-[84.4px] h-[120.53px] relative">
              <div className="absolute w-[84.4px] h-[33px] left-[412.64px] top-[0.18px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#9747FF]">
                Add tip
              </div>
              <div className="absolute w-[75.03px] h-[33px] left-[418.89px] top-[43.94px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
                ₹10.00
              </div>
              <div className="absolute w-[75.03px] h-[33px] left-[420.45px] top-[87.71px] font-poppins font-normal text-[21.88px] leading-[33px] flex items-center text-[#666666]">
                ₹48.75
              </div>
            </div>
          </div>

          <div className="absolute w-[495.54px] h-0 left-[calc(50%-247.77px+0.03px)] top-[518.93px] border-t border-[rgba(42,51,74,0.15)]"></div>

          {/* Total */}
          <div className="absolute w-[500.17px] h-[33px] left-[calc(50%-250.085px+0.78px)] top-[543.93px] flex flex-row items-center p-0 gap-[190.69px]">
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[217.26px] h-[33px]">
              <div className="w-[217.26px] h-[33px] font-poppins font-semibold text-[21.88px] leading-[33px] flex items-center text-[#2A334A]">
                To Pay
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-0 gap-[4.69px] w-[81.28px] h-[33px]">
              <div className="w-[81.28px] h-[33px] font-poppins font-semibold text-[21.88px] leading-[33px] flex items-center text-center text-[#2A334A]">
                ₹250
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="absolute w-[558px] h-[70px] left-[36px] top-[1077px] flex flex-row justify-center items-center p-0 gap-[35px]">
          <button className="flex flex-col justify-center items-center p-[7.18px_11.48px] gap-[14.35px] w-[560px] h-[70px] bg-[#5BB834] rounded-[14px]">
            <div className="flex flex-row justify-center items-center p-0 gap-[17.5px] w-[233px] h-[31px]">
              <div className="w-[233px] h-[31px] font-poppins font-normal text-[28px] leading-[30px] flex items-center text-center tracking-[-0.46px] capitalize text-white">
                place order ₹250
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodOrderApp;