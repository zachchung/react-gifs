import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  // PARENT/this.props: app.js (<GifList gifs={this.state.gifs} selectGif={this.selectGif} />)
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} /* key is needed for react (anything unique) */
          selectGif={this.props.selectGif} /> // selectGif-3: call selectGif function from parent
        })}
      </div>
    );
  }
}

export default GifList;


// no need this.props in function??????????????????????????

// const GifList = (props) => {
//   return (
//     <div className="gif-list">
//       {props.gifs.map(gif =>
//         <Gif id={gif.id} key={gif.id}
//         selectGif={props.selectGif} />
//       )}
//     </div>
//   ); // key is needed for react (anything unique)
// };
