import * as React from 'react';
import MainFeaturedPost from './MainFeaturedPost';


const postPolitics = {
    title: 'Politics',
    description:
      "Section Politics",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

export default function ComposantPolitics (props)
{
    return ( 
        <main>
      
          <MainFeaturedPost post={postPolitics} />
        
        </main>
    );

}