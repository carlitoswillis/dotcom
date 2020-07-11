/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const { info, color, title } = this.props;
    return (
      <div className={color} onMouseLeave={() => { if (open) this.setState({ open: false }); }} onClick={() => this.setState({ open: !open })}>
        {open
          ? (
            <div className="skillInfoDiv">
              <p className="skillInfo">{info}</p>
            </div>
          )
          : (
            <div className="skillsFill">
              <h3 className="skillTitle">
                {title}
              </h3>
            </div>
          )}
      </div>
    );
  }
}

export default Block;
