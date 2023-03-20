import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postScience = {
    title: 'Science',
    description:
      "Section Science",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantScience (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postScience} />
        
        </main>
    );

}