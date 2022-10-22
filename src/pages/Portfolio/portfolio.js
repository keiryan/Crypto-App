import { useState, useEffect } from "react";
import axios from "axios";
import { SVG, LoadingWave, CoinNumber, ProgressBar } from "components";
import {
  Container,
  AddAssetButton,
  ListContainer,
  AddAssetContainer,
  ExitButton,
  AddAssetHeader,
  Spacer,
  CoinContainer,
  CoinIcon,
  CoinNameContainer,
  CoinAndInputs,
  DataInputs,
  SaveButton,
  AssetIconContainer,
  AssetIcon,
  AssetIconName,
  EditButton,
  CoinStatsContainer,
  CoinStatsRowContainer,
  CoinStatsRow,
  CoinStats,
  CoinStatName,
  CoinStatData,
  RowSpacer,
  CoinListContainer,
  AddAssetScreen,
  ProgressContainer,
  TrashAndSaveContainer,
  TrashButton,
} from "./portfolio.styles";

import { SearchBar, BaseInput } from "components";

function Assets(props) {
  const dateFormatter = (passedDate, format) => {
    return passedDate;
    const date = new Date(passedDate);
    const timestamp = new Date(date);
    return timestamp.toLocaleString();
  };
  function longDateFormatter(passedISODate) {
    return passedISODate;
    const isoDate = new Date(passedISODate);
    const unixDate = new Date(isoDate);
    console.log(passedISODate, isoDate, unixDate);
    const days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    if (unixDate) {
      const currentDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(unixDate);
      return `${days[new Date().getDay()]} ${currentDate}`;
    }
  }

  const findLargerNumber = (number1, number2) => [number1, number2].sort();

  return (
    <CoinListContainer>
      {props.assets.map((asset) => {
        const { _id, large, name, symbol, purchaseAmount, purchaseDate } =
          asset;
        const purchaseDateFormatted = dateFormatter(purchaseDate).split(",");
        const longDate = longDateFormatter(purchaseDate);

        //Sorts the numbers to find the larger one
        const largerNumberSorted = [
          asset.market_data.current_price[props.currency],
          asset.historicalData.market_data.current_price[props.currency],
        ].sort((a, b) => b - a);
        // console.log(asset);
        return (
          <CoinStatsContainer key={_id || asset.uniqueId}>
            <AssetIconContainer>
              <AssetIcon src={large} alt={name} />
              <AssetIconName>{name}</AssetIconName>
              <AssetIconName>({symbol.toUpperCase()})</AssetIconName>
              <EditButton onClick={() => props.editCoin(asset)}>
                <SVG name="edit" overrideFill="#fff" />
              </EditButton>
            </AssetIconContainer>
            <CoinStatsRowContainer>
              <CoinStatsRow>
                <CoinStats>
                  <CoinStatName>Current Price: </CoinStatName>
                  <CoinStatData>
                    {asset.market_data.current_price[props.currency].toFixed(2)}
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Price Change 24h: </CoinStatName>
                  <CoinNumber
                    number={
                      asset.market_data?.price_change_24h
                    }
                    abbr
                  />
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Market Cap vs Volume: </CoinStatName>
                  <CoinStatData>
                    <ProgressBar
                      value={asset.market_data.total_volume[props.currency]}
                      max={asset.market_data.market_cap[props.currency]}
                      innie
                      height={"15px"}
                    />
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Circ supply vs max supply: </CoinStatName>
                  <ProgressContainer>
                    <ProgressBar
                      value={asset.market_data.circulating_supply}
                      max={asset.market_data.max_supply}
                      innie
                      height={"15px"}
                      bold
                    />
                  </ProgressContainer>
                </CoinStats>
              </CoinStatsRow>

              <RowSpacer />
              <CoinStatsRow>
                <CoinStats>
                  <CoinStatName>Purchased Amount: </CoinStatName>
                  <CoinStatData>{purchaseAmount}</CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Amount Value: </CoinStatName>
                  <CoinStatData>
                    <CoinNumber
                      number={
                        asset.market_data.current_price[props.currency] *
                        purchaseAmount
                      }
                      abbr
                      noPercent
                      baseNumber={
                        asset.historicalData.market_data.current_price[
                          props.currency
                        ] * purchaseAmount
                      }
                      abbrOverride={`Price for ${purchaseAmount} ${
                        asset.name
                      } on ${purchaseDate}: ${
                        asset.historicalData.market_data.current_price[
                          props.currency
                        ] * purchaseAmount
                      } \nPrice for ${purchaseAmount} ${asset.name} today: ${
                        asset.market_data.current_price[props.currency] *
                        purchaseAmount
                      }`}
                    />
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Price chance since purchase: </CoinStatName>
                  <CoinNumber
                    number={
                      ((largerNumberSorted[0] - largerNumberSorted[1]) /
                        largerNumberSorted[1]) *
                      100
                    }
                    abbr
                    baseNumber={1}
                  />
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Purchase date: </CoinStatName>
                  <CoinStatData title={longDate}>
                    {purchaseDateFormatted[0]}
                  </CoinStatData>
                </CoinStats>
              </CoinStatsRow>
            </CoinStatsRowContainer>
          </CoinStatsContainer>
        );
      })}
    </CoinListContainer>
  );
}
function AddingAsset(props) {
  const [coin, setCoin] = useState({});
  const [coinComplete, setCoinComplete] = useState(false);

  const handleClick = (passedCoin) => {
    coin.name ? setCoin(passedCoin) : setCoin({ ...coin, ...passedCoin });
    completeCheck();
  };

  const handleSubmit = (value) => {
    setCoin({ ...coin, purchaseAmount: value >> 0 });
    completeCheck();
  };

  const handleDateChange = (date) => {
    const rearrangedDate = date.split("-").reverse().join("-");
    setCoin({ ...coin, purchaseDate: rearrangedDate });
    completeCheck();
  };

  const completeCheck = (passedCoin) => {
    const coinInQuestion = passedCoin ? passedCoin : coin;
    if (
      coinInQuestion.name &&
      coinInQuestion.purchaseDate &&
      coinInQuestion.purchaseAmount
    ) {
      setCoinComplete("yes");
      return true;
    } else {
      return false;
    }
  };

  const deleteCoin = () => {
    if (completeCheck()) {
      props.deleteCoin(coin);
      closingProcedures();
    }
  };

  const save = async () => {
    if (completeCheck()) {
      // const newCoin = await axios.get(
      //   `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${coin.purchaseDate}`
      // );
      // console.log(newCoin.data);
      // const price = newCoin.data.market_data.current_price;
      // const coinCopy = { ...coin, price };
      const coinCopy = { ...coin };
      // const savedCoin = await axios.post(
      //   "http://localhost:8000/add-coin",
      //   coinCopy
      // );
      // props.setAssets(savedCoin.data);
      props.setAssets(coinCopy);
      closingProcedures();
    }
  };

  const closingProcedures = () => {
    props.handleToggle();
    setCoin({});
    setCoinComplete(false);
  };

  useEffect(() => {
    setCoin(props.coin);
    completeCheck(props.coin);
  }, [props.coin]);

  return (
    <AddAssetScreen toggled={props.addingAsset}>
      <AddAssetContainer>
        <AddAssetHeader>Select Coins</AddAssetHeader>
        <ExitButton onClick={props.handleClose}>
          <SVG name="close" overrideFill="#07d554" />
        </ExitButton>
        <CoinAndInputs>
          <CoinContainer>
            {coin.large && <CoinIcon src={coin.large} />}
            <CoinNameContainer>
              {coin.name} {coin.symbol && `(${coin.symbol})`}
            </CoinNameContainer>
          </CoinContainer>
          <DataInputs>
            <Spacer>
              <SearchBar
                placeholder={coin.name || "Select coin"}
                handleClick={handleClick}
              />
            </Spacer>
            <Spacer>
              <BaseInput
                placeholder={coin.purchaseAmount || "Purchased Amount"}
                handleSubmit={handleSubmit}
                icon="currency"
              />
            </Spacer>
            <Spacer>
              <BaseInput
                placeholder="date"
                handleChange={handleDateChange}
                icon="currency"
                type="date"
                value={coin.purchaseDate || null}
              />
            </Spacer>
          </DataInputs>
        </CoinAndInputs>
        <TrashAndSaveContainer>
          <SaveButton completed={coinComplete} onClick={save}>
            Save and Continue
          </SaveButton>
          <TrashButton completed={coinComplete} onClick={deleteCoin}>
            <SVG name="trash" overrideFill="#fff" />
          </TrashButton>
        </TrashAndSaveContainer>
      </AddAssetContainer>
    </AddAssetScreen>
  );
}

function Portfolio(props) {
  const [addingAsset, setAddingAsset] = useState(false);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [passedCoin, setPassedCoin] = useState({});

  const handleToggle = () => {
    setAddingAsset(!addingAsset);
  };

  const handleClose = () => {
    setAddingAsset(false);
  };

  const addAsset = (asset) => {
    callAPI(asset);
  };

  const editCoin = (coin) => {
    setPassedCoin(coin);
    setAddingAsset(!addingAsset);
  };

  const deleteCoin = (coin) => {
    const newAssets = assets.filter((asset) => asset.id !== coin.id);
    setAssets([...newAssets]);
  };

  const callAPI = async (asset) => {
    setLoading(true);
    const currentData = await axios(
      `https://api.coingecko.com/api/v3/coins/${asset.id}?market_data=true`
    );

    const historicalData = await axios(
      `https://api.coingecko.com/api/v3/coins/${asset.id}/history?date=${asset.purchaseDate}`
    );

    const coinIsEdited = assets.find(
      (element) => element.uniqueId === asset.uniqueId
    );

    if (coinIsEdited) {
      const editedAssets = assets.map((element) => {
        if (element.uniqueId === coinIsEdited.uniqueId) {
          return { ...asset, ...currentData.data };
        }
        return element;
      });
      setAssets([...editedAssets]);
    } else {
      setAssets([
        ...assets,
        {
          ...asset,
          uniqueId: Math.random(),
          ...currentData.data,
          historicalData: { ...historicalData.data },
        },
      ]);
    }
    setLoading(false);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/coins").then((res) => {
      console.log(res.data);
      const assets = Promise.all(
        res.data.map(async (asset) => {
          const today = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${asset.id}`
          );
          return { ...asset, ...today.data, purchaseAmount: asset.amount || 1 };
        })
      ).then((data) => {
        setAssets(data);
      });
    });
  }, []);
  return (
    <Container>
      <AddAssetButton onClick={handleToggle}>Add Asset</AddAssetButton>
      <ListContainer>
        {loading ? (
          <LoadingWave number={9} />
        ) : (
          <Assets
            currency={props.currency}
            assets={assets}
            editCoin={editCoin}
          />
        )}
      </ListContainer>
      <AddingAsset
        setAssets={addAsset}
        handleToggle={handleToggle}
        addingAsset={addingAsset}
        handleClose={handleClose}
        coin={passedCoin}
        assets={assets}
        deleteCoin={deleteCoin}
      />
    </Container>
  );
}

export default Portfolio;
