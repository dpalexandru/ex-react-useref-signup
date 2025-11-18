import { useState } from 'react'
//var a liv globale
const linkApi = "https://boolean-spec-frontend.vercel.app/freetestapi";

function App() {
  // stati 
  const [nomeCompleto, setNomecompleto] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [esperienza, setEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")

  console.log("render")



  return (
    <>
      <header><h1>Welocome Dev! </h1></header>
      <main>
        <h2 className='intestazione-main'>You can register here</h2>
        <form action="submit">

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
            min={0}
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












        </form>




      </main>

    </>
  )
}

export default App
