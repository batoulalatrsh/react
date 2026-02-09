export async function fetchingMealsData() {
  const response = await fetch("http://localhost:3000/meals");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Faild to fetch meals!");
  }

  return data;
}
