import { RestaurantCard } from "../components/RestaurantCard";
import { SortButtons } from "../components/SortButtons";
import loading from "../assets/loading.gif";

export function Results(props) {
  return (
    <article>
      <SortButtons />
      <ul className="results">
        {props.results.length === 0 ? (
          <div className="loading">
            <img src={loading} alt="loading with taco cat" />
            <h2>Let's taco 'bout it...' </h2>
          </div>
        ) : (
          props.results.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))
        )}
      </ul>
    </article>
  );
}
