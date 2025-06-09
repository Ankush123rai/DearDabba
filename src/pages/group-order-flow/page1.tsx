import { Link } from "react-router-dom";
import groupOder from "../../assets/images/group-order.svg";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

const page1 = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#69c641] to-green-0 min-h-screen ">
      <Breadcrumb
        paths={[
          { label: "Ramji's" },
          { label: "Group Order Flow", isActive: true },
        ]}
      />

      <div className=" text-green-800 flex flex-col items-center px-6">
        <div className="mb-8 ">
          <img
            src={groupOder}
            alt="Group Order"
            className="w-48 h-auto mx-auto"
          />
        </div>
        <div className=" flex flex-col items-center">
          <h2 className="text-center  text-2xl font-bold mb-6">Group Order</h2>
          <ul className="text-green-800 space-y-4 text-lg">
            <li>• Share link & start a group of up to 10 friends</li>
            <li>• Everyone can add their favorite dishes to the same order</li>
            <li>• Only host can edit the cart and track the order</li>
            <li>
              • Final amount can be split between all the members as per their
              order
              <br />
              and coupon can be applied by host only
            </li>
          </ul>
          <Link to='/group-order-flow/2'>
          <button className="bg-green-500 w-full text-white text-lg font-medium py-3 px-8 rounded-lg mt-10 hover:bg-green-600">
          Interesting, let's go ahead
        </button>
        </Link>
        </div>

        
      </div>
    </div>
          <Footer/>
          </>
  );
};

export default page1;
