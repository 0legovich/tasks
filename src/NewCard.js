import React from "react";
import isEmpty from "lodash/isEmpty";

export class NewCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: "", title: "", titleErrors: [], textErrors: [] };
  }

  validateFormData() {
    const { title, text } = this.state;
    let titleErrors = [];
    let textErrors = [];

    if (isEmpty(title)) titleErrors.push("Не может быть пустым");
    if (isEmpty(text)) textErrors.push("Не может быть пустым");

    if (titleErrors.length === 0 && textErrors.length === 0) return true;

    this.setState({ titleErrors, textErrors });
    return false;
  }

  render() {
    const { title, text, titleErrors, textErrors } = this.state;
    const { onCreateNewCard, onClose } = this.props;

    return (
      <div>
        <span style={styles.closeBtn} onClick={onClose}>
          X
        </span>
        <div style={styles.wrapper}>
          <br />
          <p>
            <b>Новая карточка</b>
          </p>
          <form
            style={styles.form}
            name="task"
            onSubmit={e => {
              e.preventDefault();
              console.log(this.validateFormData());
              if (this.validateFormData()) {
                onCreateNewCard({ title: title, text: text });
              }
            }}
          >
            <div style={styles.formBlock}>
              <span>Заголовок</span>
              <div style={styles.inputWrapper}>
                <input
                  style={styles.textInput}
                  type="text"
                  name="title"
                  value={title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                {titleErrors.map(error => (
                  <p style={styles.errorText}>{error}</p>
                ))}
              </div>
            </div>
            <div style={styles.formBlock}>
              <span>Описание задачи</span>
              <div style={styles.inputWrapper}>
                <textarea
                  style={styles.textArea}
                  name="text"
                  value={text}
                  onChange={e => this.setState({ text: e.target.value })}
                />
                {textErrors.map(error => (
                  <p style={styles.errorText}>{error}</p>
                ))}
              </div>
            </div>
            <button type="submit" style={styles.submitBtn}>
              Сохранить
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    maxWidth: 800,
    height: 400,
    textAlign: "-webkit-center",
    margin: "20% auto",
    borderRadius: 7,
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column"
  },
  form: {
    margin: 10,
    position: "relative",
    height: "100%"
  },
  formBlock: {
    display: "flex",
    margin: 10,
    justifyContent: "space-between"
  },
  inputWrapper: {
    width: "70%",
    fontSize: 14
  },
  textInput: {
    width: "100%",
    height: 20,
    borderRadius: 5,
    border: '.5px solid darkgray'
  },
  textArea: {
    width: "100%",
    height: 120,
    borderRadius: 5,
    border: '.5px solid darkgray'
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "left"
  },
  submitBtn: {
    width: "100%",
    height: 45,
    border: "0px solid darkgray",
    borderRadius: 5,
    position: "absolute",
    left: 0,
    bottom: 0,
    cursor: "pointer",
    backgroundColor: "#cfcfcf"
  },
  closeBtn: {
    position: "absolute",
    right: 0,
    top: 0,
    margin: 20,
    fontSize: 25,
    cursor: "pointer"
  }
};

export default NewCard;
