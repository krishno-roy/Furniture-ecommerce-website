import React from 'react'
import ShopBg from "../../assets/flowers-on-wooden-cupboard-in-natural-living-room-2023-11-27-05-05-49-utc.jpg";
import CommitmentSection from '../Home/CommitmentSection';
import TeamSection from '../Home/TeamSection';
import Support from '../Home/Support';
import Testimonial from '../Home/Testimonial';
import LogoSection from '../Home/LogoSection';

const About = () => {
  return (
    <div>
       {/* Banner Section */}
            <div
              className="relative bg-cover bg-center py-20 text-white text-center"
              style={{ backgroundImage: `url(${ShopBg})` }}
            >
              <div className="absolute inset-0 bg-black/45"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold">About</h2>
                <p className="text-lg mt-2">Home | About</p>
              </div>
            </div>
            <CommitmentSection/>
            <Support className="py-20"/>
            <TeamSection/>
            <Testimonial/>
            <LogoSection/>
    </div>
  )
}

export default About