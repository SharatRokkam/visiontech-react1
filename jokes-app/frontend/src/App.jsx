import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"







const App = () => {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <>
      <h1>Jokes App</h1>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        )
        )}
    </>
  )
}

export default App