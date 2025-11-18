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
            placeholder='Your full name'
            value={nomeCompleto}
            onChange={e => setNomecompleto(e.target.value)}
          />



        </form>




      </main>

    </>
  )
}

export default App
