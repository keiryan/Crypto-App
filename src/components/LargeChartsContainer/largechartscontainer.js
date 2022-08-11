import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { ChartContainer } from "components";
import { Container, Spacer } from "./largechartscontainer.styles";

export default function LargeChartsContainer(props) {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const getData = async () => {
    const data = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    );
    setCoin(data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {!loading && (
        <>
          <ChartContainer
            coin={coin}
            chartType={"Line"}
            label={"Price"}
            data={coin.prices}
            headerNumber={coin.prices.at(-1)[1]}
            fiat={props.currency}
          />
          <Spacer />
          <ChartContainer
            coin={coin}
            chartType={"Bar"}
            label={"Volume 24h"}
            data={coin.total_volumes}
            headerNumber={coin.prices.at(-1)[1]}
            fiat={props.currency}
          />
        </>
      )}
    </Container>
  );
}
