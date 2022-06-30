import axios from "axios";
import Decimal from "decimal.js";
import { CurrencyByCountries } from "@/Enums/curencyByCountries";
import { CurrencyExchange } from "../models/CurrencyExchange";
import { api_url } from "./abstractApi";

export default function getCurrencies(array: any): void {
  const response = axios.get(api_url).then((response) => {
    const responseObject = Object.values(response);
    const dataObject = responseObject[0].exchange_rates;
    for (const currency in dataObject) {
      const currencyObject = <any>{};
      const keyOfCurrencyObject = `${currency}/${CurrencyByCountries.POLISH}`;
      const decimalCurrency = new Decimal(1 / dataObject[currency]);
      currencyObject["currencyExchangeTitle"] = keyOfCurrencyObject;
      currencyObject["currencyExchangeRate"] =
        decimalCurrency.toDecimalPlaces(4);
      array.push(new CurrencyExchange(currencyObject));
    }
  });
}
