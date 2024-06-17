import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos2.css';
import { useNavigate } from 'react-router-dom';
import Cabecera from './Header';
import Lado from './Ejm';
import PiePag23 from './Footer2';
function Uno2(){
    const navigate = useNavigate();
    return (
  
      <div className="App">
        <div style={{ width: '100%' }}>
          <Cabecera></Cabecera>
        </div>
        <div className="Cuerpo">
          <div>
            <Lado src1='Ciabatta.jpg' src2='Bagel.webp' src3='Damper.jpg' style = {{width:"500px",height:"500px"}}/>
          </div>
          <div style = {{width:"800px",height:"500px", overflow:"auto"}}>
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <br />
            <p>Desarrollador: Beizaga Marquez Ricardo Andres</p>
            <br />
            <p>Estudios: Universidad Mayor de San Andres</p>
            <br />
            <p>CI: 10954488</p>
            <br />
            <p>RU: 1856197</p>
          </div>
          <div>
          <Lado src1='PanDeAjo.jpg' src2='PanDeFrutas.webp' src3='PanDePita.jpg' style = {{width:"500px",height:"300px"}}/>
          </div>
        </div>
        <div>
          <PiePag23 />
        </div>
  
      </div>
    );
}
export default Uno2;