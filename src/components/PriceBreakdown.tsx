import React from 'react';

interface PriceBreakdownProps {
  subtotal: number;
  deliveryFee: number;
  discount: number;
  platformFee: number;
  taxes: number;
  tip?: number;
  distance: string;
  onTipChange?: (amount: number) => void;
  paymentMethod?: string;
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({
  subtotal,
  deliveryFee,
  discount,
  platformFee,
  taxes,
  tip = 0,
  distance,
  onTipChange,
  paymentMethod = 'Cash',
}) => {
  const total = subtotal + deliveryFee + platformFee + taxes + tip - discount;
  const savedAmount = discount > 0 ? discount : 10;

  return (
    <div className="w-full max-w-lg mx-auto bg-[rgba(91,184,52,0.18)] rounded-2xl p-3 md:p-6">
      <div className="">
        <div className='bg-white border border-[rgba(42,51,74,0.15)] rounded-3xl p-4 mb-4'>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
          <div className="flex justify-center items-center p-2 bg-[rgba(91,184,52,0.18)] rounded-xl w-full md:w-auto">
            <span className="text-lg font-medium text-[#267F00]">Payment type</span>
          </div>
          <div className="flex justify-center items-center p-2 bg-white rounded-xl w-full md:w-auto">
            <span className="text-lg font-medium text-[#267F00]">Tip</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-600">Pay using</span>
            <div className="w-4 h-4 border-t-2 border-r-2 border-[#2A334A] transform rotate-45"></div>
          </div>
          <div className="text-2xl font-medium">{paymentMethod}</div>
        </div>
        </div>

        <div className='bg-white border border-[rgba(42,51,74,0.15)] rounded-3xl p-4 mb-4'>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.20222 3.8916H30.0846C31.811 3.8916 33.2106 5.29118 33.2106 7.01765V30.7043C33.2106 32.8694 31.0628 34.3789 29.0257 33.6455L26.5846 32.7668C25.8219 32.4922 24.9823 32.5246 24.243 32.8573L20.4262 34.5748C19.6104 34.942 18.6764 34.942 17.8606 34.5748L14.0438 32.8573C13.3045 32.5246 12.4649 32.4922 11.7022 32.7668L9.26108 33.6455C7.22395 34.3789 5.07617 32.8694 5.07617 30.7043V7.01765C5.07617 5.29118 6.47575 3.8916 8.20222 3.8916ZM12.8913 10.5345C12.2439 10.5345 11.719 11.0593 11.719 11.7067C11.719 12.3542 12.2439 12.879 12.8913 12.879H19.1434C19.7908 12.879 20.3157 12.3542 20.3157 11.7067C20.3157 11.0593 19.7908 10.5345 19.1434 10.5345H12.8913ZM12.8913 16.7866C12.2439 16.7866 11.719 17.3114 11.719 17.9588C11.719 18.6063 12.2439 19.1311 12.8913 19.1311H25.3955C26.0429 19.1311 26.5678 18.6063 26.5678 17.9588C26.5678 17.3114 26.0429 16.7866 25.3955 16.7866H12.8913ZM12.8913 23.0387C12.2439 23.0387 11.719 23.5635 11.719 24.2109C11.719 24.8584 12.2439 25.3832 12.8913 25.3832H25.3955C26.0429 25.3832 26.5678 24.8584 26.5678 24.2109C26.5678 23.5635 26.0429 23.0387 25.3955 23.0387H12.8913Z" fill="#5BB834"/>
            </svg>
          </div>
          <div>
            <div className="text-gray-600">To pay ₹{total.toFixed(2)} ₹{total.toFixed(2)}</div>
            <div className="text-xl font-medium text-[#5BB834]">₹{savedAmount.toFixed(2)} saved on the total!</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="space-y-3">
            <div className="text-gray-600">Total Item</div>
            <div className="text-gray-600 underline">Delivery fee | {distance}</div>
            <div className="text-sm text-gray-600">Order above ₹250 to save ₹10</div>
            <div className="text-gray-600 underline">Extra discount for you</div>
          </div>
          <div className="text-right space-y-3">
            <div className="text-gray-600">₹{subtotal.toFixed(2)}</div>
            <div className="text-gray-600">₹{deliveryFee.toFixed(2)}</div>
            <div className="h-5"></div>
            <div className="text-[#5BB834]">-₹{discount.toFixed(2)}</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="space-y-3">
            <div className="text-gray-600">Delivery tip</div>
            <div className="text-gray-600 underline">Platform fee</div>
            <div className="text-gray-600 underline">GST & Restaurant charges</div>
          </div>
          <div className="text-right space-y-3">
            <div className="text-[#9747FF] cursor-pointer" onClick={() => onTipChange && onTipChange(10)}>
              {tip > 0 ? `₹${tip.toFixed(2)}` : 'Add tip'}
            </div>
            <div className="text-gray-600">₹{platformFee.toFixed(2)}</div>
            <div className="text-gray-600">₹{taxes.toFixed(2)}</div>
          </div>
        </div>

        <div className="border-t border-[rgba(42,51,74,0.15)] my-4"></div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-[#2A334A]">To Pay</div>
          <div className="text-xl font-semibold text-[#2A334A]">₹{total.toFixed(2)}</div>
        </div>
        </div>
      </div>

      <button className="w-full bg-[#5BB834] text-white text-2xl font-normal py-3 rounded-2xl hover:bg-[#4aa02c] transition-colors">
        Place Order ₹{total.toFixed(2)}
      </button>
    </div>
  );
};

export default PriceBreakdown;
