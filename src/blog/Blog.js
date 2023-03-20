import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './Footer';
import Header from './Header';
import ComposantHome from './ComposantHome';
import ComposantTechnology from './ComposantTechnology';
import ComposantDesign from './ComposantDesign';
import ComposantCulture from './ComposantCulture';
import ComposantBusiness from './ComposantBusiness';
import ComposantPolitics from './ComposantPolitics';
import ComposantOpinion from './ComposantOpinion';
import ComposantScience from './ComposantScience';
import ComposantHealth from './ComposantHealth';
import ComposantStyle from './ComposantStyle';
import ComposantTravel from './ComposantTravel';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Technology', url: '/technology' },
  { title: 'Design', url: '/design' },
  { title: 'Culture', url: '/culture' },
  { title: 'Business', url: '/business' },
  { title: 'Politics', url: '/politics' },
  { title: 'Opinion', url: '/opinion' },
  { title: 'Science', url: '/science' },
  { title: 'Health', url: '/health' },
  { title: 'Style', url: '/style' },
  { title: 'Travel', url: 'travel' },
];



const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ComposantHome/>}/>
            <Route exact path="/technology" element={<ComposantTechnology/>}/>
            <Route exact path="/design" element={<ComposantDesign/>}/>
            <Route exact path="/culture" element={<ComposantCulture/>}/>
            <Route exact path="/Business" element={<ComposantBusiness/>}/>
            <Route exact path="/politics" element={<ComposantPolitics/>}/>
            <Route exact path="/opinion" element={<ComposantOpinion/>}/>
            <Route exact path="/science" element={<ComposantScience/>}/>
            <Route exact path="/health" element={<ComposantHealth/>}/>
            <Route exact path="/style" element={<ComposantStyle/>}/>
            <Route exact path="/travel" element={<ComposantTravel/>}/>
          </Routes>
        </BrowserRouter>


        
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}