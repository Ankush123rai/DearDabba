import backgroundImage from "../assets/images/banner-background.jpg";
import leftImage from "../assets/images/left-img.png";
import rightImage from "../assets/images/right-img.png";
import logoImage from "../assets/images/logo.png";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-6xl h-[400px] md:h-[573px] mx-auto rounded-xl">
      <div
        className="absolute w-full h-[500px] md:h-[573px] sm:top-[50%] top-[62%] left-1/2 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: "darken",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translate(-50%, -50%)",
        }}
      />

      <img
        src={leftImage}
        alt="Left Side"
        className="absolute w-[300px] md:w-[500px] lg:w-[608px] h-auto left-0 top-0"
      />

      <img
        src={rightImage}
        alt="Right Side"
        className="absolute w-[180px] md:w-[250px] lg:w-[293px] h-auto right-[-10px] md:right-0 top-0"
        style={{
          transform: "scaleX(-1)",
        }}
      />

      <div className="absolute flex flex-col justify-center items-center gap-1 w-[250px] md:w-[332.23px] h-[300px] md:h-[373px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={logoImage}
          alt="Logo"
          className="w-[200px] md:w-[298.4px] h-auto bg-transparent"
        />
        <p className="text-[#415227] font-poppins font-semibold text-xl md:text-[33.3491px] leading-[30px] md:leading-[35px] text-center tracking-tight capitalize">
          Tag Line
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
