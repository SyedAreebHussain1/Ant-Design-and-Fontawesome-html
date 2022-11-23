// import 'antd/dist/antd.css';
import './App.css';
import AppHeader from './layout/Header';
import AppHome from './views/home';
import AppFooter from './components/home/footer';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
