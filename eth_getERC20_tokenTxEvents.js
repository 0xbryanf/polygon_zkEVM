import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';

const params = {
    module: 'account',
  action: 'tokentx',
    address: '0x5d968b036841524927881799854de49cC02B7241',
    startblock: '0',
    endblock: '2500000',
    sort: 'asc',
    apiKey: apiKey,
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const tokenTransactions = response.data.result;
      tokenTransactions.forEach(tx => {
        console.log(`Token Symbol: ${tx.tokenSymbol}, Amount: ${tx.value}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });