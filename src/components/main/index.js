import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import { loadAllSpaceShip, loadAllFilteredByLaunchSpaceShipData } from '../../actions';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterByLaunchValue: '',
        }
    }

    componentDidMount() {
        this.props.loadAllSpaceShip();
    }

    renderShipCard() {

    }

    handleClick = (e) => {
        const filterByLaunchValue = e.target.value;
        this.setState({ filterByLaunchValue: filterByLaunchValue }, () => {
            this.props.loadAllFilteredByLaunchSpaceShipData(filterByLaunchValue);
        })
    }

    render() {
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
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2006</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2007</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2008</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2009</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2010</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2011</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2012</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2013</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2014</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2015</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2016</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2017</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2018</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>2019</button>
                                    </div>
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>2020</button>
                                    </div>
                                </div>
                                <div className="filter_by_launch_year_container">
                                    <div className="filter_title">
                                        Successful Launch
                                    </div>
                                    <hr />
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>True</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>False</button>
                                    </div>
                                </div>
                                <div className="filter_by_launch_year_container">
                                    <div className="filter_title">
                                        Successful Landing
                                    </div>
                                    <hr />
                                    <div className="filter_content">
                                        <button value="true" onClick={(e) => this.handleClick(e)}>True</button>
                                        <button value="false" onClick={(e) => this.handleClick(e)}>False</button>
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
    loadAllSpaceShip, loadAllFilteredByLaunchSpaceShipData
})(App);
