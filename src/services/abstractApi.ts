import { CurrencyByCountries } from "@/Enums/curencyByCountries";
// import { API_KEYS } from "../variables/env";

const api_key = process.env.VUE_APP_EXCHANGE_RATE_API_KEY;

export const api_url = `https://exchange-rates.abstractapi.com/v1/live?api_key=${api_key}&base=${CurrencyByCountries.POLISH}&target=${CurrencyByCountries.GREAT_BRITAIN},${CurrencyByCountries.UNITED_STATES},${CurrencyByCountries.EUROPE}`;
