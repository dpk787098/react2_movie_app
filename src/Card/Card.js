import React, { Component } from 'react';
import classes from './Card.module.css';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={classes.card_wrapper}>
                <img src={this.props.data.Poster} alt={this.props.data.Title} />
                <div className={classes.name_wrapper}>
                    <div className={classes.movie_name}>
                        {this.props.data.Title}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Card;