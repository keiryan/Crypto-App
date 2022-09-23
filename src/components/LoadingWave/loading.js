import { Container, Wave } from "./loading.styles";

const WaveContainer = (props) => {
  return props.numberOfWaves.map((element, index) => {
    return <Wave key={Math.random() * 300000} index={index + 1} />;
  });
};

const LoadingBar = (props) => {
  const numberArray = Array.from(
    { length: props.number },
    (element, index) => index
  );

  return (
    <Container>
      <WaveContainer numberOfWaves={numberArray} />
    </Container>
  );
};
export default LoadingBar;
