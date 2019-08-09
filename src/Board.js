import React from "react";
import NewCard from "./NewCard";
import CardList from "./CardList";
import BaseButton from "./BaseButton";

class Board extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newCardForm: true,
      cards: []
    };
  }

  newCardForm() {
    const { cards } = this.state;
    return (
      <NewCard
        onClose={() => this.setState({newCardForm: false})}
        onCreateNewCard={data =>
          this.setState({ cards: cards.concat(data), newCardForm: false })
        }
      />
    );
  }

  render() {
    const { cards, newCardForm } = this.state;

    if (newCardForm) return this.newCardForm();

    return (
      <React.Fragment>
        <div className="baseMargin">
          <BaseButton
            label="Добавить карточку"
            onClick={() => this.setState({ newCardForm: true })}
          />
        </div>
        <CardList cards={cards} />
      </React.Fragment>
    );
  }
}

export default Board;
