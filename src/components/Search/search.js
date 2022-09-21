import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchInput,
  SearchForm,
  IconContainer,
  LinkStyle,
  StyledLink,
  ListContainer,
} from "./search.styles";
import { SVG } from "components";

function ListOfCoins(props) {
  return (
    <ListContainer onMouseLeave={props.left}>
      {props.list.map((element) => {
        if (props.handleClick !== undefined) {
          return (
            <LinkStyle
              key={element.name}
              onClick={() => props.clearList(element)}
            >
              {element.name}
            </LinkStyle>
          );
        } else {
          return (
            <StyledLink
              key={element.name}
              to={`coin/${element.id}`}
              onClick={props.clearList}
            >
              <LinkStyle>{element.name}</LinkStyle>
            </StyledLink>
          );
        }
      })}
    </ListContainer>
  );
}

export default function SearchBar(props) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  let timeOut = false;

  const callAPI = async () => {
    timeOut = false;
    const data = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${searchValue}`
    );
    setList([...data.data]);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (!timeOut) {
      if (searchValue.length > 0) {
        timeOut = true;
        setTimeout(callAPI, 1000);
      } else {
        setList([]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.handleClick) {
      props.handleClick(list[0]);
    } else {
      navigate(`/coin/${list[0].id}`);
    }
    setSearchValue("");
    clearList();
  };

  const clearList = (coin) => {
    // To ensure the passed object is not a synthetic mouse event.
    coin?.id && props.handleClick(coin);
    setSearchValue("");
    setList([]);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
        <IconContainer onClick={handleSubmit}>
          <SVG name="search" />
        </IconContainer>
          <SearchInput
            onChange={handleChange}
            value={searchValue}
            type="text"
            placeholder={props.placeholder || "Search"}
          />
          <ListOfCoins
          handleClick={props?.handleClick}
          left={clearList}
          list={list}
          clearList={clearList}
        />
        </SearchForm>

  );
}