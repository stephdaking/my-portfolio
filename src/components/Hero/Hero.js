import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				Thank you for stopping by! Below you will be able to see some information about me and my
				projects, as well as their source code and a preview if it is available. These projects are
				currently made using technologies such as HTML, CSS, Javascript, jQuery, React, Node.js,
				Express,js, and SQL
			</SectionText>
			<Button onClick={() => (window.location = 'https://google.com')}>Learn More</Button>
		</LeftSection>
	</Section>
)

export default Hero
