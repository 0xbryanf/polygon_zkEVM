import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';

const params = {
    module: 'account',
    action: 'txlistinternal',
    startblock: '0',
    endblock: '2702578',
    page: '1',
    offset: '10',
    sort: 'asc',
    apiKey: apiKey,
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const internalTransactions = response.data.result;
      internalTransactions.forEach(tx => {
        console.log(`From: ${tx.from}, To: ${tx.to}, Value: ${tx.value}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });