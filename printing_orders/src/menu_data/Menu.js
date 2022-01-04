import React, {Component} from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Menu extends Component {
    render() {
    return (
        <BrowserRouter>

            <MDBNav color="indigo" className="justify-content-end p-2">
                <MDBNavItem>
                    <MDBNavLink active className="white-text" to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" to="#!">Producuts</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" to="#!">Generate Orders</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" to="#!">Contact</MDBNavLink>
                </MDBNavItem>
            </MDBNav>

        </BrowserRouter>
        );
    }
}

export default Menu;