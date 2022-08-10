import axios from "axios";
import { useState, useEffect } from "react";
import {
  Container,
  CurrentlySelectedCoinContainer,
  IconContainer,
  CurrentlySelectedCoinName,
  ListContainer,
  ListItem,
} from "./dropdown.styles";
import { SVG } from "components";

export const List = (props) => {
  return (
    <ListContainer onMouseLeave={props.clearList} toggled={props.toggled}>
      {props.list.map((element) => {
        return (
          <ListItem key={Math.random() * 300000} onClick={() => props.handleSelect(element)}>
            {element}
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default function Dropdown(props) {
  const [toggled, setToggled] = useState(false);
  const [currentCoin, setCurrentCoin] = useState(props.defaultCurrency);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const handleSelect = (coin) => {
    setCurrentCoin(coin)
    setToggled(false);
    props.handleCurrency(coin)
  };

  const clearList = () => {
    setToggled(false);
  };

  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    setList(response.data.sort());
    setLoading(false);
  };


  useEffect(() => {
      getData();
  }, []);

  return (
    <Container>
      <CurrentlySelectedCoinContainer onClick={handleToggle}>
        <IconContainer>
          <SVG name={"currency"} />
        </IconContainer>
        {!loading && (<CurrentlySelectedCoinName>{currentCoin.toUpperCase() || list[0].toUpperCase()}</CurrentlySelectedCoinName>)}
      </CurrentlySelectedCoinContainer>
      <List
        clearList={clearList}
        list={list}
        toggled={toggled}
        handleSelect={handleSelect}
      />
    </Container>
  );
}
