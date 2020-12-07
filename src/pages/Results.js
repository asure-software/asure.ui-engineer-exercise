import { RestaurantCard } from "../components/RestaurantCard";
import { SortButtons } from "../components/SortButtons";

export function Results() {
  return (
    <article>
      <SortButtons />
      <ul className="results">
        <RestaurantCard />
      </ul>
    </article>
  );
}
