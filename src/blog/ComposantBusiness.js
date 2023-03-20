import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postBusiness = {
    title: 'Business',
    description:
      "Section Business",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantBusiness (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postBusiness} />
        
        </main>
    );

}