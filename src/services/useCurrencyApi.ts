import axios from "axios";
import { api_url } from "./abstractApi";
import {
  CurrencyExchange,
  CurrencyExchangeDto,
} from "@/models/CurrencyExchange";

export default function useCurrencyApi() {
  const getCurrencies = async () => {
    const response = await axios.get(api_url);
    const rates: number[] = Object.values(response.data.exchange_rates);
    const keys: string[] = Object.keys(response.data.exchange_rates);
    const ratesArr = rates.map((rate, index) => ({
      currencyExchangeTitle: keys[index],
      currencyDefaultExchangeRate: rate,
    }));
    return ratesArr.map(
      (item: CurrencyExchangeDto) => new CurrencyExchange(item)
    );
  };
  return { getCurrencies };
}
