import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

import css from './index.module.scss';

export default function LayoutPage({children, headerTheme}: {children: React.ReactNode, headerTheme: 'light' | 'dark'}) {
    return (
        <div className={css.layout_page}>
            <div className={css.header_wrapper}>
                <Header theme={headerTheme}/>
            </div>
            <main className={css.main}>
                {children}
            </main>
            <div className={css.footer_wrapper}>
                <Footer/>
            </div>
        </div>
    )
}