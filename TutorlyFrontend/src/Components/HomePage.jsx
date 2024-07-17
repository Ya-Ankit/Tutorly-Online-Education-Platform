import React from 'react';
import QuotePage from './QuotePage';
import SlidePage from './SlidePage';
import Banner from './Banner';
import ThreeBlock from './ThreeBlock';
import Testimonial from './Testimonial';
import BannerTwo from './BannerTwo';
import About from './About';

export const HomePage = () => {
  return (
    <div>
        <QuotePage/>
       <SlidePage/>
       <Banner/>
       <ThreeBlock/>
       <Testimonial/>
       <BannerTwo/>
       <About/>
    </div>
  )
}
