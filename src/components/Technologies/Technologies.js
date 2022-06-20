import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle
} from '../../styles/GlobalComponents'
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle
} from './TechnologiesStyles'

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development world. I
			have worked with Front-End, Back-End, Design, and Databases. I pride
			myself in keeping up to date with current technologies and being
			versatile.
		</SectionText>
		<List>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with: <br />
						React.js <br />
						Angular.js <br />
						Next.js <br />
						HTML 5 <br />
						CSS 3
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with: <br />
						Node.js <br />
						Express.js <br />
						MySQL <br />
						NoSQL <br />
						Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Tools</ListTitle>
					<ListParagraph>
						Experience with: <br />
						JQuery <br />
						Bootstrap <br />
						APIs
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
)

export default Technologies
