import { useState, useEffect } from "react";

export  const useFetch = (url)=> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async() => {
    try { 
     const res = await fetch(url);
     const data = await res.json();
     setData(data);
     setLoading(false);
    }catch(err) {
      console.log(err)};
  };

  useEffect(()=> {
    getData();
  }, [url, getData]);

 return {loading: loading, data: data} ;
}
