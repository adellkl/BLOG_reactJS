import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postTravel = {
    title: 'Travel',
    description:
      "Section Travel",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantTravel (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postTravel} />
        
        </main>
    );

}