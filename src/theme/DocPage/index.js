import React from 'react';
import DocPageLayout from '@theme-original/DocPage/Layout';

export default function DocPage(props) {
  return <DocPageLayout {...props} sidebar={null} />; // Force no sidebar
}