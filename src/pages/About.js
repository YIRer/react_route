import React from 'react'
import queryString from 'query-string';

const About = ({location, match}) =>{
  const query = queryString.parse(location.search)
  console.log(query);
  const detail = query.detail !== undefined;
  return (
    <div>
      <h2>
        About {match.params.name}
        {detail && `detail ShoW ${query.detail}`}
      </h2>
    </div>  
  )
}


export default About;
