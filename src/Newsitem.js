import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Newsitem extends Component {
    render() {
        return (
            <div >
                <div className="card">
                    <img src={this.props.src} className="card-img-top" alt="Loading"/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title.slice(0,80)+'...'}</h5>
                            <p className="card-text">{this.props.description?this.props.description.slice(0,80)+'...':""}</p>
                            <Link to={this.props.url} className="btn btn-primary">Read More</Link>
                        </div>
                </div>
            </div>
        )
    }
}
