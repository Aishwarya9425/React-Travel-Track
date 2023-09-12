import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  console.log("cities", cities);
  //remove duplicate countries
  const countriesUnique = new Set(
    cities.map((city) =>
      JSON.stringify({
        country: city.country,
        emoji: city.emoji,
        cityId: city.id,
      })
    )
  );
  const countries = [...countriesUnique].map((each) => JSON.parse(each));
  console.log("countries", countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
