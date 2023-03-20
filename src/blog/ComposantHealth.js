import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postHealth = {
    title: 'Health',
    description:
      "Section Health",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantHealth (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postHealth} />
        
        </main>
    );

}