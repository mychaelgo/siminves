const { StockApi, Configuration } = require('../sdk/siminvest-node/dist');

const configuration = new Configuration({
    accessToken: process.env.SIMINVEST_ACCESS_TOKEN
});

const stockApi = new StockApi(configuration);

const test = async () => {
    
    const response = await stockApi.getKeyStat({
        stockId: 69
    });

    console.log(JSON.stringify(response.data));
};

test();