import { useEffect } from 'react';
// import { getTodos } from './services/api/todoApi';
import Routes from './routes/Index';
import Navbar from '../components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // getTodos().then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
