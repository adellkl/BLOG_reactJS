import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postStyle = {
    title: 'Style',
    description:
      "Section Style",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantStyle (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postStyle} />
        
        </main>
    );

}