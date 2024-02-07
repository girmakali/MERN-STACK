import "./searchbox.css";

export const Searchbox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="companies name"
        name=""
        id=""
        onChange={searchChange}
        className="input"
      />
    </div>
  );
};
