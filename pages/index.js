import Intro from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import { GraphQLClient, gql } from 'graphql-request'


const Home = ({projects}) => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Work projects={projects}/>
      <Contact />
    </div>
  )
}

export default Home

export const graphcms = new GraphQLClient(
  process.env.GRAPHCMS_PROJECT_API
);

const Query = gql`
query {
  projects {
    id
		title
   	description 
    images {
      url
    }
    website
    code
  }
}
`

export async function getStaticProps() {
  const {projects = Query} = await graphcms.request(Query)

  return {
    props: {
      projects
    }
  }
}
