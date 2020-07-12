/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) { // this.props => go to parent: gif_list
      this.props.selectGif(this.props.id); // selectGif-2: call selectGif function from parent (via gif_list)
    }
  }

  // PARENT/this.props: gif_list.js (<Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />)
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src}
      className="gif"
      onClick={this.handleClick} /* selectGif-1 */
      />
    );
  }
}

export default Gif;
