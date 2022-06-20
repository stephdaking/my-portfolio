import Accomplishments from '../components/Accomplishments/Accomplishments'
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/TimeLine/TimeLine'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<br />
			<Timeline />
			<Projects />
			<Technologies />
			<Accomplishments />
		</Layout>
	)
}

export default Home