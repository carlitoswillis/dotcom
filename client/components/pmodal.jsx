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
      title, info, img, lnk1,
    } = this.props;
    return (
      <div>
        <div>
          {open
            ? (
              <div className="field" onMouseEnter={() => this.setState({ open: !open })} onMouseLeave={() => this.setState({ open: !open })}>
                <img className="modalimg" src={`images/${img}`} alt="thing i do" />
                <div className="modalInfoDiv">
                  <p className="modalInfo">{info}</p>
                  <div className="folioButtons">
                    <a href={lnk1} target="_blank" rel="noreferrer">
                      <div className="folioButton">github</div>
                    </a>
                    <a href={lnk1} target="_blank" rel="noreferrer">
                      <div className="folioButton">live demo</div>
                    </a>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="field" onMouseEnter={() => this.setState({ open: !open })} onMouseLeave={() => this.setState({ open: !open })}>
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
