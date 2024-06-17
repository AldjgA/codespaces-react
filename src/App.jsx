import './App.css';
import { useNavigate } from 'react-router-dom';
import Cabecera from './Header';
import Lado from './Ejm';
import PiePag23 from './Footer2';

function App() {
  const navigate = useNavigate();
  return (

    <div className="App">
      <div style={{ width: '100%' }}>
        <Cabecera></Cabecera>
      </div>
      <div className="Cuerpo">
        <div>
          <Lado src1='Ciabatta.jpg' src2='Bagel.webp' src3='Damper.jpg' style = {{width:"300px",height:"500px"}}/>
        </div>
        <div style = {{width:"800px",height:"500px"}}>
          <img src="Octocat.png" className="App-logo" alt="logo" />
          <p>
            GitHub Codespaces <span className="heart">♥️</span> React
          </p>
          <p className="small">
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <p>
            <button onClick={() => navigate('/component2')}>Go to Component 1</button>
          </p>
          <p>
            <button onClick={() => navigate('/component3')}>Go to Component 1</button>
          </p>
        </div>
        <div>
        <Lado src1='PanDeAjo.jpg' src2='PanDeFrutas.webp' src3='PanDePita.jpg'  style = {{width:"300px",height:"300px"}}/>
        </div>
      </div>
      <div>
        <PiePag23 />
      </div>

    </div>
  );
}

export default App;
//src4='PanPretzel.webp' src5='PanMultigrano.webp.jpg'