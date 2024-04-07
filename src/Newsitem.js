import React from 'react'
import {Link} from 'react-router-dom'


const Newsitem = (props)=> {
        return (
            <div >
                <div className="card">
                    <img src={props.src} className="card-img-top" alt="Loading"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title.slice(0,80)+'...'}</h5>
                            <p className="card-text">{props.description?props.description.slice(0,80)+'...':""}</p>
                            <Link to={props.url} className="btn btn-primary">Read More</Link>
                        </div>
                </div>
            </div>
        )
}

export default Newsitem;