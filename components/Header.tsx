import Head from "next/head"
import { Theme } from "./styles/Theme";


export const headerHeight: string = "57px";

export const Header = (props) => {
    return (
        // <header style={{ height: headerHeight, display: "flex", alignItems: "center", backgroundColor: `${Theme.primaryColor}` }}>

        // </header>
        <div>
            <ion-toolbar style={{ borderBottom: "1px solid lightgray", height: `${headerHeight}` }}>
                <ion-title>Header</ion-title>
            </ion-toolbar>
        </div>


    )
}