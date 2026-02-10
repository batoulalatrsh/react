import Meal from "./Meal.jsx";
import { fetchingMealsData } from "../https.js";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage.jsx";

export default function MealsLayout({}) {
  const [fetchingMeals, setFetchingMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      setIsFetching(true);
      try {
        const meals = await fetchingMealsData();

        setFetchingMeals(meals);
        setIsFetching(false);
      } catch (err) {
        setError({
          error: err.message || "Faild to fetch meals!",
        });
        setIsFetching(false);
      }
    }
    fetchMeals();
  }, []);

  if (error) {
    return <ErrorPage title="An error cccured!" message={error.error} />;
  }

  return (
    <main>
      {isFetching && <p>Fetching meals data...</p>}
      {!isFetching && fetchingMeals.length === 0 && (
        <p>Faild to fetch meals!</p>
      )}
      {!isFetching && fetchingMeals.length > 0 && (
        <Meal meals={fetchingMeals} />
      )}
    </main>
  );
}
