import Breadcrumb from "../../components/Breadcrumb";
import LocationSearchBar from "../../components/LocationSearchBar";
import KitchenCardList from "../../components/cards/KitchenCardList";
import vegetarian from '../../assets/images/vegetarian.png'
import { BiFoodTag } from "react-icons/bi";
import Footer from "../../components/Footer";

const CateringService = () => {
  return (
    <><div className="relative min-h-screen p-4">
      <Breadcrumb
        paths={[
          { label: "Home" },
          { label: "Catering Service", isActive: true },
        ]}
      />

      <LocationSearchBar isMic={true} />

      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <div className="w-full lg:max-w-xl flex flex-col gap-6">
          <button className="font-medium text-lg w-full bg-[#5BB8342E] rounded-lg py-3 text-[#5BB834]">
            Add Date
          </button>
          <div className="flex justify-between flex-wrap gap-4">
            {[
              { title: 'Breakfast', time: '8am-11am' },
              { title: 'Lunch', time: '11am-4pm' },
              { title: 'Dinner', time: '6pm-10pm', active: true },
            ].map(({ title, time, active }) => (
              <div
                key={title}
                className={`flex-1 min-w-[140px] p-4 rounded-xl flex flex-col items-center ${
                  active ? 'bg-[#5BB834]' : 'bg-[#F2FFED]'
                }`}
              >
                <div className={`font-semibold text-lg ${active ? 'text-white' : 'text-[#267F00]'}`}>
                  {title}
                </div>
                <div className={`text-sm ${active ? 'text-white' : 'text-[#267F00]'}`}>
                  {time}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { time: '6pm-7pm', active: true },
              { time: '7pm-8pm' },
              { time: '9pm-10pm' },
            ].map(({ time, active }) => (
              <div
                key={time}
                className={`px-4 py-2 min-w-[140px] rounded-lg ${
                  active ? 'bg-[#5BB834] text-white' : 'bg-[#F2FFED] text-[#267F00]'
                } text-sm`}
              >
                {time}
              </div>
            ))}
          </div>
          
          <hr className=""/> 
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2A334A]">Select Food</h2>
              <button className="text-xl font-semibold text-[#5BB834]">Select All</button>
            </div>

            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <input
                        type="checkbox"
                        className="w-6 h-6 accent-[#5BB834]"
                      />
                  <div className="flex items-center gap-3">
                    <BiFoodTag className="text-[green] text-3xl" />
                    <div className="text-2xl font-medium text-[#5BB834]">Veg</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 border border-[#5BB834] rounded bg-white"></div>
                  <div className="flex items-center gap-3">
                  <input
                        type="checkbox"
                        className="w-6 h-6 accent-[#5BB834]"
                      />
                    <div className="text-2xl font-medium text-[#2A334A]">Vegan</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                <input
                        type="checkbox"
                        className="w-6 h-6 accent-[#5BB834]"
                      />
                  <div className="flex items-center gap-3">
                    <BiFoodTag className="text-[red] text-3xl" />
                    <div className="text-2xl font-medium text-[#2A334A]">Non-Veg</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 border border-[#5BB834] rounded bg-white"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10" />
                    <div className="text-2xl font-medium text-[#2A334A]">Jain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <label className="text-base font-semibold text-[#2A334A]">
                Add Number Of People For Veg
              </label>
              <input
                type="number"
                placeholder="Add here..."
                className="w-full mt-2 p-3 bg-[#F9F9F9] rounded-xl text-sm text-[#666666] outline-none"
              />
            </div>

            <div>
              <label className="text-base font-semibold text-[#2A334A]">
                Add Number Of People For Non-Veg
              </label>
              <input
                type="number"
                placeholder="Add here..."
                className="w-full mt-2 p-3 bg-[#F9F9F9] rounded-xl text-sm text-[#666666] outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center my-4">
            <button className="flex items-center gap-2 text-[#267F00] font-bold italic text-lg">
              <span className="text-2xl">＋</span> Add another order
            </button>
          </div>

          <div className="flex justify-center">
            <button className="w-full bg-[#5BB834] m-5 py-3 rounded-xl text-white text-lg font-medium">
              Proceed
            </button>
          </div>
        </div>

        <div className="w-full">
          <KitchenCardList />
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default CateringService;
