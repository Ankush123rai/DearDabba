
import cancelOrder from '../../assets/images/cancelOrder.png';

type CancelOrderProps = {
    setIsConfirmModalOpen: (isOpen: boolean) => void;
    onClose?: () => void;
}

const CancelOrder = ({ setIsConfirmModalOpen,onClose }: CancelOrderProps) => {

    const handleCancel = () => {
        setIsConfirmModalOpen(true);
        if (onClose) {
            onClose();
        }

    };



  return (
      <div className=" w-full max-w-4xl p-4  pb-[4rem] relative">
    
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center justify-center text-center md:w-1/2">
            <img
              src={cancelOrder}
              alt="Cancel"
              className="w-45 h-45"
            />
            <h2 className="text-xl font-bold text-green-700 mt-4">Cancel Order</h2>
            <p className="text-gray-500 mt-2 text-sm">
              As an exception, no cancellation charges will apply for this order
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white rounded-md md:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-green-800">Continue with cancellation</h3>
            <div className="text-gray-600 text-sm space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span>Order amount</span>
                <span>₹250</span>
              </div>
              <div className="flex justify-between">
                <span>Cancellation charges</span>
                <span>₹0.00</span>
              </div>
              <p className="text-xs text-gray-400 mt-[-6px]">waived off for you on this order</p>
              <div className="flex justify-between pt-2 font-semibold border-t text-green-800">
                <span>Total</span>
                <span>₹0.00</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleCancel}
               className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
                Cancel Order
              </button>
              <button className="bg-green-100 text-green-800 px-5 py-2 rounded-md hover:bg-green-200">
                Chats With Us
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CancelOrder;
