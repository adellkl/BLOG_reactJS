import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postOpinion = {
    title: 'Opinion',
    description:
      "Section Opinion",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantOpinion (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postOpinion} />
        
        </main>
    );

}