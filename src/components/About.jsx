import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div 
				variants={fadeIn("right", "spring", 0.5 * 
				index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} 
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
				</div>
			</motion.div>

		</Tilt>
	)
}


const About = () => {
  return (
    <>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					Introduction</p>
				<h2 className={styles.sectionHeadText}>
					Overview.</h2>
			</motion.div>
			<motion.p 
				variants={fadeIn("", "", 0.1, 1)}
				className= "mt-4 ml-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I've spent the last decade of my career working in the tech industry from hardware repair to software development and network administration.
				When I'm not working on new code or firing up new docker containers in my home lab, I'm usually busy with my passions in music production and playing video games! Basically you can call me a nerd 🤷‍♀️
				I have a combined 10 years experience working with Powershell, Linux, Windows Server, Ableton Live, Docker, and more!
				I'm passionate about tech and that passion has lead to a shift from administration to development, where I get to use my love for technology as a creative outlet.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index=
					{index} {...service} />
				))}

			</div>
		</>
  )
}

export default About