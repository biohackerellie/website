import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Systems Administrator',
					'C++ Game Developer',
					'Front End Developer',
					'Artist',
					'Musician',
					'Nerd',
				],

				delay: 50,
				autoStart: true,

				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;

('Systems Administrator, <br /> C++ Game Developer, <br /> Front End Developer, <br /> Artist, <br /> Musician <br /> Nerd');
