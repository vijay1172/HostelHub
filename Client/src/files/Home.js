import React from 'react';
import './HomeStyles.css';
import CarouselPage from './CarouselPage';
import NoticeTicker from './NoticeTicker';
import Gallery from './Gallery';
import Footer from './Footer';

function Home() {
  const leftNotices = [
    { title: 'Hostelers are not allowed to takes the plates from mess to their rooms', link: 'https://example.com/notice1' },
    { title: 'Notice 2', link: 'https://example.com/notice2' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    // Add more notices as needed
  ];

  const rightNotices = [
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'Brahmaputra', link: 'https://example.com/event' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    { title: 'saare ladke pagal hai...mess wale saavdhan ', link: 'https://example.com/update' },
    // Add more notices as needed
  ];

  return (
    <div className='home'>
      <div className="home-main-content">
        
        <CarouselPage />
      </div>
      <div className='notice-head'>
        <h1>--Notice--</h1>
       <div className='scr'>
      <NoticeTicker className="tik"
        leftTitle="Brahmaputa"
        leftNotices={leftNotices}
        rightTitle="Ganga"
        rightNotices={rightNotices}
      />
    </div>
      </div>
      <div className="home-sidebar">
        {/* Sidebar content */}
      </div>
      <div className="home-gallery">
        <Gallery />
      </div>
      {/* Footer Section */}
      <footer className="home-footer">
        <div className="contact-us">
          <Footer/>
        </div>
      </footer>
    </div>


    
  );
}

export default Home;