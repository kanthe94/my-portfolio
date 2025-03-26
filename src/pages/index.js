import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import Font Awesome
import { faMouse, faPlug, faBell, faBasketShopping, faShoppingBag, faShirt, faTShirt, faShop, faTshirt, faFilePdf, faBusinessTime, faRobot, faMessage, faHeadphones, faVirusCovid, faCamera, faCameraAlt, faCameraRetro, faVideoCamera, faMailBulk, faEnvelopeOpenText, faEnvelope, faUmbrella, faArrowAltCircleLeft, faArrowsSplitUpAndLeft, faFileWord } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Instagram from '@theme/Icon/Socials/Instagram';
import { GiRotaryPhone } from "react-icons/gi";
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';

// Define the guides data
const guides = [

  // {
  //   id: 'extension-cord',
  //   title: 'Extension Cord Guide',
  //   description: 'Understand how to safely use and maintain an extension cord.',
  //   link: 'extension-cord',
  //   icon: <FontAwesomeIcon icon={faPlug} />, // Add icon
  // },
  // {
  //   id: 'doorbell',
  //   title: 'Doorbell Guide',
  //   description: 'Discover how to install and fix a doorbell.',
  //   link: 'doorbell',
  //   icon: <FontAwesomeIcon icon={faBell} />, // Add icon
  // },

  {
    id: 'allen-solly',
    title: 'Place an Order on Allen Solly',
    description: 'Learn how to place an order on Allen Solly platform',
    link: 'allen-solly',
    icon: <FontAwesomeIcon icon={faShirt} />, // Add icon
  },
  {
    id: 'gpay-payment-guide',
    title: 'Make Payments Using GPay', 
    description: 'Steps to send money securely using the Google Pay (GPay)',
    link: 'gpay-payment-guide',
    icon: <FontAwesomeIcon icon={faGooglePay} />, // Add icon
  },
  {
    id: 'rotary-phone-guide',
    title: 'Vintage Phone Guide', 
    description: 'Step-by-step instructions for rotary dial phones',
    link: 'rotary-phone-guide',
    icon: <GiRotaryPhone size={40} />, // Add icon
  },
  {
    id: 'saving-word-document',
    title: 'Saving a Document in MS Word', 
    description: 'Learn how to save documents in Microsoft Word',
    link: 'saving-word-document',
    icon: <FontAwesomeIcon icon={faFileWord} />, // Add icon
  },
  {
    id: 'agile-technical-writing',
    title: 'Agile Technical Writing', 
    description: 'The crucial role of documentation in Agile teams',
    link: 'agile-technical-writing',
    icon: <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />, // Add icon
  },
  {
    id: 'kafka-streaming',
    title: 'MQ to Kafka Migration',
    description: 'Outlines the migration from MQ-based messaging to Apache Kafka',
    link: 'kafka-streaming',
    icon: <FontAwesomeIcon icon={faFilePdf} />,
  },
  {
    id: 'business-instagram',
    title: 'Instagram for Business',
    description: 'Strategies to boost brand visibility and customer engagement',
    link: 'business-instagram',
    icon: <FontAwesomeIcon icon={faBusinessTime} />,
  },
  {
    id: 'understanding-chatbots',
    title: 'Chatbots: 24/7 Digital Assistant',
    description: 'Learn how chatbots work in simple terms',
    link: 'understanding-chatbots',
    icon: <FontAwesomeIcon icon={faRobot} />, // Add icon
  },
  {
    id: 'wireless-camera-installation',
    title: 'Security Camera Setup', 
    description: 'Step-by-step wireless camera installation guide',
    link: 'wireless-camera-installation',
    icon: <FontAwesomeIcon icon={faVideoCamera} />, // Add icon
  },
  {
    id: 'email-addon-release-notes',
    title: 'Email Add-On Release Notes', 
    description: 'Discover new features for email plan subscribers',
    link: 'email-addon-release-notes',
    icon: <FontAwesomeIcon icon={faEnvelope} />, // Add icon
  },
  {
    id: 'covid-growth-reflection',
    title: 'COVID Growth Reflections', 
    description: 'Personal and professional lessons from the pandemic era',
    link: 'covid-growth-reflection',
    icon: <FontAwesomeIcon icon={faVirusCovid} />, // Add icon
  },
  {
    id: 'wireless-mouse',
    title: 'Wireless Mouse Guide',
    description: 'Learn how to use and troubleshoot a wireless mouse',
    link: 'wireless-mouse',
    icon: <FontAwesomeIcon icon={faMouse} />, // Add icon
  },
];

export default function Home() {
  return (
    <Layout title="Home" description="Simple User Guides for Everyday Products">
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.subtitle}>Explore simple user guides for everyday products.</p>
        <div className={styles.grid}>
          {/* Render the guides as clickable cards */}
          {guides.map((guide) => (
            <a
              key={guide.id}
              href={guide.link}
              className={styles.card}
            >
              <div className={styles.icon}>{guide.icon}</div>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
}