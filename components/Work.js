import Image from 'next/image'

const Work =({projects}) => {
  console.log(projects)

  return (
    projects.map((item, index) => {
      console.log(item);
      return (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      )
    })
  )
}

export default Work