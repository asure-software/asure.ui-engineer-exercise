export function SortButtons(props) {
  return (
    <nav>
      <button
        className={props.sortBy === "best_match" ? "disabled" : ""}
        onClick={() => {
          props.setSortBy("best_match");
          props.setResults(undefined);
        }}
        disabled={props.sortBy === "best_match"}
      >
        Best Match
      </button>
      <button
        className={props.sortBy === "rating" ? "disabled" : ""}
        onClick={() => {
          props.setSortBy("rating");
          props.setResults(undefined);
        }}
        disabled={props.sortBy === "rating"}
      >
        Best Rating
      </button>
      <button
        className={props.sortBy === "worst" ? "disabled" : ""}
        onClick={() => {
          props.setSortBy("worst");
          props.setResults(undefined);
        }}
        disabled={props.sortBy === "worst"}
      >
        Worst Rating
      </button>
      <button
        className={props.sortBy === "review_count" ? "disabled" : ""}
        onClick={() => {
          props.setSortBy("review_count");
          props.setResults(undefined);
        }}
        disabled={props.sortBy === "review_count"}
      >
        Reviews
      </button>
      <button
        className={props.sortBy === "distance" ? "disabled" : ""}
        onClick={() => {
          props.setSortBy("distance");
          props.setResults(undefined);
        }}
        disabled={props.sortBy === "distance"}
      >
        Distance
      </button>
    </nav>
  );
}
