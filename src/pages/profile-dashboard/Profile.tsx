import { useState } from 'react';
import { MdEdit } from 'react-icons/md';

export default function Profile() {
  const [whatsappOption, setWhatsappOption] = useState('different');

  return (
    <div >
      <div className="">
        <h2 className="text-gray-800 font-semibold mb-4">Basic Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative rounded-xl px-3 py-2 pr-10 bg-white">
            <label className="block text-xs text-gray-600">Full name<span className="text-red-500">*</span></label>
            <input className="w-full text-sm" defaultValue="Nupur Kadam" />
            <MdEdit className="absolute top-5 right-3 text-green-600 cursor-pointer" />
          </div>

          <div className="relative rounded-xl px-3 py-2 pr-10 bg-white">
            <label className="block text-xs text-gray-600 ">Email address<span className="text-red-500">*</span></label>
            <input className="w-full text-sm" defaultValue="cfvg@gamil.com" />
            <MdEdit className="absolute top-5 right-3 text-green-600 cursor-pointer" />
          </div>

          <div className="relative rounded-xl px-3 py-2 pr-10 bg-white">
            <label className="block text-xs text-gray-600 ">Mobile number<span className="text-red-500">*</span></label>
            <input className="w-full text-sm" placeholder="+91 |" />
            <MdEdit className="absolute top-5 right-3 text-green-600 cursor-pointer" />
          </div>
        </div>

        <p className="text-green-600 font-medium text-sm mb-2">We’ll send an OTP to verify this number</p>
        <p className="text-gray-700 font-semibold mb-1">
          Provide your WhatsApp number to get notify on<br />
          trendy offers & deals on time
        </p>

        <div className="my-3 space-y-2 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="same"
              checked={whatsappOption === 'same'}
              onChange={(e) => setWhatsappOption(e.target.value)}
              className='accent-green-600'
            />
            My WhatsApp number is same as above
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="different"
              checked={whatsappOption === 'different'}
              className='accent-green-600'
              onChange={(e) => setWhatsappOption(e.target.value)}
            />
            I have a different WhatsApp number
          </label>
        </div>

        {whatsappOption === 'different' && (
          <div className="mt-2 rounded-xl p-3 bg-white">
            <label className="block text-xs text-gray-600">WhatsApp number<span className="text-red-500">*</span></label>
            <input className="w-full " defaultValue="+91 | 9321150202" />
          </div>
        )}


        <h3 className="text-gray-800 font-semibold mt-6 mb-2">Add Your Address</h3>
        <p className="text-xs text-gray-600 mb-2">
          Adding your proper delivery address would allow our delivery guy to make an effortless delivery.
        </p>
        <div className="relative rounded-xl px-3 py-2 pr-10 bg-white mb-6">
          <label className="block text-xs text-gray-600">Address<span className="text-red-500">*</span></label>
          <textarea
            className="w-full resize-none"
            rows={3}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..."
          ></textarea>
          <MdEdit className="absolute top-7 right-3 text-green-600 cursor-pointer" />
        </div>

        <div className="text-center">
          <button className="bg-[#5BB834] w-[300px] text-white font-medium px-8 py-2 rounded-lg transition duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
