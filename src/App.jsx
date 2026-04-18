import { useState, useEffect } from 'react';
import axios from "axios";
import ListaAttori from './components/ListaAttori'
import ListaAttrici from './components/ListaAttrici';

function App() {

  const [attori, setAttori] = useState([]);
  const [attrici, setAttrici] = useState([]);

  function fetchAttori() {
    axios.get('https://lanciweb.github.io/demo/api/actors/')
      .then(response => setAttori(response.data))
      .catch(error => console.error("Errore nel caricamento della lista degli attori ", error))
  }

  function fetchAttrici() {
    axios.get('https://lanciweb.github.io/demo/api/actresses/')
      .then(response => setAttrici(response.data))
      .catch(error => console.error("Errore nel caricamento della lista delle attrici ", error))
  }

  useEffect(() => {
    fetchAttori();
    fetchAttrici()
  }, [])

  return (
    <div className="container">
      <ListaAttori attori={attori} />
      <hr />
      <ListaAttrici attrici={attrici} />
    </div>

  )
}

export default App
