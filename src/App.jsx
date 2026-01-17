import { useState } from 'react'
import './App.css'
import languages from "../react-use-state-assets/languages"

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>

      <nav className="pt-1 ps-2">
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
                  {/*in setSelectedIndex vado a scrivere, ovvero, QUANDO CLICCO, MI CAMBI IL VALORE DI selectedIndex, prendendo come valore index...che vado a prendere dal 
                    ciclo map() che me lo passa come parametro. Quindi ogni volta che clicco, prendo l'indice dell'elemento cliccato.*/}
                })
              }

            </ul>


          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>

              {selectedIndex >= 0 ? /*attenzione al ternario ==> se la prima condizione è verificata allora svolgi il codice , altrimenti svolgi l'altro (dopo i due punti)*/
                <div className="card-body">
                  <h2 className="card-title">
                    {languages[selectedIndex].title}
                  </h2>
                  <p className="card-text">
                    {languages[selectedIndex].description}
                  </p>
                  <img className="image" src={languages[selectedIndex].img} alt="logo" />
                </div>
                : <div className="card-body"><h2 className="card-title">Non è stato selezionato nessun linguaggio</h2></div>
              }


              {/*MA QUINDI SI PUO UTILIZZARE UN COMPONENTE PER LA CARD E UN COMPONENTE PER IL BOTTONE, MA PASSANDO LE PROPS DAL PADRE? IN MODO CHE PRENDANO LE INFO DALLA PAGINA DEL PADRE
              ATTENZIONE! DEVI FAR PASSARE ANCHE LA FUNZIONE COME PROP, PERCHE' AL COMPONENTE ESTERNO DEVO PASSARGLI ANCHE LA FUNZIONE (DEL PADRE) DA CHIAMARE.*/}


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
