import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {SessionProvider} from 'next-auth/react'

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}: AppProps) {
  return (
    <>
    <SessionProvider session={session}>
      <Head>
        <title>Skill Connect</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>
  )
}
