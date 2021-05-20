import Card from "../card/card.component";

import "./card-list.styles.css";
// This will be a functional component
// Components take props are parameters. Props are any attribute we pass in the <CardList></CardList> and we get as an object.
// Children prop is anything we put in between <CardList></CardList>
// We can access the props in the App.js using this.props.
export const CardList = props => {
    // We generate the prop children ourselves. We get the dogs from the props (check CardList in App.js)
    return(<div className="card-list">
          { props.breeds.map(breed => (
              <Card key={breed.id} breed={breed} />
          ))}
    </div>)
}