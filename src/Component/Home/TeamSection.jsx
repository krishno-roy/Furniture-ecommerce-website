import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import TeamImage1 from "../../assets/About2.jpg";
import TeamImage2 from "../../assets/team3.jpg";
import TeamImage3 from "../../assets/team2.jpg";
import TeamImage4 from "../../assets/team1.jpg";


const teamMembers = [
  {
    name: "Emma Moore",
    image: TeamImage1,
  },
  {
    name: "Benjamin Smith",
    image: TeamImage2,
  },
  {
    name: "Noah Jones",
    image: TeamImage3,
  },
  {
    name: "Olivia Miller",
    image: TeamImage4,
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet Our Team</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover rounded shadow"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <div className="flex justify-center gap-3 mt-3">
              <a href="#" className="text-white bg-teal-700 p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white bg-teal-700 p-2 rounded">
                <FaTwitter />
              </a>
              <a href="#" className="text-white bg-teal-700 p-2 rounded">
                <FaYoutube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
