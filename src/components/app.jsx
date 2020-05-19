import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "jUwpNzg9IcyrK" },
      { id: "jUwpNzg9IcyrK" },
      { id: "jUwpNzg9IcyrK" },
      { id: "jUwpNzg9IcyrK" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="jUwpNzg9IcyrK"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
