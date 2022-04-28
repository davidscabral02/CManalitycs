import React from 'react';

import {
  Container,
  Header,
  Title,
  Button,
  TitleIcon,
  ButtonContent,
  SelectTitle,
  SelectContent,
  TopButton,
} from './styles';

import {BarChart} from 'react-native-chart-kit';

import ModalComponent from '../../components/ModalComponent/index';

import {Dimensions} from 'react-native';

const ReportsScreen = () => {
  const chartConfig = {
    backgroundGradientFrom: '#000',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#000',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
  };

  const screenWidth = Dimensions.get('window').width;

  const [modalVisible, setModalVisible] = React.useState(false);

  const data = {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Maio',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        data: [7, 2, 0, 10, 8, 7, 6, 7, 3, 4, 9, 5],
      },
    ],
  };

  return (
    <Container>
      <Header>
        <Title> Resumo da Escola </Title>
      </Header>

      <TopButton>
        <Title> Resumo </Title>
        <SelectContent>
          <SelectTitle>Dia</SelectTitle>
          <SelectTitle>Mes</SelectTitle>
          <SelectTitle>Ano</SelectTitle>
        </SelectContent>
      </TopButton>
      <ButtonContent>
        <Title> 6 de abril </Title>
        <TitleIcon> {'<       >'} </TitleIcon>
      </ButtonContent>

      <ModalComponent
        isShown={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
      <BarChart
        data={data}
        width={400}
        height={300}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />

      <Button onPress={() => setModalVisible(true)}>
        <Title> Alunos totais por turma </Title>
        <TitleIcon> {'>'} </TitleIcon>
      </Button>
      <ButtonContent>
        <Title> Turmas </Title>
        <Title> Numero de alunos </Title>
      </ButtonContent>
    </Container>
  );
};
export default ReportsScreen;
