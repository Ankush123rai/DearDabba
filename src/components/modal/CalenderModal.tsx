import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type CalenderModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const CalenderModal = ({ onClose, onConfirm }: CalenderModalProps) => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Tr", "Sa"];
  const dates = [
    "",
    "",
    "",
    "",
    "",
    "",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
  ];
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm relative shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <button>
            <ChevronLeft className="text-green-900" />
          </button>
          <h2 className="text-lg font-semibold text-green-900">March 2024</h2>
          <button>
            <ChevronRight className="text-green-900" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
          {days.map((day) => (
            <div key={day} className="font-medium">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 text-center gap-y-2">
          {dates.map((date, index) => {
            const isCurrentMonth = index >= 6 && index <= 41;
            const isSelected = date === "12";
            const isNextMonth = index >= 42;

            return (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  isSelected
                    ? "bg-green-500 text-white"
                    : isNextMonth
                    ? "text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {date}
              </div>
            );
          })}
        </div>

        <button className="absolute top-4 right-4">
          <X className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CalenderModal;
