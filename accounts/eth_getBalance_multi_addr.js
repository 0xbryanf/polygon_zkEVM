import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';
const addresses = [
    '0x1660f4527C4F7b8032f049a7585A78fA759F5b51',
    '0xE72E5DdB99485344A70b2A17d38A7D4C825a4061'
];

const params = {
    module: 'account',
    action: 'balancemulti',
    address: addresses.join(','),
    tag: 'latest',
    apiKey: apiKey
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const balances = response.data.result;
      balances.forEach(balance => {
        console.log(`Address: ${balance.account}, Balance: ${balance.balance}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });