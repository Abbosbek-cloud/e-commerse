import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './context';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
