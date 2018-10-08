import React, { Component } from 'react';
import './App.css';
import { ForceGraph2D, ForceGraph3D, ForceGraphVR } from 'react-force-graph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="2D Graph">
          <ForceGraph2D 
            graphData={genRandomTree()} 
            style={{'height': '600px'}}
          />
        </div>
        <div id="3D Graph">
          <ForceGraph3D 
            graphData={genRandomTree()} 
            style={{'height': '600px'}}
          />
        </div>
      </div>
    );
  }
}

export default App;

function genRandomTree(nodeCount=300) {
  return {
    nodes: [...Array(nodeCount).keys()].map(i => ({ id: i })),
      links: [...Array(nodeCount).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
  };  
}