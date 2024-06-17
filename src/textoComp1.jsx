/*

*/
function Texto(props) {
    return(
        <div>
            <h2>{props.titulo}</h2>
          <img src={props.src} alt={props.titulo} style={{ width: "300px", height: "300px", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
          {props.descripcion}
          <br />
        </div>
    );
}
export default Texto;