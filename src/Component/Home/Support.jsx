import React from 'react'
import Icon from "../../assets/shapping.png";
import Icon2 from "../../assets/support.png";
import Icon3 from "../../assets/money-gerrantee.png";
import Icon4 from "../../assets/wallet.png";

const SupportList = [
  {
    id: 1,
    title: "Free Shipping",
    DiScriptcs: "Free Shipping On All Order",
    image: Icon,
  },
  {
    id: 2,
    title: "Online Support",
    DiScriptcs: "Contact us 24 hr, 7 days",
    image: Icon2,
  },
  {
    id: 3,
    title: "Money Guarantee",
    DiScriptcs: "30 Day Money Back Guarantee",
    image: Icon3,
  },
  {
    id: 4,
    title: "Secure Payment",
    DiScriptcs: "We ensure secure payment",
    image: Icon4,
  },
];

const Support = () => {

  return (
    <section>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4'>
        {SupportList.map((support, id) => (
            <div key={support.id} className='text-center space-y-1'>
                <img src={support.image} className='mx-auto' alt="" />
                <h2 className='text-2xl font-bold'>{support.title}</h2>
                <p>{support.DiScriptcs}</p>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Support