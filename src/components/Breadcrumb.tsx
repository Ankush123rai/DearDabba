import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface BreadcrumbProps {
  paths: { label: string; isActive?: boolean }[];
  onBack?: () => void;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ paths, onBack }) => {
  return (
    <div className="w-[1120px] h-[55px] mx-auto rounded-[18px] bg-transparent flex items-center px-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-[41.5px] h-[41.5px] flex items-center justify-center"
        >
          <FaArrowLeft className="text-[#415227] text-xl" />
        </button>
        <div className="flex items-center gap-1">
          {paths.map((path, index) => (
            <span
              key={index}
              className={`font-poppins text-[20.24px] leading-[30px] text-[#415227] ${
                path.isActive ? 'font-bold' : 'font-normal'
              }`}
            >
              {path.label}
              {index < paths.length - 1 && <span className="ml-1">/</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
