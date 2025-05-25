type CashbackCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  onClick?: () => void;
};

const CashbackCard = ({ icon, title, description, onClick }: CashbackCardProps) => (
  <div
    className="p-4 rounded-lg shadow border border-gray-200 hover:shadow-md transition-all bg-white cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center space-x-2 mb-2 font-semibold">
      <div className="border p-1 rounded-lg">{icon}</div>
      <span>{title}</span>
    </div>
    <p className="text-gray-600 text-sm mb-2">{description}</p>
    <button className="text-sm font-medium hover:underline">+ MORE</button>
  </div>
);

export default CashbackCard;
