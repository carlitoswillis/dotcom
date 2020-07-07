/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

class PModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const {
      title, info, img, lnk,
    } = this.props;
    return (
      <div onClick={() => this.setState({ open: !open })}>
        <div>
          {open
            ? (
              <div className="field">
                <img className="modalimg" src={`images/${img}`} alt="thing i do" />
                <div className="modalInfoDiv">
                  <p className="modalInfo">{info}</p>
                </div>
              </div>
            )
            : (
              <div className="field">
                <img className="modalimg" src={`images/${img}`} alt="thing i do" />
                <h2 className="labelforfield">
                  {title}
                </h2>
              </div>
            )}

        </div>
      </div>
    );
  }
}

export default PModal;
