import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';
const txHash = '0x7e1dfa5a1f38f4046fcb54094cc8b6207b244f7b1803b7d8c7db0ef668f5d56f';

const params = {
    module: 'account',
    action: 'txlistinternal',
    txhash: txHash,
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