import React, { Component } from 'react';
import classes from './App.module.css';
import Card from './Card/Card';
import loader from './assets/preloader.gif';

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieData: [],
      loading: true,
     }
  }

  componentDidMount(){
    fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(response => response.json())
    .then(json => this.setState({movieData: json.Search, loading: false}))
  }

  render() { 
    return ( 
      <div className={classes.movie_page}>
        {
          this.state.loading ?
            <img className={classes.loader_icon} alt="loder icon" src={loader} /> 
            : 
            <h3 className={classes.title}>Movies</h3>
        }
        
        <div className={classes.cards_wrapper}>
          {
            this.state.movieData.map((data, index) => 
              <Card data={data} key={index} />
            )
          }
        </div>
      </div>
     );
  }
}
 
export default App;
