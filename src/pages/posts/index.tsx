import Head from 'next/head';
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