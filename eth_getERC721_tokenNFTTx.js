import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';

const params = {
    module: 'account',
    action: 'tokennfttx',
    address: '0x14280c914132a040c54f645f8d0c2d14a41c5c76',
    startblock: '0',
    endblock: '999999999',
    sort: 'asc',
    apiKey: apiKey
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const nftTransactions = response.data.result;
      nftTransactions.forEach(tx => {
        console.log(`Token ID: ${tx.tokenID}, Contract Address: ${tx.contractAddress}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });