import { MiddleContainer } from "./coinpage.styles";
import { CoinContainer, LargeChartsContainer } from "components";

export default function CoinPage(props) {
  return (
    <MiddleContainer>
      <LargeChartsContainer currency={props.currency} />
      <CoinContainer currency={props.currency} />
    </MiddleContainer>
  );
}
