const { UserApi, Configuration } = require('../sdk/siminvest-node');

const configuration = new Configuration({
    accessToken: process.env.SIMINVEST_ACCESS_TOKEN
});

const userApi = new UserApi(configuration);

const test = async () => {
    
    const response = await userApi.getPortfolio({
        accountId: 11600
    });

    console.log(JSON.stringify(response.data));
};

test();