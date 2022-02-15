import propTypes from "prop-types";

const Filter = ({ value, onChange }) => {
    return (<label>Filter contacts:
              <input
                type="text"
                name="filter"
                onChange={onChange}
                value={value}
              />
            </label>);
}

Filter.propTypes = {
    value: propTypes.string,
    onChange: propTypes.func,
}

export default Filter;