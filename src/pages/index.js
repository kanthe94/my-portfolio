import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Home" description="Simple User Guides for Everyday Products">
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore simple user guides for everyday products.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/wireless-mouse" className="button button--primary">
            Wireless Mouse Guide
          </Link>
          <Link to="/extension-cord" className="button button--primary">
            Extension Cord Guide
          </Link>
          <Link to="/doorbell" className="button button--primary">
            Doorbell Guide
          </Link>
        </div>
      </main>
    </Layout>
  );
}