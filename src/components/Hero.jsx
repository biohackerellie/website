import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Type from './Type';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { me } from '../assets';
import { SectionWrapper } from '../hoc'




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto justify-center`} >
			<div 
			className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-row items-center `}
			>
				<motion.div
				
				animate={{ y: 0 }}
				transition={{ from: 6000, duration: 6 }}
				className= "flex flex-col justify-center items-center ">
					<div className="w-5 h-5 rounded-full bg-[#F5A9B8] animate-bounce" />
					<div className="w-1 sm:h-80 h-40 pink-gradient" />
				</motion.div>
				<motion.div variants={fadeIn("up", "spring",)}>
				
					<h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className="text-[#5BCEFA]">Ellie
					</span></h1>
					<p className={`${styles.heroSubText} mt-2 text-white`} >
					<Type />
					</p>

				</motion.div>		
				<motion.div
				variants={fadeIn("up", "spring",)}
				className="hidden md:block "
				>
				<Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary opacity-90 p-5  px-5 ml-40 rounded-2xl sm:w-[360px] w-full "
      >
			<img 
				src = {me}
				alt = "Ellie"
				className="w-full h-full object-cover rounded-2xl grayscale  green-pink-gradient p-[1px]"
			/>
			</Tilt>
				</motion.div>
			</div>
			
			
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p02">
						<motion.dev 
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>

			</div>
		</section>
  )
}

export default SectionWrapper(Hero)