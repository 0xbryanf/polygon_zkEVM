import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.ALCHEMY_POLYGON_ZKEVM_TESTNET_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';
const address = '0x1660f4527C4F7b8032f049a7585A78fA759F5b51';

const params = {
    module: 'account',
    action: 'balance',
    address: address,
    tag: 'latest',
    apiKey: apiKey
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      console.log(`Balance for address ${address}: ${response.data.result}`);
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });