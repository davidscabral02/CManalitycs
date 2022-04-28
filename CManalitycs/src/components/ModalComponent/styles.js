import styled from 'styled-components/native';

export const PauseContent = styled.View`
  width: 90%;
  height: 45%;
  margin-top: 40%;
  position: absolute;
  align-self: center;
  opacity: 1;
  border-width: 0.5px;
  background-color: #fff;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  border-bottom-width: 0.5px;
  height: 45px;
`;
export const TitleView = styled.View`
  align-items: center;
  width: 68%;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  margin-left: 80px;
  height: 40px;
`;
export const ButtonTitle = styled.Text`
  color: #000;
  font-size: 30px
  font-weight: bold;
`;
export const PopUpContent = styled.View`
  align-items: center;
  flex: 0.9;
  border-bottom-width: 0.5px;
`;
export const BottomContent = styled.View`
  align-items: center;
  flex: 0.1;
`;
export const ContentView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ContentInfoView = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 10px;
`;
export const ContentTitle = styled.Text`
  font-size: 15px;
  color: #000;
  align-self: center;
  font-weight: bold;
`;
export const ContentInfo = styled.Text`
  font-size: 15px;
  color: #000;
  align-self: center;
  font-weight: 500;
  margin-top: 20px;
`;
export const ScrollContainer = styled.ScrollView`
  backgroundcolor: #fff;
  margin-top: 10px;
  wid
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
