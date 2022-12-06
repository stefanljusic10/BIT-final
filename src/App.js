import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])
  
  return (
    <div>App</div>
  )
}

export default App