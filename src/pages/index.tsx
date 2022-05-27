import Head from 'next/head';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giveth Info</title>
      </Head>
      <Body>
        <Header/>
        <Footer/>
      </Body>
    </>
  )
}

const Body = styled.body`
  display:flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`
