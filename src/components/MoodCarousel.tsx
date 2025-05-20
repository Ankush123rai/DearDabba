import { useEffect, useState } from "react";

const moods = [
  {
    title: "Buffet",
    image:
      "https://img.freepik.com/free-photo/dinner-table-with-national-sac-ichi-dishes_114579-3185.jpg",
  },
  {
    title: "Romantic Dinning",
    image:
      "https://img.freepik.com/free-photo/three-friends-cheer-wine-glasses-with-red-white-wine-dinner_140725-4148.jpg",
  },
  {
    title: "Cozy cafe",
    image:
      "https://img.freepik.com/free-photo/fresh-chicken-salad-with-vegetables_140725-957.jpg",
  },
];

const MoodCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = moods.length;

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const getItemClass = (index: number) => {
    if (index === current) {
      return "w-60 h-96 scale-100 opacity-100 z-10";
    } else {
      return "w-40 h-60 scale-90 opacity-40";
    }
  };

  const visibleItems = [prevIndex, current, nextIndex];

  return (
    <div className="w-full h-[530px] py-10 flex flex-col items-center relative">
      <h2 className="text-2xl font-bold text-green-900 mb-6">MOOD</h2>
      <div className="flex items-center gap-4">
        {visibleItems.map((i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`
              relative rounded-2xl overflow-hidden shadow-lg cursor-pointer
              transition-all duration-500 ease-in-out
              ${getItemClass(i)}
            `}
          >
            <img
              src={moods[i].image}
              alt={moods[i].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">
              {moods[i].title}
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-white bg-opacity-30 backdrop-blur-md rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{'>'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        {moods.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-green-600 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodCarousel;
