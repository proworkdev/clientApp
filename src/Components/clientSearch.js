import React from 'react';
import HeaderComponent from './../Partials/HeaderComponent';
import SidebarComponent from './../Partials/SidebarComponent';
import {
    InputGroup,
    Input,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import data from './../clients.json';

const mydata = data.data;

export default class clientSearch extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            'value': '',
            refsFound: true,
            mydata,
            filteredData: mydata
        };

        this.onChange = this.onChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.itemList = data.data
    }

    _handleSearchChange = e => {
        const { value } = e.target;
        const lowercasedValue = value.toLowerCase();

        this.setState(prevState => {
            const filteredData = prevState.mydata.filter(el =>
                el.name.toLowerCase().includes(lowercasedValue)
            );

            return { filteredData };
        });
    };

    onChange(e) {
        this.setState({ 'value': e.target.value });
    }

    getValidationState() {

        const thisvalue = this.state.value;
        const thisvalueRE = new RegExp(this.state.value, 'gi');
        let foundvalue = 0;

        for (const ref in this.refs) {
            const a = this.refs[ref].props.value || '';
            if (thisvalueRE.test(a) && thisvalue !== '') {
                this.setState({ refsFound: true });
                break;
            }
        }

        if (thisvalue !== '') {
            if (this.state.refsFound && thisvalue !== '') return 'success';
            if (!this.state.refsFound && thisvalue !== '') return 'error';
        }
    }

    render() {

        const { filteredData } = this.state;

        console.log('dfiohqeha', filteredData);

        return (

            <div>
                <div className="main-panel">
                    <SidebarComponent propData={this.props} />
                    <div className="page-container">
                        <HeaderComponent propData={this.props} />
                        <div className="inner-panel">
                            <h4>Client Search</h4>
                            <br />

                            <div>

                                <InputGroup>

                                    <Input
                                        onChange={this._handleSearchChange}
                                        placeholder="Search"
                                    />

                                </InputGroup>

                                <br />

                                {filteredData.map(el => (
                                    <Card key={el.id} >
                                        <CardBody>
                                            <img className="resImage" src={`https://randomuser.me/api/portraits/men/${el.id}.jpg`} />
                                            <CardTitle><b>{el.name}</b></CardTitle>
                                            <CardSubtitle>from {el.city}</CardSubtitle>
                                            <CardText>Working as {el.job}</CardText>
                                            <CardText>Drawing a salary of {el.salary} P.A</CardText>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
