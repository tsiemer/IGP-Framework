import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


function getSubItems(data){
    let items = [];
    let counter = 0;

    for(let item of data){
        items.push(
            <DropdownItem key={counter} href={'/blog/' + item.sub_nav_link_label[0].text + '/'}>
                {item.sub_nav_link_label[0].text}
            </DropdownItem>
        )
        counter++;
    }

    return items
}

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
        let { data } = this.props;
        return (
            <div className="Navigation">
            <Navbar color="black" light expand="md">
                {/* <img className="logo" src={data.edges[0].node.logo.url}/> */}
                <NavbarBrand>
                    {/* <p>{data.edges[0].node.display_name[0].text}</p> */}
                    <img className="logo" src={"https://inventivedev.wpengine.com/wp-content/uploads/2018/09/inventive-logo-black-transparent.png"}/>
                </NavbarBrand>

                <Nav className="ml-auto" navbar>
                    { data.edges.map(edge => {
                        let navItems = [];
                            {
                                edge.node.nav.forEach(navItem => {
                                    navItems.push(
                                        <>
                                            {navItem.fields[0].sub_nav_link_label !== null ? (
                                                <>
                                                <DropdownToggle onClick={() => this.toggle()} > 
                                                    {navItem.primary.label[0].text}
                                                </DropdownToggle>
                                                <Dropdown isOpen={this.state.isOpen} nav>
                                                    <DropdownMenu right>
                                                        {getSubItems(navItem.fields)}
                                                    </DropdownMenu>
                                                </Dropdown> </>) : (
                                                <NavItem>
                                                    <NavLink href={'/' + navItem.primary.label[0].text + '/'}>{ navItem.primary.label[0].text }</NavLink>
                                                </NavItem>)
                                            }
                                        </>
                                    )
                                })
                            }
                            return navItems;
                        })
                    }
                </Nav>
            </Navbar>
        </div>
        )
    }
}
    