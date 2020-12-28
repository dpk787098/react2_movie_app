import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card_wrapper">
                <img src={this.props.data.Poster} alt={this.props.data.Title} />
                {console.log(this.props.data)}
                <div className="name_wrapper">
                    <div class="movie_name">
                        {this.props.data.Title}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Card;