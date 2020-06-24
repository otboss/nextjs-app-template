import Head from 'next/head'
import { Header } from '../components/Header'
import { GlobalContext } from '../components/GlobalContext'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <GlobalContext>
      <Layout>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ion-card style={{ width: "300px", padding: "20px" }}>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </ion-card-content>
          </ion-card>
          <ion-card style={{ width: "300px", padding: "20px" }}>
            <ion-card-header>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </ion-card-content>
          </ion-card>
        </div>
      </Layout>
    </GlobalContext>
  )
}
