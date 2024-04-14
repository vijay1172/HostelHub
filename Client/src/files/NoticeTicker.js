import React from 'react';
import './NoticeTicker.css';

const NoticeTicker = ({ leftTitle, leftNotices, rightTitle, rightNotices }) => {
  return (
    <div className="notice-ticker-container">
      <div className="notice-section">
        <h2 className="notice-heading">{leftTitle}</h2>
        <div className="notice-ticker">
          <ul>
            {leftNotices &&
              leftNotices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <a href={notice.link} target="_blank" rel="noopener noreferrer">
                    {notice.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="notice-section">
        <h2 className="notice-heading">{rightTitle}</h2>
        <div className="notice-ticker">
          <ul>
            {rightNotices &&
              rightNotices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <a href={notice.link} target="_blank" rel="noopener noreferrer">
                    {notice.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;