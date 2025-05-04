import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

type CalenderModalProps = {
  dateType: string;
  onClose: () => void;
  onConfirm: (date: string) => void;
};

const CalenderModal = ({ dateType, onClose, onConfirm }: CalenderModalProps) => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDayOfMonth(year, month);

    const prevMonthDays = getDaysInMonth(year, month - 1);
    const calendar: { day: number; currentMonth: boolean }[] = [];

    for (let i = startDay - 1; i >= 0; i--) {
      calendar.push({ day: prevMonthDays - i, currentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i, currentMonth: true });
    }


    while (calendar.length % 7 !== 0) {
      calendar.push({ day: calendar.length % 7, currentMonth: false });
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const formatted = selected.toISOString().split("T")[0]; 
    setSelectedDate(formatted);
    onConfirm(formatted);
  };

  const calendar = generateCalendar();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm relative shadow-xl">
        <h1 className="text-2xl font-semibold text-green-600 text-center mb-4">{dateType}</h1>

        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth}>
            <ChevronLeft className="text-green-900" />
          </button>
          <h2 className="text-lg font-semibold text-green-900">
            {monthName} {year}
          </h2>
          <button onClick={handleNextMonth}>
            <ChevronRight className="text-green-900" />
          </button>
        </div>

        <table className="w-full table-fixed border border-gray-300">
          <thead>
            <tr>
              {days.map((day) => (
                <th
                  key={day}
                  className="text-sm font-medium text-gray-500 border border-gray-300 py-1"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(calendar.length / 7) }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {calendar.slice(rowIndex * 7, rowIndex * 7 + 7).map((cell, colIndex) => {
                  const isSelected = selectedDate ===
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      cell.day
                    ).toISOString().split("T")[0];

                  return (
                    <td
                      key={colIndex}
                      className={`border border-gray-300 text-center py-2 cursor-pointer ${
                        !cell.currentMonth ? "text-gray-400" : "text-gray-800"
                      } ${isSelected ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
                      onClick={() =>
                        cell.currentMonth && handleDateClick(cell.day)
                      }
                    >
                      {cell.day}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default CalenderModal;
