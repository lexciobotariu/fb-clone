import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      
      <Post 
      profilePic="https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/81558848_10214297674470148_4484602763681988608_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=zOXeXdLv1FMAX_1_RC4&_nc_oc=AQnV-72whxv3KTzo1d3gNuR2JpZy-wJaYISGKJGmYidwwklLXMtApGsKuMX9v7WTHPo&_nc_ht=scontent.flhr3-1.fna&oh=417e06eab9915b79207c6ce39feb1eee&oe=5FA0A3FD"
      message="This is really working"
      timestamp="6 Oct 2020"
      username="Lex Ciobotariu"
      image="https://specials-images.forbesimg.com/imageserve/5f302109ffad89f9130e07db/960x0.jpg?cropX1=0&cropX2=4800&cropY1=243&cropY2=2943"
      
      />
      <Post 
      profilePic="https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/81558848_10214297674470148_4484602763681988608_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=zOXeXdLv1FMAX_1_RC4&_nc_oc=AQnV-72whxv3KTzo1d3gNuR2JpZy-wJaYISGKJGmYidwwklLXMtApGsKuMX9v7WTHPo&_nc_ht=scontent.flhr3-1.fna&oh=417e06eab9915b79207c6ce39feb1eee&oe=5FA0A3FD"
      message="This is really working"
      timestamp="6 Oct 2020"
      username="Lex Ciobotariu"
      
      />
    </div>
  )
}

export default Feed
