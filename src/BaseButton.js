import React from "react";

class BaseButton extends React.PureComponent {
  render() {
    const { label, onClick } = this.props;

    return (
      <button style={styles.btn} onClick={onClick}>
        <p style={styles.label}>{label}</p>
      </button>
    );
  }
}

const styles = {
  btn: {
    minHeight: 30,
    borderRadius: 3,
    fontSize: 15
  },
  label: {
    margin: 5
  }
};

export default BaseButton;
