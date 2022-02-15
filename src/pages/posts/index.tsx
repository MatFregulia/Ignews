import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client'

import { getPrismicCLient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março 2021</time>
                        <strong>auigajgaahfjahf akighajghjahg akjghajghjgag</strong>
                        <p>Teste, teste teste Teste, teste teste Teste, teste teste Teste, teste teste Teste, teste teste</p>
                    </a>
                    <a href="#">
                        <time>12 de março 2021</time>
                        <strong>auigajgajgag</strong>
                        <p>Teste, teste teste</p>
                    </a>
                    <a href="#">
                        <time>12 de março 2021</time>
                        <strong>auigajgajgag</strong>
                        <p>Teste, teste teste</p>
                    </a>
                    <a href="#">
                        <time>12 de março 2021</time>
                        <strong>auigajgajgag</strong>
                        <p>Teste, teste teste</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicCLient();

    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    console.log(response);

    return {
        props: {}
    };
}