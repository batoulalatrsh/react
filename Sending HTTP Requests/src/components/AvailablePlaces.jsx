import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import { use } from "react";
import ErrorPage from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/placessssssss");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Faild to fetch places");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        //Handling error in react mean update UI to show the error
        setError({
          message:
            error.message || "Coud not fetch places, please try again later.",
        });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
