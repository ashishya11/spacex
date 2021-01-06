import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import {
    loadAllSpaceShip,
    loadAllFilteredByLaunchSpaceShipData,
    loadAllFilteredByLaunchYearSpaceShipData,
    loadAllFilteredByLaunchAndLandSpaceShipData
} from '../../actions';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            launch: '',
            land: '',
            year: '',
            filterBy: '',
            years: [
                { a: '2006', b: '2007' },
                { a: '2008', b: '2009' },
                { a: '2010', b: '2011' },
                { a: '2012', b: '2013' },
                { a: '2014', b: '2015' },
                { a: '2016', b: '2017' },
                { a: '2018', b: '2019' },
                { a: '2020' }
            ]
        }
    }

    componentDidMount() {
        this.props.loadAllSpaceShip();
    }

    handleYearFilterClick = (e) => {
        const filterByYearValue = e.target.value;
        this.setState({ year: filterByYearValue }, () => {
            this.getApiCall();
        })
    }

    handleLaunchFilterClick = (e) => {
        const filterByLaunchValue = e.target.value;
        this.setState({ launch: filterByLaunchValue }, () => {
            this.getApiCall();
        })
    }

    handleLandFilterClick = (e) => {
        const filterByLandValue = e.target.value;
        this.setState({ land: filterByLandValue }, () => {
            this.getApiCall();
        })
    }

    getApiCall() {
        const { launch, land, year } = this.state;
        // if ((launch !== '' && land !== '' && year !== '') || (launch == '' && land == '')) {
            this.props.loadAllFilteredByLaunchYearSpaceShipData(launch, land, year);
        // } else if (launch !== '' && land !== '') {
            // this.props.loadAllFilteredByLaunchAndLandSpaceShipData(launch, land);
        // } else if (launch !== '') {
            // this.props.loadAllFilteredByLaunchSpaceShipData(launch);
        // }

    }

    render() {
        const { launch, land, year } = this.state;
        return (
            <div className="app_container">
                <h2 className="header_title">SpaceX Launch Programs</h2>
                <div className="row">
                    <div className="col_20">
                        <div className="filter_container">
                            <div className="card_content">
                                <label>Filter</label>
                                <div className="filter_by_launch_year_container">
                                    <div className="filter_title">
                                        Launch Year
                                    </div>
                                    <hr />
                                    {this.state.years.map((value, index) => (
                                        <div key={index} className="filter_content">
                                            <button className={year == value.a ? 'active' : ''} value={value.a} onClick={(e) => this.handleYearFilterClick(e)}>{value.a}</button>
                                            {value.b !== void 0 ? <button className={year == value.b ? 'active' : ''} value={value.b} onClick={(e) => this.handleYearFilterClick(e)}>{value.b}</button> : ''}
                                        </div>
                                    ))}
                                </div>
                                <div className="filter_by_launch_year_container">
                                    <div className="filter_title">
                                        Successful Launch
                                    </div>
                                    <hr />
                                    <div className="filter_content">
                                        <button className={launch == 'true' ? 'active' : ''} value="true" onClick={(e) => this.handleLaunchFilterClick(e)}>True</button>
                                        <button className={launch == 'false' ? 'active' : ''} value="false" onClick={(e) => this.handleLaunchFilterClick(e)}>False</button>
                                    </div>
                                </div>
                                <div className="filter_by_launch_year_container">
                                    <div className="filter_title">
                                        Successful Landing
                                    </div>
                                    <hr />
                                    <div className="filter_content">
                                        <button className={land == 'true' ? 'active' : ''} value="true" onClick={(e) => this.handleLandFilterClick(e)}>True</button>
                                        <button className={land == 'false' ? 'active' : ''} value="false" onClick={(e) => this.handleLandFilterClick(e)}>False</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_80">
                        {this.props.ships.map((singleShip) => (
                            <div key={singleShip.flight_number} className="col_25">
                                <div className="card_container">
                                    <div className="image_container">
                                        <img src={singleShip.links.mission_patch_small} className="avatar_img" alt="logo" />
                                    </div>
                                    <div className="card_content">
                                        <p className="title">{`${singleShip.mission_name} #${singleShip.flight_number}`}</p>
                                        <p><span className="details">Mission Ids:</span>{singleShip.mission_id.map((singleMissionId) => (
                                            <li key={singleMissionId}>{singleMissionId}</li>
                                        ))}</p>
                                        <p><span className="details">Launch Year:</span><span>{singleShip.launch_year}</span></p>
                                        <p><span className="details">Successful Launch:</span><span>{`${singleShip.launch_success}`}</span></p>
                                        <p><span className="details">Successful Landing:</span><span>{`${singleShip.rocket.first_stage.cores[0].land_success}`}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <p><span>Developed by:</span> Ashish Kumar Singh</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ home }) => {
    const { ships } = home;
    return { ships };
}

export default connect(mapStateToProps, {
    loadAllSpaceShip,
    loadAllFilteredByLaunchSpaceShipData,
    loadAllFilteredByLaunchYearSpaceShipData,
    loadAllFilteredByLaunchAndLandSpaceShipData
})(App);
