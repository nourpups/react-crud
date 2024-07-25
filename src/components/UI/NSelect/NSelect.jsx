import classes from "./NSelect.module.css";

export const NSelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      name="counters_sort"
      className={classes.nSelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
