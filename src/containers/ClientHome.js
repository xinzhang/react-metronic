import React from 'react';
import { Link } from 'react-router-dom';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const ClientHome = () => (
  <div>
    <ul>
        <li><Link to='/home/account-summary'>Account Summary</Link></li>
        <li><Link to='/home/order-pad'>Order Pad</Link></li>
        <li><Link to='/home/fund-summary'>Pricing</Link></li>
        <li><Link to='/home/epds'>EPDS</Link></li>
    </ul>
  </div>
);

export default ClientHome;
