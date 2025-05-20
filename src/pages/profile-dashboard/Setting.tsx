import { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import Modal from '../../components/Modal';
import ChatInterface from '../../components/modal/ChatInterface';


const Setting = () => {
  const [activeTab, setActiveTab] = useState<'notification' | 'helpCenter' | ''>('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1)
  const [notifications, setNotifications] = useState({
    sms: true,
    whatsapp: true,
    email: true,
  });
  const [helpCenterTab, setHelpCenterTab] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleResponse = (response: boolean) => {
    console.log("User response:", response ? "Yes" : "No");
    setModalOpen(false)
    setStep(2)
  };

  

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'Open the app, browse restaurants, select items, add them to your cart, and proceed to checkout. Choose a payment method and confirm your order.',
    },
    { question: 'How can I track my order?', answer: 'You can track your order from the "My Orders" section in real time.' },
    { question: 'What if my order is late?', answer: 'If your order is late, contact support through the Help Center.' },
    { question: 'Can I cancel my order?', answer: 'Yes, you can cancel before the restaurant confirms it.' },
    { question: 'What happens if I receive the wrong order?', answer: 'Reach out to support immediately for a resolution.' },
  ];

  return (
    <>
    {step===1&&(
    <div className="min-h-screen rounded-xl">
      <div className="space-y-4">
        {/* Tab Buttons */}
        <div className="space-y-4">
          <button
            className={`w-full p-3 rounded-lg text-left font-medium ${
              activeTab === 'notification' ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setActiveTab('notification')}
          >
            Notification
          </button>
          <button
            className={`w-full p-3 rounded-lg text-left font-medium ${
              activeTab === 'helpCenter' ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setActiveTab('helpCenter')}
          >
            Help Center
          </button>
        </div>

        {activeTab === 'notification' && (
          <div className="bg-green-50 rounded-lg p-4 space-y-4">
            <p className="text-sm">
              Keep this on to receive offer recommendations & timely reminders based on your interests
            </p>
            {['sms', 'whatsapp', 'email'].map((type) => (
              <div
                key={type}
                className="flex items-center justify-between bg-white p-3 px-5 w-[300px] rounded-lg"
              >
                <span className="capitalize">{type === 'email' ? 'E-Mail' : type}</span>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [type]: !notifications[type as keyof typeof notifications],
                    })
                  }
                  className={`${
                    notifications[type as keyof typeof notifications]
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                >
                  <span
                    className={`${
                      notifications[type as keyof typeof notifications]
                        ? 'translate-x-6'
                        : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'helpCenter' && (
          <div className="mt-6 space-y-3">
            {[
              'Orders & Delivery',
              'Payments & Refunds',
              'Account & Profile',
              'Discounts & Offers',
              'Restaurants & Menu',
            ].map((topic) => (
              <div
                key={topic}
                className={`p-3 px-5 w-[300px] rounded-md font-medium cursor-pointer ${
                  helpCenterTab === topic ? 'bg-green-500 text-white' : 'bg-white text-black'
                }`}
                onClick={() => setHelpCenterTab(topic)}
              >
                {topic}
              </div>
            ))}
          </div>
        )}

        {helpCenterTab === 'Orders & Delivery' && (
          <div className="bg-green-50 rounded-lg p-4 space-y-4">
            <div className="bg-[#5BB8342E] text-center rounded-md p-3 font-normal">
              Orders & Delivery
            </div>
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-1">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left font-medium"
                >
                  {index + 1}. {faq.question}{' '}
                  <span>{expandedFAQ === index ? '−' : '+'}</span>
                </button>
                {expandedFAQ === index && faq.answer && (
                  <p className="text-sm text-gray-700 ml-4">{faq.answer}</p>
                )}
              </div>
            ))}

            <div className="text-sm italic text-center text-gray-600">
              Didn’t Find Your Question?
            </div>

            <div className="bg-white p-2 rounded-lg">
              <label className="text-xs text-green-600 font-bold">
                Add your question (DUMMY DRAFT)
              </label>
              <textarea
                rows={3}
                className="w-full p-2 mt-1 rounded-md border border-gray-300"
                placeholder="Type your question here..."
              />
            </div>

            <button
              onClick={() => setModalOpen(true)}  
             className="bg-green-500 w-full py-2 text-white font-semibold rounded-lg">
              Send
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer">
        <BsChatDots size={20} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      <div className="flex flex-col text-center">
        <div className="text-8xl mb-4">👍</div>
        <h2 className="text-lg font-semibold my-6">Was The Information Helpful ?</h2>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <button
            onClick={() => handleResponse(true)}
            className="px-8 py-2 w-full bg-green-100 text-green-700 font-semibold rounded hover:bg-green-200"
          >
            Yes
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="px-8 py-2 w-full bg-[#5BB834] text-white font-semibold rounded hover:bg-green-700"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
    </div>
    )}

    {step===2 &&(
      <div className="min-h-screen rounded-xl">
        <ChatInterface step={()=>setStep(1)}/>
      </div>
    )} 
    </>
    
  );
};

export default Setting;
