import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './HomeStyles.css';
import CarouselPage from './CarouselPage';
import NoticeTicker from './NoticeTicker';
import Gallery from './Gallery';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      
    });
  }, []); 

  const leftNotices = [
    { title: 'Hostelers are not allowed to takes the plates from mess to their rooms', link: 'https://example.com/notice1' },
    
  ];

  const rightNotices = [
    { title: 'The mess bill of this month has been updated', link: 'https://example.com/event' },
    
  ];

  return (
    <div className='home'>
      <div className="home-main-content" data-aos="fade-up">
        <CarouselPage />
      </div>
      <div className='notice-head' data-aos="fade-up">
        <h1>--Notice--</h1>
        <div className='scr'>
          <NoticeTicker
            leftTitle="Brahmaputa"
            leftNotices={leftNotices}
            rightTitle="Ganga"
            rightNotices={rightNotices}
          />
        </div>
      </div>
      <div className="home-sidebar" data-aos="fade-up">
        
      </div>
      <div className="home-gallery" data-aos="fade-up">
        <Gallery />
      </div>
    
      <footer className="home-footer" data-aos="fade-up">
        <div className="contact-us">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Home;
