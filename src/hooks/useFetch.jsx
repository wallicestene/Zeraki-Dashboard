import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  // managing state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data
  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
