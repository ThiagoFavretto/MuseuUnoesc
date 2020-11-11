import {Container, Header, LogoUnoesc, TituloHeader, PesquisaContainer, LoginContaienr, Spacamento} from './styles';

import logoUnoesc from '../../assets/unoescLogo.jpg'

const Dashboard = () => {

  return  (
    <Container>
      <Header>
      
        <LogoUnoesc src={logoUnoesc}/>
        <TituloHeader>MUSEU UNOESC</TituloHeader>
       
        <PesquisaContainer></PesquisaContainer>
        <LoginContaienr>Login</LoginContaienr>
       
      </Header>
    </Container>
  )
};

export default Dashboard;