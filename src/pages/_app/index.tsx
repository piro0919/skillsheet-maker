/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import '../../styles/globals.scss';
import 'ress';

export type MyAppProps = AppProps;

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>スキルシートメーカー</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
