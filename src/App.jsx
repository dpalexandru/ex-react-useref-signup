import { useState, useMemo, useRef } from 'react'
import Modal from './components/Modal';
//var a liv globale
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*`()_-+=[]{}|;:'\",.<>?/~";

function App() {
  // stati 
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [descrizione, setDescrizione] = useState("")
  const [errore, setErrore] = useState("");
  // ref
  const esperienzaRef = useRef(null);
  const specializzazioneRef = useRef(null);
  const nomeCompletoRef = useRef(null);




  console.log("render")

  function handleSubmit(e) {
    e.preventDefault()

    const esperienzaValue = esperienzaRef.current.value;
    const specializzazioneValue = specializzazioneRef.current?.value;
    const nomeCompletoValue = nomeCompletoRef.current.value;


    if (
      !nomeCompletoValue.trim() ||
      !username.trim() ||
      !password.trim() ||
      !descrizione.trim() ||
      !isDescriptionValid ||
      !isPasswordValid ||
      !isUsernameValid
    ) {
      setErrore("Compila tutti i campi");
      console.log("Compila tutti i campi prima di continuare");
      return;
    }

    if (Number(esperienzaValue) < 0) {
      setErrore("Non puoi inserire un numero negativo nel campo esperienza!");
      return;
    }

    if (!specializzazioneValue) {
      setErrore("Seleziona una specializzazione!");
      return;
    }

    if (!esperienzaValue) {
      setErrore("Inserisci anni esperienza please!");
      return;

    }


    //per il momento raccolgo tutti i dati solo per stamparli 
    console.log({
      nomeCompletoValue,
      username,
      password,
      esperienzaValue,
      specializzazioneValue,
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

  //controllo in tempo reale password
  const isPasswordValid = useMemo(() => {
    const hasMinLength = password.length >= 8;
    const hasNumber = password.split("").some(char => numbers.includes(char));
    const hasSymbol = password.split("").some(char => symbols.includes(char));
    const hasLetter = password.split("").some(char =>
      letters.includes(char.toLowerCase())
    );

    return hasMinLength && hasNumber && hasSymbol && hasLetter;
  }, [password]);

  //controllo in tempo reale password
  const isDescriptionValid = useMemo(() => {
    const hasMinLength = descrizione.trim().length >= 100;
    const hasMaxLength = descrizione.trim().length <= 1000

    return hasMinLength && hasMaxLength
  }, [descrizione]);



  return (
    <>
      <header><h1>Welocome Dev! </h1></header>
      <main>
        <h2 className='intestazione-main'>You can register here</h2>
        <Modal message={errore} onClose={() => setErrore("")} />

        <form onSubmit={handleSubmit}>

          <input type="text"
            placeholder='Your full name...'
            ref={nomeCompletoRef}
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
          {isUsernameValid && username.length > 0 && (
            <p className="successo">
              ✓ Username valido!
            </p>
          )}


          <input type="password"
            placeholder='Select your Password...'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {!isPasswordValid && password.length > 0 && (
            <p className="errore">
              La password deve avere almeno di 8 caratteri e deve contenere un almeno un numero e almeno un carattere speciale.
            </p>
          )}
          {isPasswordValid && username.length > 0 && (
            <p className="successo">
              ✓ Password valida!
            </p>
          )}


          <select
            ref={specializzazioneRef}
          >
            <option value="">Scegli la tua specializzazione</option>
            <option value="full_stack">Full stack</option>
            <option value="frontend">Frontend</option>
            <option value="beckend">Beckend</option>
          </select>

          <input
            type="number"
            placeholder="Anni di esperienza"
            ref={esperienzaRef}
          />

          <textarea
            placeholder='Inserisci una tua breve descrizione...'
            value={descrizione}
            onChange={e => setDescrizione(e.target.value)}
            rows={4}
          >
          </textarea>


          {!isDescriptionValid && descrizione.length > 0 && (
            <p className="errore">
              La descrizione deve essere min: 100 e max: 1000 caratteri. Ora hai scritto: {`${descrizione.length} caratteri`}
            </p>
          )}
          {isDescriptionValid && username.length > 0 && (
            <p className="successo">
              ✓ Descrizione valida!
            </p>
          )}

          <button type='submit'>Send</button>

        </form>
      </main>

    </>
  )
}

export default App
