import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postDesign = {
    title: 'Design',
    description:
      "Section Design",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantDesign (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postDesign} />
        
        </main>
    );

}