import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles'

const data = [
	{ number: 25, text: 'Repositories' },
	{ number: 1, text: 'Solo Project' },
	{ number: 1, text: 'Group Client Project' },
	// { number: 5000, text: 'Github Stars' }
]

const Accomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
)

export default Accomplishments
