var React = require('react');
var Draggable = require('react-draggable');

// Read contents of directories
var clothingFiles = require('fs').readdirSync('./img/clothes');
var paperdollFiles = require('fs').readdirSync('./img/bodies');

var Garment = React.createClass({
  render : function(){
    console.log(this.props.size);
    return(
      <Draggable>
        <img 
          src={'img/clothes/' + this.props.src} 
          className="garment" 
          draggable="false" 
          style={{'max-width': this.props.size}} />
      </Draggable>
    )
  }
});

var Paperdoll = React.createClass({
  render : function(){
    return(
      <img src={'img/bodies/' + this.props.src} className="paperdoll" />
    )
  }
});


var text = [
  'Loading analysis protocol...',
  'Spinning up EC2 instances...',
  'Analyzing...',
  'Initial results recieved.  Please wait',
  'Yes, you can wear this!'
];

var Analysis = React.createClass({
  getInitialState : function(){
    return { text : '' };
  },
  handleClick : function(){
    var context = this;
    text.forEach(function(d, i){
      this.setTimeout(function(){
        context.setState({ text : d });
      }, i * 2000);
    });

  },
  render : function(){
    return(
      <div className="analysis">
        <div className="analysis-contents">
          <button onClick={this.handleClick} className="analysis">Analyze outfit</button>
          <p>{this.state.text}</p>
        </div>
      </div>
    )
  }
});

var Clothes = React.createClass({
  getInitialState: function(){
    return { current : paperdollFiles[0] };
  },
  render: function(){
    var context = this;
    var changePaperdoll = function(event){
      context.setState({ current : event.target.value });
    };
    return (
      <div className="page full">
        <div className="paperdolls">
          <select onChange={changePaperdoll} >
            {
              paperdollFiles.map(function(path){
                return (
                  <option value={path}>{path}</option>
                )
              })
            }
          </select>
          <br />
          <Paperdoll src={this.state.current} />
          <br />
          <Analysis />
        </div>
        {
          clothingFiles.map(function(path){
            var size = path ? path.split('-')[1] : false;
            size = size ? size.split('.')[0] : 100;
            return (
              <Garment src={path} size={size} />
            )
          })
        }
      </div>
    )
  }
});

module.exports = Clothes;
