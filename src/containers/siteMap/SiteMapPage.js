import React from 'react';
import sitemapImg from '../../assets/images/site-map.png';
import './SiteMapPage.css';

const SiteMapPage = () => (
  <div className="c-sitemap-layout">
    <div className="c-sitemap-img"><img src={ sitemapImg } alt="Site Map" title="NAS Client Portal Site Map" /></div>
  </div>
);
 
export default SiteMapPage;