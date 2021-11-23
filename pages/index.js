import Intro from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import { GraphQLClient } from 'graphql-request'
import { gql } from 'graphql-request'

export const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw7v5jzu0gr501w3hi3m7jf3/master'
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
      website {
        raw
      }
      code {
        raw
      }
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


const Home = ({projects}) => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Work projects={projects}/>
    </div>
  )
}

export default Home
