import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left violet line & dot */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#BB86FC]' />
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#BB86FC] to-[#6200EE]" />

        </div>

        {/* Intro */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#BB86FC]'>Zia</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build  <span className='text-[#BB86FC]'> secure and scalable systems</span><br className='sm:block hidden' />
          <br />
            <br className='sm:block hidden' />
           I have over 3 years of 
           experience building scalable enterprise solutions. I specialize in full-stack
            development with <span className='text-[#BB86FC]'>Spring Boot </span>
             and have strong expertise in <span className='text-[#BB86FC]'>Microservices, React, Kafka, Docker, Kubernetes and AWS </span>
             to deliver modern, cloud-ready applications</p>

          <div className="flex gap-6 mt-6 items-center">
            <a
              href="https://www.linkedin.com/in/mohdziaulhaq"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#915EFF] transition text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mohdziaulhaq"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#915EFF] transition text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="/Resume.pdf" // place resume in public folder
              download
              className="px-4 py-2 rounded-lg bg-[#BB86FC] text-white font-semibold hover:bg-white 
              hover:text-[#BB86FC] transition text-sm "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Icon
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
