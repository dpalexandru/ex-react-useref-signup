import { useState, useMemo } from 'react'
import Modal from './components/Modal';
//var a liv globale
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*`()_-+=[]{}|;:'\",.<>?/~";

function App() {
  // stati 
  const [nomeCompleto, setNomecompleto] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [esperienza, setEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")
  const [errore, setErrore] = useState("");


  console.log("render")

  function handleSubmit(e) {
    e.preventDefault()
    if (
      !nomeCompleto.trim() ||
      !username.trim() ||
      !password.trim() ||
      !esperienza ||
      !descrizione.trim()
    ) {
      setErrore("Compila tutti i campi");
      console.log("Compila tutti i campi prima di continuare");
      return;
    }

    if (Number(esperienza) < 0) {
      setErrore("Non puoi inserire un numero negativo nel campo esperienza!");
      return;
    }

    if (!specializzazione) {
      setErrore("Seleziona una specializzazione!");
      return;
    }

    //per il momento raccolgo tutti i dati solo per stamparli 
    console.log({
      nomeCompleto,
      username,
      password,
      esperienza,
      specializzazione,
      descrizione
    });
  }

  //controllo in tempo reale username 
  const isUsernameValid = useMemo(() => {
    const isValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return isValid && username.length >= 6

  }, [username])


  return (
    <>
      <header><h1>Welocome Dev! </h1></header>
      <main>
        <h2 className='intestazione-main'>You can register here</h2>
        <Modal message={errore} onClose={() => setErrore("")} />

        <form onSubmit={handleSubmit}>

          <input type="text"
            placeholder='Your full name...'
            value={nomeCompleto}
            onChange={e => setNomecompleto(e.target.value)}
          />



          <input type="text"
            placeholder='Select your Username...'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          {!isUsernameValid && username.length > 0 && (
            <p className="errore">
              L'username deve avere almeno 6 caratteri e può contenere solo lettere e numeri.
            </p>
          )}


          <input type="password"
            placeholder='Select your Password...'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <select
            value={specializzazione}
            onChange={e => setSpecializzazione(e.target.value)}
          >
            <option value="">Scegli la tua specializzazione</option>
            <option value="full_stack">Full stack</option>
            <option value="frontend">Frontend</option>
            <option value="beckend">Beckend</option>
          </select>

          <input type="number"
            placeholder='Anni di esperienza'
            value={esperienza}
            onChange={e => setEsperienza(e.target.value)}
          />

          <textarea
            placeholder='Inserisci una tua breve descrizione...'
            value={descrizione}
            onChange={e => setDescrizione(e.target.value)}
            rows={4}
          >
          </textarea>

          <button type='submit'>Send</button>

        </form>




      </main>

    </>
  )
}

export default App
