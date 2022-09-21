import { useState, useEffect } from "react";
import axios from "axios";
import { SVG, LoadingWave, CoinNumber } from "components";
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
                  <CoinStatData>{asset.name}</CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Circ supply vs max supply: </CoinStatName>
                  <CoinStatData>$35,999</CoinStatData>
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
                      number={(
                        asset.purchaseAmount /
                        asset.market_data.current_price.usd
                      )}
                      abbr
                    />
                  </CoinStatData>
                </CoinStats>

                <CoinStats>
                  <CoinStatName>Price chance since purchase: </CoinStatName>
                  <CoinNumber
                      number={(
                        (asset.purchaseAmount /
                          asset.market_data.current_price.usd) *
                        1000
                      )}
                      abbr
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
  const [coinComplete, setCoinComplete] = useState("");

  const handleClick = (passedCoin) => {
    coin.name ? setCoin(passedCoin) : setCoin({ ...coin, ...passedCoin });
    completeCheck();
  };

  const handleSubmit = (value) => {
    coin.purchaseAmount = value >> 0;
    completeCheck();
  };

  const handleDateChange = (date) => {
    const rearrangedDate = date.split("-").reverse().join("-");
    coin.purchaseDate = rearrangedDate;
    completeCheck();
  };

  const completeCheck = () => {
    if (coin.name) {
      if (coin.purchaseDate) {
        if (coin.purchaseAmount) {
          setCoinComplete("yes");
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const save = () => {
    if (coin.purchaseAmount) {
      props.handleToggle();
      const coinIsEdited = props.assets.find(
        (asset) => asset.uniqueId === coin.uniqueId
      );
      if (coinIsEdited) {
        const editedAssets = props.assets.map((asset) => {
          asset.uniqueId === coinIsEdited.uniqueId && (asset = coinIsEdited);
        });
        props.setAssets(...editedAssets);
      } else {
        if (coinComplete) {
          props.setAssets(coin);
          setCoin({});
          setCoinComplete("");
        }
      }
    }
  };

  useEffect(() => {
    completeCheck();
    setCoin(props.coin);
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
              placeholder={props.coin.name || "Select coin"}
              handleClick={handleClick}
            />
            </Spacer>
            <Spacer>
              <BaseInput
                placeholder={props.coin.purchaseAmount || "Purchase Amount"}
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
              />
            </Spacer>
          </DataInputs>
        </CoinAndInputs>
        <SaveButton completed={coinComplete} onClick={save}>
          Save and Continue
        </SaveButton>
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

  const callAPI = async (asset) => {
    setLoading(true);
    const currentData = await axios(
      `https://api.coingecko.com/api/v3/coins/${asset.id}?market_data=true`
    );
    setAssets([
      ...assets,
      {
        uniqueId: Math.random() * 1000000,
        ...asset,
        ...currentData.data,
      },
    ]);
  };

  return (
    <Container>
      <AddAssetButton onClick={handleToggle}>Add Asset</AddAssetButton>
      <ListContainer>
        <Assets assets={assets} editCoin={editCoin} />
      </ListContainer>
      <AddingAsset
        setAssets={addAsset}
        handleToggle={handleToggle}
        addingAsset={addingAsset}
        handleClose={handleClose}
        coin={passedCoin}
        assets={assets}
      />
    </Container>
  );
}

export default Portfolio;
