import React from 'react'

const Post = ({match,location}) =>{
  console.log(location)
  return (
    <div>
      포스트 {match.url} <br />
      포스트 {match.path} <br />
      포스트 {location.pathname}<br />
      포스트 {location.search}

    </div>
  )
}

export default Post;