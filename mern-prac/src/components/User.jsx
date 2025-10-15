import React from 'react'

const User = ({name, department, Skills, Projects}) => {
  return (
    <div>
        <h1>I am {name} from {department}
        </h1>
        <ol>
            {Skills.map((skill)=>(
                <li>{skill}</li>
            ))}
        </ol>
        {Projects.map((project)=>(
            <li>{project}</li>
        ))}
    </div>
  )
}

export default User