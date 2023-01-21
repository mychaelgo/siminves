# https://docs.github.com/en/packages/quickstart

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/docs/siminvest.yaml -g typescript-axios --additional-properties=npmRepository=https://npm.pkg.github.com,stringEnums=true,modelPropertyNaming=original,npmName=@mychaelgo/siminvest,useSingleRequestParameter=true -o /local/sdk/siminvest-node
cp .npmrc.example sdk/siminvest-node/.npmrc
cd sdk/siminvest-node
sedRepoString=", \"repository\": { \"type\": \"git\", \"url\": \"git+https:\/\/github.com\/mychaelgo\/siminvest.git\" }"
sed -i -e "$(( $( wc -l < package.json) -1 ))s/$/\n$sedRepoString/" package.json
rm package.json-e
npm i
npm run build
