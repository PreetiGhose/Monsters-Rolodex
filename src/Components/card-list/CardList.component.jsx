import { Component } from "react";
import Card from "./card.cmponent";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props.fmonsters);
    return (
      <div className="card-list">
        {this.props.fmonsters.map((monster) => (
          <Card monsters={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
