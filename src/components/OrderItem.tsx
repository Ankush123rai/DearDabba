import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

interface OrderItemProps {
  restaurantName: string;
  itemName: string;
  price: number;
  isVeg?: boolean;
  initialQuantity?: number;
  onAddItem?: () => void;
  onAddInstruction?: () => void;
  onQuantityChange?: (newQuantity: number) => void;
  showCutleryOption?: boolean;
  onCutleryChange?: (noCutlery: boolean) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  restaurantName,
  itemName,
  price,
  isVeg = true,
  initialQuantity = 1,
  onAddItem,
  onAddInstruction,
  onQuantityChange,
  showCutleryOption = true,
  onCutleryChange,
}) => {
  const [quantity, setQuantity] = React.useState(initialQuantity);
  const [noCutlery, setNoCutlery] = React.useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    const clampedQuantity = Math.max(1, newQuantity);
    setQuantity(clampedQuantity);
    onQuantityChange?.(clampedQuantity);
  };

  const handleCutleryChange = () => {
    const newValue = !noCutlery;
    setNoCutlery(newValue);
    onCutleryChange?.(newValue);
  };

  const vegIndicatorColor = isVeg ? '#267F00' : '#FF0000';
  const vegIndicatorBorder = isVeg ? 'border-[#267F00]' : 'border-[#FF0000]';
  const vegIndicatorBg = isVeg ? 'bg-[#267F00]' : 'bg-[#FF0000]';

  return (
    <div className="w-full max-w-[420px] min-h-[190px] bg-white border border-[rgba(91,184,52,0.18)] rounded-[16px] p-3 mb-3">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex-1">
          <div className="text-[14px] text-[#2A334A]">{restaurantName}</div>
          <div className="flex items-center gap-2 mt-1">
            <div className={`flex items-center justify-center p-[3px] border-[2.5px] ${vegIndicatorBorder} rounded-[4px]`}>
              <div className={`w-[12px] h-[12px] ${vegIndicatorBg} rounded-full`}></div>
            </div>
            <div className="text-[22px] font-semibold text-[#415227]">{itemName}</div>
          </div>
          <div className="text-[14px] text-[#7D7D7D] mt-1">
            ₹{price.toFixed(2)}
          </div>
        </div>

        <div className="flex flex-col items-end">
        <div className="flex items-center gap-1 bg-[rgba(91,184,52,0.18)] rounded-[10px] px-2 py-1">
          <button 
            onClick={() => handleQuantityChange(quantity - 1)}
            className="w-7 h-7 flex items-center justify-center text-[#415227] opacity-40 hover:opacity-100"
          >
            <FaMinus size={12} />
          </button>
          <div className="text-[18px] text-[#415227] min-w-[20px] text-center">
            {quantity}
          </div>
          <button 
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-7 h-7 flex items-center justify-center text-[#415227] opacity-40 hover:opacity-100"
          >
            <FaPlus size={12} />
          </button>
        </div>
        <div className="mt-3 text-right text-[18px] text-[#415227]">
        ₹{(price * quantity).toFixed(2)}
      </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-2">
        <button 
          onClick={onAddItem}
          className="flex items-center gap-1 bg-[rgba(91,184,52,0.18)] border border-[#267F00] rounded-md px-3 py-[5px] text-[#267F00] text-xs hover:bg-[rgba(91,184,52,0.3)]"
        >
          <FaPlus size={10} />
          Add Item
        </button>

        <button 
          onClick={onAddInstruction}
          className="flex items-center gap-1 bg-[rgba(91,184,52,0.18)] border border-[#267F00] rounded-md px-3 py-[5px] text-[#267F00] text-xs hover:bg-[rgba(91,184,52,0.3)]"
        >
          <FaPlus size={10} />
          Add Cooking Instruction
        </button>

        {showCutleryOption && (
          <button
            onClick={handleCutleryChange}
            className={`flex items-center gap-1 rounded-md px-3 py-[5px] text-xs ${
              noCutlery 
                ? 'bg-[rgba(255,0,0,0.18)] border border-[#FF0000] text-[#415227]'
                : 'bg-[rgba(91,184,52,0.18)] border border-[#267F00] text-[#267F00]'
            }`}
          >
            <ImSpoonKnife size={10} />
            {noCutlery ? "Don't send cutlery" : "Send cutlery"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
