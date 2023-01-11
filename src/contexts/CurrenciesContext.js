import { createContext, useState } from "react";

const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children, currency, setCurrency, setIsError }) => {
  /* States */
  //State for checking which currency is selected in the UI - Currency Container
  const [selectedCurrency, setSelectedCurrency] = useState({});
  //State for checking if an item is in edit mode - toggle edit mask
  const [isEdit, setIsEdit] = useState(false);
  // State for checking if a currency code already exists
  const [isExistingCurrencyCode, setIsExistingCurrencyCode] = useState(false);
  //State for new currency - toggle currency new mask
  const [isNewCurrency, setIsNewCurrency] = useState(false);

  //Operations for Currency Management

  //Create new currency
  const addCurrency = async (newCurrency) => {
    //POST Request /currencies
    const res = await fetch(`/api/v1/currencies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCurrency),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
    const data = await res.json();
    //Update setCurrency state with new currency
    setCurrency([data, ...currency]);
    //Set isNew state to false - close view for create currency
    setIsNewCurrency(false);
  };

  //Update existing currency
  const updateCurrency = async (data) => {
    //Update currency state (setCurrency in App Component)
    setCurrency(
      currency.map((e) => {
        if (e.id === data.id) {
          return { ...e, ...data };
        } else {
          return e;
        }
      })
    );

    //PUT Request /currencies/:id to update currency
    const res = await fetch(`/api/v1/currencies/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currencyCode: data.currencyCode, country: data.country }),
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
    }

    //set setIsEdit state to false after update
    setIsEdit(false);
    //SetSelectedCurrency state will be set to {} after uppdate
    setSelectedCurrency({});
  };

  //Delete existing currency
  const deleteCurrency = async (data) => {
    //Update currency state (setCurrency in App Component)
    setCurrency(
      currency.filter((e) => {
        if (e.id !== data.id) {
          return { ...e, ...data };
        }
      })
    );

    //DELETE Request /currencies/:id to delete currency
    const res = await fetch(`/api/v1/currencies/${data.id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      setIsError({ status: true, error: `${res.statusText}: HTTP Response Status Code: ${res.status}` });
      return;
    }
  };

  return (
    <CurrenciesContext.Provider
      value={{ currency, setCurrency, isNewCurrency, setIsNewCurrency, selectedCurrency, setSelectedCurrency, isEdit, setIsEdit, isExistingCurrencyCode, setIsExistingCurrencyCode, addCurrency, updateCurrency, deleteCurrency }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesContext;
