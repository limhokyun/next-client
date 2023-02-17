import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Layout from '@/components/layout';
import { getSortedPostsData } from '@/lib/posts';

const inter = Inter({ subsets: ['latin'] })

export default function Home({allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href="/favicon.ico"/>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getStaticProps() {
//   const data = '';

//   return {
//     props: '123'
//   }
// }

// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }