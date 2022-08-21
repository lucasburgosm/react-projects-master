import React from 'react'
import Loading from './Loading'
import Tours from './Tours'
import {useFetch} from './useFetch'

function App() {
const url = 'https://course-api.com/react-tours-project';
let {tours, loading} = useFetch(url);


if(loading) {
  return <Loading></Loading>
}

return (
  <main>
   <Tours tours={tours}></Tours>
  </main>
)}

export default App