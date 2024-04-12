import React from "react";
import Select from "react-select";

const SortSelect = ({ value, onChange }) => {
  const options = [
    { value: "new", label: "№ по убыванию" },
    { value: "old", label: "№ по возрастанию" },
    { value: "name", label: "От А до Я" },
    { value: "region", label: "По регионам" },
  ];

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      styles={{
        control: (provided) => ({
          ...provided,
          width: "250px",
          border: "none",
          padding: "10px 15px 10px 5px",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 500,
          backgroundColor: "#fff",
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          display: "none",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "rgba(0, 0, 0, 0.1)" : null,
          color: state.isSelected ? "black" : "black",
        }),
      }}
    />
  );
};

export default SortSelect;
