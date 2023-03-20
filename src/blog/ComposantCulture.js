import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postCulture = {
    title: 'Culture',
    description:
      "Section Culture",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantCulture (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postCulture} />
        
        </main>
    );

}