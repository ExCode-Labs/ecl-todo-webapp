import { useEffect } from 'react';
// import { getTodos } from './services/api/todoApi';
import Routes from './routes/Index';
import Navbar from '../components/Navbar';
import TodosSection from './components/TodosSection';

function App() {
  useEffect(() => {
    // getTodos().then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <TodosSection />
      <Routes />
    </div>
  );
}

export default App;
