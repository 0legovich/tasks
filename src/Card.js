import React from 'react';

export class Card extends React.PureComponent {
  render() {
    const { card } = this.props;
    return(
      <div style={styles.cardWrapper}>
        <div style={styles.card}>
          <h3 className="baseMargin">{card.title}</h3>
          <p className="baseMargin" style={styles.cardText}>{card.text}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  cardWrapper: {
    flexBasis: '33%',
    height: 150,
  },
  card: {
    border: '1px solid',
    borderRadius: 5,
    margin: 10,
    height: 'calc(100% - 22px)',
    overflow: 'scroll',
  },
  cardText: {
    display: 'inline-block',
  }
};

export default Card;
