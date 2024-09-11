import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-14">
          <img 
            src="src\assets\hero.jpg" 
            alt="Habesha Progeny Logo" 
            className="w-[3000px] h-auto object-contain rounded-[3000px]"
          />

        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Habesha Progeny
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to Habeshan Progeny, <br className="sm:block hidden" />
            <p className="text-[14px]">
              a dynamic and forward-thinking software technology company founded
              by a group of highly innovative and ambitious teenagers. We are
              united by a shared passion for shaping the future of technology
              and pushing the boundaries of what is possible in the digital
              world. Despite our relatively young age, our team has achieved a
              remarkable mastery of advanced technical skills across a diverse
              range of disciplines. These include cutting-edge mobile app
              development using Flutter, immersive 3D design, sophisticated
              website creation, and the ability to solve complex coding
              challenges.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
