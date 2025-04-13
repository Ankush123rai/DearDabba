import FirstLayout from './FirstLayout'
import BrandLogo from './BrandLogo'
import girl from '../assets/images/girl.png'
import congratulation from '../assets/images/congratulation.gif'

const Congratulation = () => {
  return (
    <FirstLayout>
      <div className="flex items-center justify-center min-h-screen flex-col text-center sm:px-4 px-1">

        <div className="flex justify-center relative mb-4">
          <BrandLogo />
        </div>

        <div
          className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[353px] md:h-[353px] bg-center bg-no-repeat bg-contain mx-auto -mt-4 sm:-mt-8 md:-mt-12"
          style={{ backgroundImage: `url(${congratulation})` }}
        >
          <img 
            src={girl}
            alt="Celebration Girl"
            className="w-full h-full p-6 sm:p-8 object-contain"
          />
        </div>

        <h2 className="text-[14px] sm:text-[16px] sm:w-1/4 w-full md:text-[14px] font-light mb-2 sm:mt-[-3rem] mt-0">
          Congratulations for registering your account on DearDabba!!
        </h2>

        <p className="sm:w-1/3 w-full font-bold text-sm sm:text-base mb-4 max-w-md px-2 sm:px-0">
          Get free deliveries on your first 2 orders by 
          sharing DearDabba referral code with your 
          friends & family.
        </p>

        <button
          onClick={() => navigator.clipboard.writeText("Deardabba2201")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          Deardabba2201 Copy
        </button>

      </div>
    </FirstLayout>
  )
}

export default Congratulation
