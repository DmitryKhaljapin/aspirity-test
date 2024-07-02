import { LayoutProps } from './Layout.props';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main' ;
import styles from './Layout.module.css';
import { FunctionComponent } from 'react';

const Layout = ({ children }:LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main>{children}</Main>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    }
}