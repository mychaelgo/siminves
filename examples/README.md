
# Table of Contents

- [Table of Contents](#table-of-contents)
- [User API](#user-api)
  - [Get user portfolio](#get-user-portfolio)
- [Stock API](#stock-api)
  - [Get stock info](#get-stock-info)
  - [Get stock key stat](#get-stock-key-stat)

# User API

## Get user portfolio

Source code [here](get-user-portfolio.js)

Response

```json
{
 "data": {
  "buying_power": 10,
  "buyopen": 0,
  "cash_balance": 10,
  "earnings": 10,
  "market_value": 10,
  "open": 0,
  "portfolio": [{
   "account_id": 1,
   "available_lot": 1,
   "average": 1,
   "balance_lot": 1,
   "buy_price": 8000.06,
   "code": "BBCA",
   "current_price": 8300,
   "earnings": 10,
   "invested_amount": 10,
   "is_enabled": true,
   "lot": 1,
   "return": 10,
   "special_notation_symbols": null,
   "value": 80000
  }],
  "return": 10,
  "sellopen": 0,
  "total_investment": 1
 },
 "message": "Success fetch equity portfolio"
}
```

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

## Get stock key stat

Source code [here](get-stock-keystat.js)

Response

```json
{
 "code": 2,
 "data": [{
  "category_id": 1,
  "category_label": "Earnings",
  "component": [{
   "id": 1,
   "label": "Dividend Per Share (DPS)",
   "value": 145
  }, {
   "id": 2,
   "label": "Earnings Per Share (EPS) Annualised",
   "value": 316.33
  }, {
   "id": 3,
   "label": "Revenue Per Share (RPS) Annualised",
   "value": 370.08
  }, {
   "id": 4,
   "label": "Book Value Per Share (BVPS)",
   "value": 1736.61
  }, {
   "id": 5,
   "label": "Cash Flow Per Share (CFPS) Annualised",
   "value": 404.36
  }, {
   "id": 6,
   "label": "Cash Per Share (CPS)",
   "value": 119.08
  }, {
   "id": 7,
   "label": "Earnings Before Tax (EBT)",
   "value": 35805328000
  }]
 }, {
  "category_id": 2,
  "category_label": "Valuation",
  "component": [{
   "id": 8,
   "label": "Price Earnings Ratio (PER)",
   "value": 26.24
  }, {
   "id": 9,
   "label": "Price Book Value Ratio",
   "value": 4.78
  }]
 }, {
  "category_id": 3,
  "category_label": "Profitability",
  "component": [{
   "id": 10,
   "label": "Dividend Payout Ratio (DPR)",
   "value": 49.52
  }, {
   "id": 11,
   "label": "Gross Profit Margin (GPM)",
   "value": 51.66
  }, {
   "id": 12,
   "label": "Operating Profit Margin (OPM)",
   "value": 51.66
  }, {
   "id": 13,
   "label": "Net Profit Margin (NPM)",
   "value": 41.78
  }, {
   "id": 14,
   "label": "Return on Equity (ROE) Annualised",
   "value": 18.22
  }, {
   "id": 15,
   "label": "Return on Assets (ROA) Annualised",
   "value": 3
  }]
 }, {
  "category_id": 4,
  "category_label": "Liquidity",
  "component": [{
   "id": 16,
   "label": "Debt Equity Ratio (DER)",
   "value": 505
  }, {
   "id": 17,
   "label": "Current Ratio (CRR)",
   "value": 0
  }]
 }],
 "is_success": true,
 "message": "data found"
}
```
