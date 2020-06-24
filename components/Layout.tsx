import { Header, headerHeight } from "./Header";
import { GlobalContext } from "./GlobalContext";
import { Footer } from "./Footer";

export const Layout = (props) => {
    return (
        <GlobalContext>
            <Header />
            <div style={{ maxHeight: `calc(100vh - ${headerHeight})`, overflow: "auto" }}>
                <div style={{ minHeight: `calc(100vh - ${headerHeight})` }}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </GlobalContext>
    );
}