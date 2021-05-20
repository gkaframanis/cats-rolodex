import "./search-box.styles.css"

// Functional Components they don't have access to state, since they have not access to the constructor() from the class we extend for.
// All the props come as one big object, so we can destructure them..
// handleChange is a function we pass to the Component.
export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={ placeholder }
            onChange={ handleChange }
        />
    )
};