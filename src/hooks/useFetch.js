import { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        // const items = response.data.articles.slice(0, 20);
        console.log(response);
        setData(response.data.articles);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get();
      setData(response.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };
  return [data, loading, error, reFetch];
};

export default useFetch;
