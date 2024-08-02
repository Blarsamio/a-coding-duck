import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h1>
              BEN <span>AIDEN</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white"> I'm a </span>
              <TypeAnimation
                className="text-accent"
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                feugiat, libero auctor.
              </p>
          </div>
        </div>
        <div>
          <img
            src={Image}
            alt="avatar"
            className="w-40 h-40 rounded-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
