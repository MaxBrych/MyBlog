import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout'
import { siteTitle } from '../../components/layout';

export default function FirstPost() {
    return( 
    <Layout>
    <Head>
        <title>{siteTitle}</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
    />
    <Image 
    src="/images/me.jpg" 
    alt="Portrait"
    height={144}
    width={144}
    />
    <h1>First Post</h1>
    <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>
    </Layout>
    )
  }