import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import globalStyle from 'styles/common.scss';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = ({
  description, title, url, ogImage
}) => (
  <NextHead>
    <title>
      { title || '' }
    </title>
    <meta charSet="UTF-8" />
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta property="og:description" content={description || defaultDescription} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
  </NextHead>
);

Head.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  ogImage: string.isRequired
};

export default Head;
