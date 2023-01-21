
# Table of Contents

- [Table of Contents](#table-of-contents)
- [Stock API](#stock-api)
  - [Get stock info](#get-stock-info)

# Stock API

## Get stock info

Source code [here](get-stock-info.js)

Response

```json
{
 "code": 2,
 "data": [{
  "id": 69,
  "code": "BBCA",
  "company_name": "Bank Central Asia Tbk",
  "company_logo_url": "https://siminvest-equity.oss-ap-southeast-5.aliyuncs.com/company-logo/BBCA.png",
  "lp": 8300,
  "pp": 8325,
  "chg": -25,
  "per_chg": -0.31,
  "vol": 82111300,
  "val": 680728545000,
  "freq": 13272,
  "special_notation_symbols": null,
  "is_enabled": true,
  "board_id": 1
 }],
 "is_success": true,
 "message": "data found"
}
```
