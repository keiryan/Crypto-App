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
  return (
    <CoinListContainer>
      {props.assets.map((asset) => {
        return (
          <CoinStatsContainer key={asset.uniqueId}>
            <EditButton onClick={() => props.editCoin(asset)}>
              <SVG name="edit" overrideFill="#fff" />
            </EditButton>
            <AssetIconContainer>
              <AssetIcon src={asset.large} alt={asset.name} />
              <AssetIconName>{asset.name}</AssetIconName>
              <AssetIconName>({asset.symbol.toUpperCase()})</AssetIconName>
            </AssetIconContainer>
            <CoinStatsRowContainer>
              <CoinStatsRow>
                <CoinStats>
                  <CoinStatName>Current Price: </CoinStatName>
                  <CoinStatData>
                    {asset.market_data.current_price.usd.toFixed(2)}
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Price Change 24h: </CoinStatName>
                  <CoinNumber
                    number={asset.market_data.price_change_24h_in_currency.usd}
                    abbr
                  />
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Market Cap vs Volume: </CoinStatName>
                  <CoinStatData>
                    <ProgressBar
                      value={asset.market_data.total_volume.usd}
                      max={asset.market_data.market_cap.usd}
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
                    />
                  </ProgressContainer>
                </CoinStats>
              </CoinStatsRow>

              <RowSpacer />
              <CoinStatsRow>
                <CoinStats>
                  <CoinStatName>Purchase Price: </CoinStatName>
                  <CoinStatData>{asset.purchaseAmount}</CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Amount Value: </CoinStatName>
                  <CoinStatData>
                    <CoinNumber
                      number={
                        asset.market_data.current_price.usd /
                        asset.purchaseAmount
                      }
                      abbr
                      baseNumber={1}
                    />
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Price chance since purchase: </CoinStatName>
                  <CoinNumber
                    number={
                      (asset.market_data.current_price.usd /
                        asset.purchaseAmount) *
                      100
                    }
                    abbr
                    baseNumber={100}
                  />
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Purchase date: </CoinStatName>
                  <CoinStatData>{asset.purchaseDate}</CoinStatData>
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
    setCoin({...coin, purchaseAmount: value >> 0});
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

  const save = () => {
    if (completeCheck()) {
      props.setAssets(coin);
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
                placeholder={coin.purchaseAmount || "Purchase Amount"}
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
          uniqueId: Math.random() * 1000000,
          ...asset,
          ...currentData.data,
        },
      ]);
    }
    setLoading(false);
  };
  return (
    <Container>
      <AddAssetButton onClick={handleToggle}>Add Asset</AddAssetButton>
      <ListContainer>
        {loading ? (<LoadingWave number={9}/>) : <Assets assets={assets} editCoin={editCoin} />}
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
