import { FaApple } from 'react-icons/fa';
import phone1 from '../assets/images/phone1.png';
import phone2 from '../assets/images/phone2.png';

const AppDownloadSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-7">
        <div className="w-full lg:w-1/2 order-1 mb-8 lg:mb-0">
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute left-[-3rem] lg:left-[2rem] sm:top-[150px] top-[100px]  max-w-[200px] lg:max-w-[381px] z-10">
              <div className="relative top-[-20px] left-[1rem]">
                <img 
                  src={phone1} 
                  alt="iPhone mockup" 
                  className="w-full h-auto drop-shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/4 right-1/4 h-4 bg-black opacity-10 blur-md"></div>
              </div>
            </div>

            {/* Second phone */}
            <div className="absolute right-0 lg:right-[-2rem] top-16 lg:top-24  max-w-[200px] lg:max-w-[330px] z-0">
              <div className="relative">
                <img 
                  src={phone2}
                  alt="iPhone mockup" 
                  className="w-full h-auto drop-shadow-lg"
                />
                <div className="absolute -bottom-4 left-1/4 right-1/4 h-4 bg-black opacity-10 blur-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8 order-2 mr-3">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#415227] tracking-tight leading-tight">
              Get the DearDabba app
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We will send you a link, open it on your phone to download the app
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input 
                  type="radio" 
                  name="contact-method" 
                  className="sr-only"
                  defaultChecked
                />
                <div className="w-5 h-5 rounded-full border-2 border-[#5BB834] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-transparent"></div>
                </div>
              </div>
              <span className="text-gray-800 select-none">Email</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input 
                  type="radio" 
                  name="contact-method" 
                  className="sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-[#5BB834] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#5BB834]"></div>
                </div>
              </div>
              <span className="text-gray-800 select-none">Phone no.</span>
            </label>
          </div>

          <div className="flex gap-3">
            <div className="w-full p-3 border border-gray-300 rounded-2xl focus-within:border-[#5BB834] focus-within:ring-1 focus-within:ring-[#5BB834] transition-all">
              <input 
                type="text" 
                placeholder="Enter your phone number" 
                className="w-full outline-none  text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="w-full sm:w-[180px] py-3 bg-[#5BB834] hover:bg-[#4aa02c] text-white rounded-lg font-medium transition-colors duration-300 shadow-md">
              Share App Link
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600 text-center sm:text-left">Download app from</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-50 transition-colors">
                <div className="relative w-5 h-5">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732208.png" alt="" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs uppercase text-gray-600">GET IT ON</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-md hover:bg-gray-50 transition-colors">
                <div className="relative w-5 h-5">
                <FaApple className='text-[25px]'/>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-600">Download on the</span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;