import Meal from "./Meal.jsx";
import ErrorPage from "./ErrorPage.jsx";
import useHttp from "../hooks/useHttp.js";
const requiredConfig = {};

export default function MealsLayout({}) {
  const { error, isFetching, data } = useHttp(
    "http://localhost:3000/meals",
    requiredConfig,
    [],
  );

  if (error) {
    return <ErrorPage title="An error cccured!" message={error.error} />;
  }

  return (
    <main>
      {isFetching && <p className="center">Fetching meals...</p>}
      {!isFetching && data.length > 0 && <Meal meals={data} />}
    </main>
  );
}
