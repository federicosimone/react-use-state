import { useState } from 'react'
import './App.css'

const languages = [
  {
    id: 1,
    title: "HTML",
    description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
  },
  {
    id: 2,
    title: "CSS",
    description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
  },
  {
    id: 3,
    title: "JavaScript",
    description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
  },
  {
    id: 4,
    title: "Node.js",
    description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
  },
  {
    id: 5,
    title: "Express",
    description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
  },
  {
    id: 6,
    title: "ReactJS",
    description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
  }
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)




  return (
    <>

      <nav>
        <h1>Learn Web Development</h1>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <ul className="d-flex list-unstyled gap-3">

              {
                languages.map((language, index) => {

                  let selected = selectedIndex == index ? "yellow" : "";
                  return <li key={language.id}><button className={`btn btn-primary ${selected}`} onClick={() => setSelectedIndex(() => index)}>{language.title}</button></li>
                })
              }
            </ul>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h2 className="card-title">
                  {languages[selectedIndex].title}
                </h2>
                <p className="card-text">
                  {languages[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >


      {/*<button onClick={() => setIndex((index) => index)}>
        count is {index}
      </button>*/}

    </>
  )
}

export default App
