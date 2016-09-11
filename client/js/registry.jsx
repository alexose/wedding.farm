var React = require('react');

var Registry = React.createClass({
  render : function(){
    return(
      <div className={'page centered'}>
        <h1 className="title"><img width="500px" src="img/registry.png" /></h1>
        <p>No gifts, please!</p>
        <p>But if you can't resist, <a href="https://www.weddingrepublic.com/weddingdotfarm">you may buy us a plant</a>.</p>
      </div>
    )
  }
});

module.exports = Registry;
