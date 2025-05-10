import React, { useState } from 'react';
import location from '../assets/images/location.png'
import Profile from './profile-dashboard/Profile';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Collection from './profile-dashboard/Collection';
import YourOrder from './profile-dashboard/YourOrder';
import Booking from './profile-dashboard/Booking';
import DinningTransaction from './profile-dashboard/DinningTransaction';
import Setting from './profile-dashboard/Setting';

const tabs = [
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:"My profile"
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Collection',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Your order', 
  
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Booking',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Dinning transaction',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Settings',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'About',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Send feedback',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Report store',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'My subscription',
  },
  {
    img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    title:'Wallet',
  },
];

const contentMap: Record<string, JSX.Element> = {
  'My profile': (
    <Profile/>
  ),
  'Collection': (<Collection/>),
  'Your order': (<YourOrder/>),
  'Booking': (<Booking/>),
  'Dinning transaction': (<DinningTransaction/>),
  'Settings': (<Setting/>),
  'About': <div className="text-xl">About content goes here.</div>,
  'Send feedback': <div className="text-xl">Send feedback content goes here.</div>,
  'Report store': <div className="text-xl">Report store content goes here.</div>,
  'My subscription': <div className="text-xl">My subscription content goes here.</div>,
  'Wallet': <div className="text-xl">Wallet content goes here.</div>,
};

export default function ProfileDashboard() {
  const [selectedTab, setSelectedTab] = useState('My profile');

  return (
   <>
   <div>
   <Breadcrumb
        paths={[
          { label: "Profile" },
          { label: selectedTab, isActive: true },
        ]}
      />
   </div>
    <div className="flex px-5">
      <div className="w-[450px] bg-white rounded-lg px-4 mr-3">
        <div className="flex items-center space-x-4 bg-[#5BB8342E] rounded-xl p-5">
          
          <div>
            <div className='flex gap-4 items-center'>
            <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            className="rounded-full h-12 w-12"
            alt="profile"
          />
            <h2 className="text-lg font-bold">Hello, Nupur 👋</h2>

            </div>
            <div className='flex items-center bg-white p-3 rounded-xl mt-3'>
            <div className="text-[#5BB834] mr-2 w-20 h-10">
                  <img src={location} alt="Location" className="w-full" />
                </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...
            </p>
            </div>
            
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {tabs.map((tab,ind) => (
            <div
              key={ind}
              onClick={() => setSelectedTab(tab.title)}
              className={`flex flex-col gap-2 w-[108px] items-center p-3 rounded-lg transition ${
                selectedTab === tab.title ? 'border border-green-600' : ''
              }`}
            >
              <img src={tab.img} alt={tab.title} className='w-10 h-10' />
              <p className='text-xs text-center'>{tab.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-[#5BB8342E] rounded-lg shadow p-6">
        {contentMap[selectedTab]}
      </div>
    </div>
    <Footer/>
   </>
  );
}
