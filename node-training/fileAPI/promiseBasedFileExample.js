


const fs = require('fs/promises');


var getPromiseBasedResult =  async(from='/tmp/hello', to='/tmp/world') => {
    try {
        await fs.rename(from, to);
        const stats = await fs.stat(to);
        console.log(`stats: ${JSON.stringify(stats)}`);
      } catch (error) {
        console.error('there was an error:', error.message);
      }
    }

module.exports.getPromiseBasedResult = getPromiseBasedResult;