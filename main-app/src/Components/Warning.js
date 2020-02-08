import React from "react";

export default class Warning extends React.Component {
  render() {
    return (
      <ul className='warning-container'>
        {this.props.errors.map(error => {
          return (
            <li className="warning" key={error}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }
}
