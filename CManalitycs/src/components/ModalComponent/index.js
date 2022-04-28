import React from 'react';
import {Modal} from 'react-native';

import {
  PopUpContent,
  Header,
  HeaderText,
  TitleView,
  BottomContent,
  ContentTitle,
  ContentInfo,
  ContentView,
  PauseContent,
  Button,
  ButtonTitle,
} from './styles';

const ModalComponent = ({isShown, onClose}) => {
  const info = [
    {
      title: 'Primeiro ano fundamental',
      quantity: '25',
      key: 1,
    },
    {
      title: 'Segundo ano fundamental',
      quantity: '32',
      key: 2,
    },
    {
      title: 'Terceiro ano fundamental',
      quantity: '16',
      key: 3,
    },
    {
      title: 'Quarto ano fundamental',
      quantity: '28',
      key: 4,
    },
    {
      title: 'Quinto ano fundamental',
      quantity: '20',
      key: 5,
    },
    {
      title: 'Sexto ano fundamental',
      quantity: '33',
      key: 6,
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShown}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
    >
      <PauseContent>
        <Header>
          <TitleView>
            <HeaderText>Alunos totais por turma</HeaderText>
          </TitleView>
          <Button onPress={onClose}>
            <ButtonTitle>X</ButtonTitle>
          </Button>
        </Header>
        <PopUpContent>
          <ContentView>
            <ContentTitle>Turmas</ContentTitle>
            <ContentTitle>Numero de alunos</ContentTitle>
          </ContentView>
          {info.map(item => (
            <ContentView key={item.key}>
              <ContentInfo>{item.title}</ContentInfo>
              <ContentInfo>{item.quantity}</ContentInfo>
            </ContentView>
          ))}
        </PopUpContent>
        <BottomContent>
          <ContentView>
            <ContentTitle>Turmas</ContentTitle>
            <ContentTitle>Numero de alunos</ContentTitle>
          </ContentView>
        </BottomContent>
      </PauseContent>
    </Modal>
  );
};

export default ModalComponent;
