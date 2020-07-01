/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const { field, info, img } = this.props;
    return (
      <div onClick={() => this.setState({ open: !open })}>
        <div className="field">
          <img className="modalimg" src={`images/${img}`} alt="thing i do" />
          <h2 className="labelforfield">
            {field}
          </h2>
        </div>
      </div>
    );
  }
}

export default Modal;
