import Head from 'next/head';
import React from 'react';

export default function SearchEngine({ title }) {
  return (
    <Head>
      <title>
        {title
          ? `${title} - Winzoy Group`
          : `Winzoy Group - Migration Agent & Education Consultants`}
      </title>
      <link rel="icon" type="image/x-icon" href="/images/logo/LOGO R.png" />
    </Head>
  );
}
