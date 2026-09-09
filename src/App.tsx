import { useEffect } from 'react';
import { getTodos } from './services/api/todoApi';

function App() {
  useEffect(() => {
    getTodos().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <h1 className="bg-violet-500">It's TailwindCSS working</h1>
    </>
  );
}

export default App;
