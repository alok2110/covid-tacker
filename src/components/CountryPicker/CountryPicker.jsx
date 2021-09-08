import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setcountries(await fetchCountries());
    };

    fetchApi();
  }, [countries]);

  return (
    <>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {countries.map((country, index) => {
            return (
              <option key={index} value={country}>
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
