import { useState, useEffect } from 'react';

import api from '../api';

const INITIAL_DATA = {
  search: {
    capital: '',
    currencies: [],
    flag: '',
    languages: [],
    name: ''
  },
  results: []
};

const useFetch = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const fetchData = async () => {
    try {
      const res = await api.get();
      const filtredData = res.data.filter(item =>
        item.name.toLowerCase().match(data.search.name.toLowerCase())
      );

      setData({ ...data, results: filtredData });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (data.search.name !== '') {
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [data.search]);

  return { data, setData };
};

export default useFetch;
