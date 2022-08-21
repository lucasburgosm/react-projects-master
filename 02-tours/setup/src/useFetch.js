import { useState, useEffect } from "react";

export  const useFetch = (url)=> {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = async() => {
    try { 
     const res = await fetch(url);
     const tours = await res.json();
     setTours(tours);
     setLoading(false)
    }catch(err) {
      console.log("hola")
      console.log(err)};
  };

  useEffect(()=> {
    getTours();
  }, [url]);

 return {loading, tours} ;
}
