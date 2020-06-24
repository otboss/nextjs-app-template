import Head from "next/head";
import { ApolloClient } from "../misc/ApolloClient";
import { ApolloProvider } from "react-apollo";


export const GlobalContext = (props) => {
    return (
        <ApolloProvider client={ApolloClient}>
            <style jsx global>
                {`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }

                    * {
                    box-sizing: border-box;
                    }
                `}
            </style>
            <Head>
                <script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
                <script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
            </Head>
            {props.children}
        </ApolloProvider>
    );
}