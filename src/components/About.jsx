import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
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
          alt="web-development"
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We are united by a shared passion for shaping the future of technology
        and pushing the boundaries of what is possible in the digital world.
        Despite our relatively young age, our team has achieved a remarkable
        mastery of advanced technical skills across a diverse range of
        disciplines. These include cutting-edge mobile app development using
        Flutter, immersive 3D design, sophisticated website creation, and the
        ability to solve complex coding challenges. At Habeshan Progeny, we
        pride ourselves on our creativity, blending fresh, youthful perspectives
        with advanced technical expertise to develop truly unique and impactful
        solutions. We are driven by a relentless commitment to excellence,
        delivering everything from sleek, user-friendly mobile applications to
        visually stunning 3D models, and highly functional, custom websites
        tailored to meet our clients' needs. We bring enthusiasm,
        precision, and forward-thinking strategies to every project, ensuring
        that each digital product we deliver not only meets but exceeds
        expectations. With our eyes firmly set on the future, we are here to
        transform ideas into groundbreaking realities and prove that age is no
        barrier when it comes to shaping the technology of tomorrow.
      <h3 className="mt-4 text-[25px] text-white-100">We offer</h3>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
