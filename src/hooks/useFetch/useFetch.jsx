import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [endpoint]);

  return { data };
}

export default useFetch;