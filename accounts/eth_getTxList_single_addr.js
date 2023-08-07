import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';
const address = '0x1660f4527C4F7b8032f049a7585A78fA759F5b51';

const params = {
  module: 'account',
  action: 'txlist',
  address: address,
  startblock: '0',
  endblock: '99999999',
  page: '1',
  offset: '10',
  sort: 'asc',
  apiKey: apiKey
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const transactions = response.data.result;
      transactions.forEach(tx => {
        console.log(`Transaction Hash: ${tx.hash}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });