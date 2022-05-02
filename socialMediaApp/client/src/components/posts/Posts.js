import React from 'react'
import Post from './post/post'
import useStyles from './styles'

const posts = () => {
  const classes = useStyles()
  return (
   <>
   <h1>POSTS</h1>
   <Post/>
   </>
    
  )
}

export default posts