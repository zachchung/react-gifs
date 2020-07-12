import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'uh7UWUCyJr2m2i6YlYey77dL9FZSj5hC';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [], // gifs change when user changes search
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  // search-4 (app.js -> seach_bar.js)
  // search function/ API call:
  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data // search results -> update the state
        });
      });
  }

  // selectGif (app.js -> gif.js -> gif_list.js)
  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} /> {/* search-3: pass seach Function to child */}
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} /> {/* this.state.selectedFigId?????... selectGif-3 */}
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} /> {/* pass gifs & selectGif Function to child */}
        </div>
      </div>
    );
  }
}

export default App;
