import styled from "styled-components";
import { Base } from "../../app.styles";

export const Container = styled(Base)`
  flex-direction: column;
  position: relative;
  align-items: center;
  position: relative;
`;

export const ListContainer = styled(Base)`
  height: 100%;
  justify-content: center;
`;

const AddButton = styled.div`
  text-align: center;
  background-color: #07d554;
  padding: 20px;
  border-radius: 8px;
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

export const AddAssetButton = styled(AddButton)`
  width: 250px;
  margin: 30px 0px;
`;

export const TrashAndSaveContainer = styled(Base)``;

export const SaveButton = styled(AddButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  opacity: ${(props) => (props.completed === "yes" ? 1 : 0.5)};
  background-color: ${(props) =>
    props.completed === "yes" ? "#07d554" : "#2C2E36"};
  :hover {
    cursor: ${(props) => (props.completed === "yes" ? "pointer" : "default")};
  }
`;

export const TrashButton = styled(Base)`
  margin: 0px 20px;
  padding: 10px 12px;
  border-radius: 8px;
  opacity: ${(props) => (props.completed === "yes" ? 1 : 0.5)};
  background-color: ${(props) =>
    props.completed === "yes" ? "#cf0200" : "#2C2E36"};
  :hover {
    cursor: ${(props) => (props.completed === "yes" ? "pointer" : "default")};
  }
`;

export const Spacer = styled.div`
  margin: 5px 0px;
`;

export const AddAssetScreen = styled(Base)`
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.toggled ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AddAssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  background-color: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.secondary};
  position: relative;
`;

export const AddAssetHeader = styled.div`
  width: 100%;
  text-align: center;
`;

export const ExitButton = styled(Base)`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(10px);
  :hover {
    cursor: pointer;
  }
`;

export const CoinContainer = styled(Base)`
  align-items: center;
  flex-direction: column;
  margin: 0 20px;
`;

export const CoinIcon = styled.img`
  width: 70px;
  margin: 10px 0;
`;

export const CoinNameContainer = styled.div`
  font-weight: bold;
`;

export const CoinAndInputs = styled(Base)`
  margin: 20px 0px;
`;

export const DataInputs = styled(Base)`
  flex-direction: column;
`;

export const AssetData = styled.span`
  color: lime;
`;

export const EditButton = styled.div`
  padding: 10px;
`;

export const CoinListContainer = styled(Base)`
  flex-direction: column;
  width: 80%;
`;

export const CoinStatsContainer = styled(Base)`
  margin: 20px 0px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CoinStats = styled(Base)`
  align-items: center;
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  padding: 20px 10px;
  border-radius: 8px;
  justify-content: flex-start;
  flex: 1;
`;

export const CoinStatsRow = styled(Base)`
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 8px;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;

  }
`;

export const RowSpacer = styled.div`
  padding: 5px 0px;
`;

export const CoinStatsRowContainer = styled(Base)`
  flex-direction: column;
  width: 100%;
  @media (max-width: 1000px) {
    margin: 20px 0px;
  }
`;

export const CoinStatName = styled.div`
  margin: 0 10px;
`;

export const CoinStatData = styled.div`
  color: lime;
  text-overflow: ellipsis;
`;

export const AssetDataContainer = styled(Base)`
  align-items: center;
`;

export const AssetIconContainer = styled(Base)`
  background-color: ${(props) => props.theme.tertiary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0px 20px;
  width: 200px;
`;

export const AssetIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
`;

export const AssetIconName = styled.div`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  text-align: center;
`;

export const ProgressContainer = styled(Base)`
  align-items: center;
  padding: 0px 10px;
`;
