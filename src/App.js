import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
