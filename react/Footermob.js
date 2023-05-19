import React, { useState } from 'react';
import styles from './footermob.css'

const Footermob = ({ shopLinks, aboutLinks, helpLinks }) => {
  const [showShopLinks, setShowShopLinks] = useState(false);
  const [showAboutLinks, setShowAboutLinks] = useState(false);
  const [showHelpLinks, setShowHelpLinks] = useState(false);

  /*const footerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };

  const footerColumnStyle = {
    marginRight: '50px',
    display: 'flex',
    flexDirection: 'column',
  };

  const listItemStyle = {
    listStyle: 'none',
    marginBottom: '10px',
  };

  const itemsStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const headingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    justifyContent : 'space-between'
  };

  const headingStyle = {
    marginLeft: '10px',
  };

  const plusMinusIconStyle = {
    cursor: 'pointer',
    marginLeft: '5px',
  };*/
  const headingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    justifyContent : 'space-between'
  };

  const toggleShopLinks = () => {
    setShowShopLinks(!showShopLinks);
    setShowAboutLinks(false);
    setShowHelpLinks(false);
  };

  const toggleAboutLinks = () => {
    setShowShopLinks(false);
    setShowAboutLinks(!showAboutLinks);
    setShowHelpLinks(false);
  };

  const toggleHelpLinks = () => {
    setShowShopLinks(false);
    setShowAboutLinks(false);
    setShowHelpLinks(!showHelpLinks);
  };

  return (
    <div className={styles.footerContainerStyle} >
      <div className={styles.footerColumnStyle }>
      <div className={styles.headingContainerStyle}> 
      <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
        <h2 className={styles.headingStyle}>Shop</h2>
        <div onClick={toggleShopLinks} className={styles.plusMinusIconStyle}>
        <div style={{ marginTop: '30px'}}>
          {showShopLinks ? '-' : '+'}
          </div>
          </div>
        </div>
        
        {showShopLinks && (
          <ul>
            {shopLinks?.map((link) => (
              <li key={link.url} className={styles.listItemStyle}>
                <a href={link.url} className={styles.itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.footerColumnStyle }>
      <div className={styles.headingContainerStyle}>
      <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
        <h2 className={styles.headingStyle}>About</h2>
        <div onClick={toggleAboutLinks}className={styles.plusMinusIconStyle}>
        <div style={{marginLeft: '240px', marginTop: '30px'}}>
          {showAboutLinks ? '-' : '+'}
          </div>
          </div>
        </div>
        </div>
        {showAboutLinks && (
          <ul>
            {aboutLinks?.map((link) => (
              <li key={link.url} className={styles.listItemStyle}>
                <a href={link.url} className={styles.itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.footerColumnStyle }>
      <div className={styles.headingContainerStyle}>
      <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
        <h2 className={styles.headingStyle}>Help</h2>
        <div onClick={toggleHelpLinks} className={styles.plusMinusIconStyle}>
        <div style={{ marginTop: '30px'}}>
          {showHelpLinks ? '-' : '+'}
          </div>
          </div>
        </div>
        </div>
        </div>
        {showHelpLinks && (
          <ul>
            {helpLinks?.map((link) => (
              <li key={link.url} className={styles.listItemStyle}>
                <a href={link.url} className={styles.itemsStyle}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

Footermob.schema={
  "title": "MobileFooter",
  "type": "object",
  "properties": {
    "shopLinks": {
      "title": "Shop Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "Our Artists",
          "url": "#"
        },
        {
          "text": "Jewelry",
          "url": "#"
        },
        {
          "text": "Fashion",
          "url": "#"
        },
        {
          "text": "Music",
          "url": "#"
        },
        {
          "text": "Literature",
          "url": "#"
        },
        {
          "text": "For Your Home",
          "url": "#"
        }
      ]
    },
    "aboutLinks": {
      "title": "About Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "Our Story",
          "url": "#"
        },
        {
          "text": "Press",
          "url": "#"
        },
        {
          "text": "Contact Us",
          "url": "#"
        }
      ]
    },
    "helpLinks": {
      "title": "Help Links",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "title": "Link Text",
            "type": "string"
          },
          "url": {
            "title": "Link URL",
            "type": "string"
          }
        }
      },
      "default": [
        {
          "text": "FAQ",
          "url": "#"
        },
        {
          "text": "Returns & Exchanges",
          "url": "#"
        },
        {
          "text": "Shipping & Delivery",
          "url": "#"
        }
      ]
    }
  }
}


export default Footermob;
