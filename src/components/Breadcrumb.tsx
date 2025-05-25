import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbProps {
  paths: { label: string; isActive?: boolean }[];
  onBack?: () => void;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ paths, onBack }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1120px] mx-auto rounded-[18px] bg-transparent flex items-center px-4 py-2 md:h-[55px]">
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={onBack? onBack : () => navigate(-1)}
          className="w-10 h-10 md:w-[41.5px] md:h-[41.5px] flex items-center justify-center"
        >
          <FaArrowLeft className="text-[#415227] text-lg md:text-xl" />
        </button>
        <div className="flex flex-wrap items-center gap-1">
          {paths.map((path, index) => (
            <span
              key={index}
              className={`font-poppins text-base md:text-[20.24px] leading-tight md:leading-[30px] text-[#415227] ${
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
