import React from 'react';
import Card from './Card'

export class CardList extends React.PureComponent {
  render() {
    const { cards } = this.props;

    return(
      <div style={styles.cardList}>
        {cards.map(card => <Card key={card.title} card={card} />)}
      </div>
    )
  }
}

const styles = {
  cardList: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

export default CardList