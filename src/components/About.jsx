import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePic from "../assets/zia.jpg"; // replace with your image path

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="service-icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      {/* Flex container for image and text */}
      <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-8">

        <motion.p
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a highly motivated and results-driven Software Engineer 
          with a Master’s degree in Computer Science and over 3 years of experience
           designing, developing, and deploying scalable enterprise software 
           solutions. I specialize in full-stack development, cloud infrastructure
            modernization, and team mentorship. At Capgemini, I successfully 
            collaborated with diverse, cross-functional teams to deliver robust, 
            high-quality software, where I worked extensively on Spring Boot–based
             backend services for the PSD2 banking domain, developing secure
              RESTful microservices, implementing OAuth2/OpenID Connect for
               regulatory compliance, and building scalable API integrations 
               that enabled seamless payment initiation, account information 
               services, and third-party financial provider connectivity.
        </motion.p>
         <motion.img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover border-4 shadow-lg"
          variants={fadeIn("left", "spring", 0.2, 1)}
        />
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
