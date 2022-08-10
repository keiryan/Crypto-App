import axios from "axios";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  SearchInput,
  SearchForm,
  IconContainer,
  StyledLink,
  ListContainer,
} from "./search.styles";
import { SVG } from "components";

function ListOfCoins(props) {
  return (
    <ListContainer onMouseLeave={props.left}>
      {props.list.map((element) => {
        return (
          <StyledLink
            key={element.name}
            to={`coin/${element.id}`}
            onClick={props.clearList}
          >
            {element.name}
          </StyledLink>
        );
      })}
    </ListContainer>
  );
}

export default function SearchBar() {
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
    setSearchValue("");
    navigate(`/coin/${list[0].id}`);
    clearList();
  };

  const clearList = () => {
    setSearchValue("");
    setList([]);
  };

  return (
    <>
      <Container>
        <IconContainer onClick={handleSubmit}>
          <SVG name="search" />
        </IconContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            onChange={handleChange}
            value={searchValue}
            type="text"
            placeholder="Search"
          />
        </SearchForm>
        <ListOfCoins left={clearList} list={list} clearList={clearList} />
      </Container>
    </>
  );
}
