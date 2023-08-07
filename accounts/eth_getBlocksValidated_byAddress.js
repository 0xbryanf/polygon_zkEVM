import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.POLYGON_ZKEVM_API_KEY;
const apiUrl = 'https://api-testnet-zkevm.polygonscan.com/api';
const address = '0x33d89d254C0f9893A4C8d0978f4ab37455BF35e7';

const params = {
    module: 'account',
    action: 'getminedblocks',
    address: address,
    blocktype: 'blocks',
    apiKey: apiKey,
}

axios.get(apiUrl, { params })
  .then(response => {
    if (response.data.status === '1') {
      const minedBlocks = response.data.result;
      minedBlocks.forEach(block => {
        console.log(`Block Number: ${block.blockNumber}`);
      });
    } else {
      console.error('Error:', response.data.message);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });