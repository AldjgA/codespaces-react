import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
function Nista(props){
    //alert("asd");
    return(
        <div className='centerA'>
            <div className='cont'>
                <ul>
                    <li>{props.p1}</li>
                    <li>{props.p2}</li>
                    <li>{props.p3}</li>
                </ul>
            </div>
        </div>
        
        );
}
export default Nista;