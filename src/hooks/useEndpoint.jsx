import { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_GAS_PRICES_KEY;

const useEndpoint = (request, state = null) => {
  const [ep, setEp] = useState(null);
  const [data, setData] = useState(null);

  switch (request) {
    case 'allStates':
      setEp('/allUsaPrice');
      break;
    case 'byState':
      setEp(`/stateUsaPrice?state=${state}`);
      break;
    default:
      return;
  }

  const client = axios.create({
    baseURL: 'https://api.collectapi.com/gasPrice',
  });

  const headers = {
    authorization: API_KEY,
    'content-type': 'application/json',
  };

  useEffect(() => {
    const getData = async () => {
      const response = await client.get(ep, headers);
      setData(response.data);
    };
    getData();
  }, []);
};

export default useEndpoint;
