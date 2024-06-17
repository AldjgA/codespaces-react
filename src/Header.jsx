import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

import { Button } from 'reactstrap';

import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';

function Cabecera(props) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    return (
        <div className='contG'>

            <Navbar>
                <Nav style={{width:"100%"}}>
                    <div className="algo">
                        <NavItem >
                            <button className='botonR' style={{backgroundImage:"url(/pan1.jpg)"}} onClick={() => navigate('/')}>Inicio</button>
                        </NavItem>
                        <NavItem >
                            <button className='botonR' style={{backgroundImage:"url(/pan2.jpg)"}} onClick={() => navigate('/NuestrosProductos')}>Nuestros Productos</button>
                        </NavItem>
                        <NavItem > 
                            <button className='botonR' style={{backgroundImage:"url(/pan3.jpg)"}} onClick={() => navigate('/AcercaDeNosotros')}>Acerca de Nosotros</button>
                        </NavItem>
                    </div>
                </Nav>
            </Navbar>


        </div>
    );
}
export default Cabecera;


