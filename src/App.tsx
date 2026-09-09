import { useEffect } from 'react';
import { getTodos } from './services/api/todoApi';
import Routes from './routes/Index';

function App() {
  useEffect(() => {
    getTodos().then((res) => {
      console.log(res);
    });
  }, []);
  return <Routes />;
}

export default App;
