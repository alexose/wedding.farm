var React = require('react');

var Registry = React.createClass({
  render : function(){
    return(
      <div className='page centered'>
        <h1 className="title"><img width="500px" src="img/registry.png" /></h1>
        <p>No gifts, please!</p>
        <p>But if you can't resist, you may buy us a plant.</p>
        <p>(We will be registered at the <a href="http://www.applegatenursery.com/">Applegate Nursery</a>.  More information soon!)</p>
      </div>
    )
  }
});

module.exports = Registry;
