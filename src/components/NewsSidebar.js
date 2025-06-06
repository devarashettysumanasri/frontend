import React from 'react';
import './NewsSidebar.css';
import { BsInfoSquareFill } from 'react-icons/bs';

const NewsSidebar = () => {
  return (
    <div className="news-sidebar-card">
      <div className="news-header">
        <h4>EventHub News</h4>
        <BsInfoSquareFill />
      </div>
      <ul className="news-list">
        <li>
          <h5>Top Tech Events in Q4</h5>
          <span>Top news • 1,204 readers</span>
        </li>
        <li>
          <h5>Hybrid Events are Here to Stay</h5>
          <span>2d ago • 890 readers</span>
        </li>
        <li>
          <h5>Networking Tips for Introverts</h5>
          <span>4d ago • 2,410 readers</span>
        </li>
      </ul>
    </div>
  );
};

export default NewsSidebar;