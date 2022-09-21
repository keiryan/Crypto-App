import { useState } from "react";
import {
  SearchInput,
  SearchForm,
  IconContainer,
} from "./baseinput.styles";
import { SVG } from "components";


export default function BaseInput(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    props.handleChange && props.handleChange(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <SearchForm  completed={props.completed} onSubmit={handleSubmit}>
      <IconContainer onClick={handleSubmit}>
        <SVG name={props.icon || 'search'} />
      </IconContainer>
      <SearchInput
        onChange={handleChange}
        value={searchValue}
        type={props.type || "text"}
        placeholder={props.placeholder || "Search"}
      />
    </SearchForm>
  );
}
