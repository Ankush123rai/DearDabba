import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Report: React.FC = () => {
  const [email, setEmail] = useState("3250155233");
  const [feedback, setFeedback] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maana..."
  );
  const [rating, setRating] = useState(4);

  return (
     <div className="p-7">
          <div className="w-full">
            <h2 className="text-md font-semibold mb-4 text-gray-800">
            Share your Report with us
            </h2>
    
            <div className="mb-4 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
              <label className="block text-xs text-gray-600 mb-1">Emails</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  focus:outline-none"
              />
            </div>
    
            {/* Feedback input */}
            <div className="mb-6 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="flex gap-4 text-xs text-gray-600 mb-1">
                <span>Share feedback</span>
                <span className="text-green-600 text-sm font-semibold">(DUMMY DRAFT)</span>
              </div>
              <textarea
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full  resize-none focus:outline-none"
              />
            </div>

    
    
            <div className="w-full flex justify-center items-center sm:mt-[6rem] mt-3">
              <button className="bg-green-500 text-white px-10 sm:w-[400px] w-full py-2 rounded-md shadow hover:bg-green-600 transition">
                Send
              </button>
            </div>
          </div>
        </div>
  );
};

export default Report;
