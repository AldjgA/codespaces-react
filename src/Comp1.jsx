import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';
import { useNavigate } from 'react-router-dom';
import Cabecera from './Header';
import Lado from './Ejm';
import PiePag23 from './Footer2';
import Texto from './textoComp1';
function Uno(props) {
  const navigate = useNavigate();
  return (

    <div className="App">
      <div style={{ width: '100%' }}>
        <Cabecera></Cabecera>
      </div>
      <div className="Cuerpo">
        <div>
          <Lado src1='Ciabatta.jpg' src2='Bagel.webp' src3='Damper.jpg' style={{ width: "300px", height: "500px" }} />
        </div>
        <div style={{ width: "800px", height: "500px", overflow:"auto"}}>
          <Texto titulo = "Pan blanco" src = "PanBlanco.jpg" descripcion = "El pan blanco es el más común en muchos países. Tiene un sabor suave y un color claro. Como parte del proceso de molturación de la harina, se eliminan las capas de salvado y germen de la baya de trigo integral de la harina de pan blanco. Este método elimina los aceites naturales que se encuentran en las bayas de trigo, lo que permite conservar los productos durante más tiempo, ya que los aceites que se encuentran en el salvado y el germen son los que antes se estropean. El pan blanco carece de los beneficios nutricionales del pan integral."></Texto>
          <Texto titulo = "Pan integral" src = "PanIntegral.webp" descripcion = "El pan integral se elabora con harina que aprovecha el grano entero y contiene más fibra, vitaminas, minerales y antioxidantes que el pan blanco. El pan hecho con grano integral tiene más valor nutritivo que el elaborado con harina sin salvado ni germen."></Texto>
          <Texto titulo = "Pan de centeno" src = "PanDeCenteno.jpg" descripcion = "El pan de centeno se hace con harina de centeno. Esencial en sándwiches delicatessen como los Reubens, los hay claros, medios y oscuros, según la parte de la baya de centeno que se utilice para hacer la harina y la parte del grano que se muela. En Europa, el pan de centeno se suele elaborar con harina de centeno 100%, mientras que en EE. UU. se suele utilizar melaza y cacao en polvo, que realzan el sabor y el color. También se pueden añadir semillas de alcaravea, que realzan el aroma de la hogaza aún más. El pan de centeno tiene una textura densa, un sabor terroso y una acidez peculiar."></Texto>
          <Texto titulo = "Pan de maíz<" src = "PanDeMaiz.webp" descripcion = {"El pan de maíz es un clásico en EE. UU. que forma parte de la cultura del país desde hace varias generaciones. Este pan se hace con maíz finamente molido, harina de trigo, huevos y leche (o suero de leche). Tradicionalmente se hornea en una sartén, sin levadura o con levadura en polvo. Su textura puede ser gruesa o fina y suele endulzarse con azúcar o miel.\n"+"El pan de maíz se asocia al Sur de Estados Unidos, donde suele acompañar platos como el chili y los guisos. Es un pan denso con un ligero sabor a nuez. El pan de maíz es un plato versátil que se puede disfrutar de varias maneras. Suele servirse con mantequilla o miel, o rociado con sirope. Tanto si buscas una guarnición para acompañar la cena o una receta para el desayuno, el pan de maíz es una opción perfecta. Con su sabor y textura únicos, seguro que deleita a todos los paladares."}></Texto>
         
          

          <h2>Pan de soda</h2>
          <img src="PanDeSodaIrlandes.jpg" alt="Pan de soda" style={{ width: "300px", height: "300px", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
          El pan de soda irlandés es una auténtica obra maestra culinaria. La combinación de harina de trigo, suero de leche y bicarbonato de sodio da a este pan un sabor inconfundible que lleva generaciones deleitando a todos los paladares. Es ligeramente dorado por fuera y húmedo y esponjoso por dentro, con una textura que se desmenuza fácilmente. La combinación de bicarbonato sódico y suero de leche le otorga un sabor ligeramente ácido.
          <br />
          El pan de soda es rápido de hacer, es decir, que no necesita tiempo de fermentación y se prepara en pocos minutos. Es increíblemente versátil y se puede utilizar en una amplia variedad de platos. Es una opción popular para el desayuno, el almuerzo o la cena y se suele servir con mantequilla, miel o mermelada. También puede acompañar sopas, guisos o ensaladas, hacer sándwiches o servir de base a un budín de pan. Ya sea para disfrutar de un copioso desayuno irlandés o simplemente para picar algo, el delicioso pan de soda de la Isla Esmeralda sin duda gustará a todo el mundo.
        </div>
        <div>
          <Lado src1='PanDeAjo.jpg' src2='PanDeFrutas.webp' src3='PanDePita.jpg' style={{ width: "300px", height: "300px" }} />
        </div>
      </div>
      <div>
        <PiePag23 />
      </div>

    </div>
  );
}
export default Uno;