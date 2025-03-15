import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Subscription.scss';

function Subscription() {
  return (
    <div>
      <div className="subscription-page">
        <h1>Subscribe Now & Start Streaming</h1>
        <div className="plans mt-5">
          {/* Basic Plan */}
          <div className="plan">
            <h2>Basic Plan</h2>
            <ul>
              <li>Watch on 1 Device</li>
              <li>Limited Downloads</li>
              <li>Standard SD (360p)</li>
            </ul>
            <div className="price">₹199 / Monthly</div>
          </div>

          {/* Standard Plan */}
          <div className="plan">
            <h2>Standard Plan</h2>
            <ul>
              <li>Watch on 2 Devices</li>
              <li>Unlimited Downloads</li>
              <li>HD (720p)</li>
            </ul>
            <div className="price">₹399/ Monthly</div>
          </div>

          {/* Premium Plan */}
          <div className="plan">
            <h2>Premium Plan</h2>
            <ul>
              <li>Watch on 4 Devices</li>
              <li>Multi-User Profiles</li>
              <li>Offline Viewing (Ad-Free)</li>
            </ul>
            <div className="price">₹999/ Monthly</div>
          </div>
        </div>

        <div className="actions">
          <Link to="/pay" className="button subscribe-button">
            Subscribe Now
          </Link>
          <Link to="/Imageslider" className="button free-trail">
            Start Free Trial
          </Link>
        </div>
      </div>
      
    </div>
    
  );
}

export default Subscription;
