import { Component } from "react";
import "./card.styles.css";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breed_id: props.breed.id,
            breed_name: props.breed.name,
            breed_image_url: "",
            breed_temperament: props.breed.temperament,
        }
    }

    componentDidMount() {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${this.state.breed_id}&size=thumb&limit=1`, {
            headers: {"x-api-key": "c94359ed-158f-4b7d-920b-77821764c3c5"}
        })  
        .then(response => response.json())
        .then(data => this.setState({breed_image_url: data[0].url}));
    }

    render(){
        return(
            <div className="card-container">
                <img alt="breed" src={ `${this.state.breed_image_url}`}/>
                <h2> { this.state.breed_name } </h2>
                <p> { this.state.breed_temperament }</p>
            </div>
        )
    }
}
