import React from 'react';
// import {} from 'react-native';
import {Container, Title, Button} from './styles';
import ModalComponent from '../../components/ModalComponent/index';

const ReportsScreen = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Container>
      <ModalComponent
        isShown={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
      />
      <Button onPress={() => setModalVisible(true)}>
        <Title> abrir </Title>
      </Button>
    </Container>
  );
};
export default ReportsScreen;
