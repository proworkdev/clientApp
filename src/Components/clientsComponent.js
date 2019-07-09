import React, { Component } from 'react'
import data from './../clients.json';
import HeaderComponent from './../Partials/HeaderComponent';
import SidebarComponent from './../Partials/SidebarComponent';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

export default class clientsComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            clientData: data.data,
            userdata: {},
            modal: false
        }
    }

    getClientDetails = (client) => {
        this.setState({
            modal: true,
            userdata: client
        })
    }

    toggle = () => {

        const { modal } = this.state;

        this.setState({ modal: !modal })

    }

    render() {

        const { clientData, userdata } = this.state;


        return (

            <div>
                <div className="main-panel">

                    <SidebarComponent propData={this.props} />

                    <div className="page-container">

                        <HeaderComponent propData={this.props} />

                        <div className="inner-panel">

                            <Table size="lg" bordered responsive>

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Client Name</th>
                                        <th>City</th>
                                        <th>Job Title</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        clientData.map((client, index) => {
                                            return <tr key={index} >
                                                <td>{client.id}</td>
                                                <td><img className="testImage" src={`https://randomuser.me/api/portraits/men/${client.id}.jpg`} /></td>
                                                <td>{client.name}</td>
                                                <td>{client.city}</td>
                                                <td>{client.job}</td>
                                                <td>
                                                    <Button onClick={() => this.getClientDetails(client)} color="warning"><p style={{ color: '#fff' }}>
                                                        Client Details
                                                    </p></Button>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </tbody>

                            </Table>

                        </div>

                        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Client Details</ModalHeader>
                            <ModalBody>
                                <div className="top-div">
                                    <img className="bigImage" src={`https://randomuser.me/api/portraits/men/${userdata.id}.jpg`} />
                                    <div className="right">

                                        <br />
                                        <h3>{userdata.name}</h3>
                                        <p><b>From</b> {userdata.city}</p>
                                        <p><b>Working as</b> {userdata.job}</p>
                                        <p><b>Earning </b>{userdata.salary} p.a</p>
                                    </div>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>

                    </div>
                </div>
            </div>
        )
    }
}
