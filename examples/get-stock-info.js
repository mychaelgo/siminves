const { StockApi, Configuration } = require('../sdk/siminvest-node');

const configuration = new Configuration({
    accessToken: process.env.SIMINVEST_ACCESS_TOKEN
});

const stockApi = new StockApi(configuration);

const test = async () => {
    
    const response = await stockApi.getStockInfo({
        code: 'BBCA'
    });

    console.log(JSON.stringify(response.data));
};

test();