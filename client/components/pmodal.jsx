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
      title, info, img, lnk1, lnk2,
    } = this.props;
    return (
      <div>
        <div>
          {open
            ? (
              <div className="field" onClick={() => this.setState({ open: !open })} onMouseLeave={() => this.setState({ open: false })}>
                <img className="modalimg faded" src="images/blank.png" alt="thing i do" />
                <div className="modalInfoDiv">
                  <p className="modalInfo">{info}</p>
                  <div className="folioButtons">
                    <a href={lnk1 || lnk2} target="_blank" rel="noreferrer">
                      <div className="folioButton">{lnk1 ? 'check it out' : 'github'}</div>
                    </a>
                    {lnk1 && lnk2
                      ? (
                        <a href={lnk2} target="_blank" rel="noreferrer">
                          <div className="folioButton">github</div>
                        </a>
                      )
                      : (<></>)}
                  </div>
                </div>
              </div>
            )
            : (
              <div className="field" onClick={() => this.setState({ open: !open })} onMouseLeave={() => this.setState({ open: false })}>
                <img className="modalimg" src={`images/${img}`} alt="thing i do" />
                {title
                  ? (
                    <h2 className="labelforfield">
                      {title}
                    </h2>
                  )
                  : <></>}
              </div>
            )}

        </div>
      </div>
    );
  }
}

export default PModal;
