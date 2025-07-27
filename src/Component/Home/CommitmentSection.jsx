import React from "react";
import { Clock, ShoppingBag } from "lucide-react";
import Image from "../../assets/about3.jpg";
import Image2 from "../../assets/About2.jpg";
import Image3 from "../../assets/About1.jpg";

const CommitmentSection = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 bg-white">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <img
            src={Image}
            alt="Couch Discussion"
            className="row-span-2 w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src={Image2}
            alt="Relaxing Woman"
            className="w-full h-full object-cover rounded-2xl shadow"
          />
          <img
            src={Image3}
            alt="Craftsman"
            className="w-full h-full object-cover rounded-2xl shadow"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <p className="text-sm text-gray-500 uppercase font-semibold tracking-wide mb-2">
            Est. 1995
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            A Commitment To <br /> Quality
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            We start with the highest quality materials, then shape and finish
            them with precision and care to create products that elevate the
            experiences of people wherever they use them: from the private
            office to the open plan, and from the boardroom to the home office.
          </p>

          {/* Feature 1 */}
          <div className="flex items-start mb-4">
            <Clock className="w-6 h-6 text-black mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-black">
                On-Time Product Delivery
              </h4>
              <p className="text-gray-600 text-sm">
                A delivery service you can depend on
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <ShoppingBag className="w-6 h-6 text-black mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-black">
                Anytime Order & Cancel
              </h4>
              <p className="text-gray-600 text-sm">
                The highest level of security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
