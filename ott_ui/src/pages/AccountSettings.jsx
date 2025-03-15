import React from 'react'
import './AccountSettings.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';
function AccountSettings() {
  return (
    <div>
      <div className="Profile1">
        <div className="icon1">
           <FontAwesomeIcon  icon={faUser} size='3x'/>
         <h3>Krish</h3>
            </div>
            <div className="one">
                <div className="one1">
                <h4>Krish@18gmail.com</h4>
                </div>
                <br />
                <div className="one2">
                <h4>***********</h4>
                </div>
                <br />
                <div className="one3">
                <h4>Subscription Details</h4>
                </div>
                <br />    
                <div className="one4">
                <h4>Expiry Of Subscription</h4> 
                </div>
                <br />
                <Link to="/Profile1">
                <CustomButton className="fw-bold" label="BACK" type="submit" color="primary"/>
                </Link>
            </div>
         </div>
    </div>
  )
}

export default AccountSettings

