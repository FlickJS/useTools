import Header from "./Header";
import Footer from "./Footer";
import styles from './layout.module.css';


type LayoutProps = {
    children: React.ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <Header />
            <div className={styles.content}>
                {children}
            </div>
        <Footer />
        </>
    );
}

 export default Layout;       