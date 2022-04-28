import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #bfbfbf;
  height: 12%;
  margin-bottom: 10%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;
export const TitleIcon = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-right: 10px;
`;
export const SelectTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;
export const SelectContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 50%;
  margin-left: 15px;
`;
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  height: 8%;
  margin-top: 20px;
  border-width: 0.5px;
  border-bottom-width: 0px;
`;
export const TopButton = styled.View`
  align-items: flex-start;
  justify-content: space-evenly;
  width: 95%;
  height: 8%;
  margin-top: 20px;
  border-width: 0.5px;
  border-bottom-width: 0px;
`;
export const ButtonContent = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  height: 8%;
  border-width: 0.5px;
  margin-bottom: 20px;
`;
