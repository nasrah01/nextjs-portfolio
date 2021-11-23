import { GrGraphQl } from 'react-icons/gr'
import { DiJavascript1, DiReact, DiSass } from 'react-icons/di'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const Skills = () => {

  return (
    <div>
      <h2>Tech stack</h2>
      <h3>Programming languages and frameworks I use</h3>
      <div className='flex flex-row flex-wrap'>
        {
          stackList.map(function(item, index) {
            return (
              <div key={index}>
              <item.icon />
              <p>{item.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills


const stackList = [
  {
    icon: DiJavascript1,
    title: 'Javascript'
  },
  {
    icon: DiReact,
    title: 'React.js'
  },
  {
    icon: SiNextdotjs,
    title: 'Next.js'
  },
  {
    icon: DiSass,
    title: 'SCSS'
  },
  {
    icon: SiTailwindcss,
    title: 'Tailwindcss'
  },
  {
    icon: GrGraphQl,
    title: 'Graphql'
  }
];