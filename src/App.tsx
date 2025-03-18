import React from "react"
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFooter,
} from "@ionic/react"
import "@ionic/react/css/core.css"

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <h3>Welcome, Mandiudza Tatenda</h3>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent style={{ "--ion-background-color": "#800080" }}>
      <h1>Welcome to Bootcamp</h1>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle>
          <h3>Day 1 Assignment</h3>
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  </IonApp>
)

export default App
