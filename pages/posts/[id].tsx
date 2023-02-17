import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({postData}: any) {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>);
}

export async function getStaticPaths() {
    //return a list of possible value of id 
    const paths = getAllPostIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params} : any) {
    //fetch necessary data for the blog post using params. id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}
