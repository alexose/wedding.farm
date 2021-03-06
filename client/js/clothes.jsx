var React = require('react');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var Draggable = require('react-draggable');

var pubsub = require('./pubsub.js');

// Read contents of directories
var clothingFiles = require('fs').readdirSync('./img/clothes');
var paperdollFiles = require('fs').readdirSync('./img/bodies');

var Garment = React.createClass({
  handleStart : function(e, i){

    // Shameful hack
    if (i.node && i.node.src && i.node.src.indexOf && i.node.src.indexOf('randoshoe') !== -1){
      pubsub.publish('open-clothes-modal');
    }
  },
  render : function(){
    return(
      <Draggable onStart={this.handleStart}>
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
  'Analyzing.',
  'Analyzing..',
  'Analyzing...',
  'Initial results recieved.  Please wait..',
  'Initial results recieved.  Please wait..',
  'This outfit has been approved!'
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
  handleWhat : function(e){
    e.preventDefault();
    pubsub.publish('open-what-modal');
  },
  render : function(){
    return(
      <div className="analysis">
        <div className="analysis-contents">
          <button onClick={this.handleClick} className="analysis">Submit for approval</button>
          <p>{this.state.text}</p>
        </div>
        <p>
          <a onClick={this.handleWhat} href="#" style={{'font-size':'15px'}}>Ok, what should <br /> I actually wear?</a>
        </p>
      </div>
    )
  }
});

var Clothes = React.createClass({
  getInitialState: function(){
    return { current : paperdollFiles[0] };
  },
  select : function(e, eventKey){
    this.setState({ current: eventKey });  
  },
  render: function(){
    var context = this;
    return (
      <div className="page full">
        <div className="row">
          <div className="col-md-4">
            <div className="paperdolls">
              <Paperdoll src={this.state.current} /><br />
              <DropdownButton 
                bsSize="large"
                title={this.state.current.replace('.png','')}
                onSelect={this.select}
                id="dropdown-size-large">

                {
                  paperdollFiles.map(function(path){
                    return (
                      <MenuItem eventKey={path}>{path.replace('.png', '')}</MenuItem>
                    )
                  })
                }
              </DropdownButton><br /><br /><br />
              <Analysis />
            </div>
          </div>
          <div className="col-md-8">
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
        </div>
      </div>
    )
  }
});

module.exports = Clothes;
