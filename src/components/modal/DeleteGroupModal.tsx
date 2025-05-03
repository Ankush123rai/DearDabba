
import { IoClose } from "react-icons/io5";
import sadTriangle from "../../assets/images/sadTraingle.png"; 

type DeleteGroupModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

  const DeleteGroupModal = ({ onClose, onConfirm }: DeleteGroupModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm relative shadow-xl">
        <button onClick={onClose} className="absolute top-4 right-4">
          <IoClose className="text-2xl text-black" />
        </button>
        <div className="flex flex-col items-center">
          <img src={sadTriangle} alt="Sad face" className="w-28 h-28 mb-4" />
          <p className="text-center font-semibold text-[#1B1B1F] text-lg mb-6">
            Are you sure you want to delete this group?
          </p>
          <div className="flex gap-4 w-full justify-center">
            <button
              onClick={onConfirm}
              className="bg-[#DDF6C9] text-[#2B9219] font-semibold px-6 py-2 rounded-lg w-1/2"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="bg-[#5BB834] text-white font-semibold px-6 py-2 rounded-lg w-1/2"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteGroupModal;
