var React = require('react');
var request = require('superagent');
var pubsub = require('./pubsub.js');
var data = [];

// Load registry data on app load
request
  .get('/api/registry/')
  .end(function(err, res){
    data = res.text;
    try {
      data = JSON.parse(res.text);
      var context = pubsub.Context.create();
      pubsub.publish('registry.update', context, data);
    } catch(e){

      // Oh no
      console.log(e);
    }
  });


var Registry = React.createClass({
  getInitialState: function(){
    return { data : data }
  },
  componentWillMount: function(){
    pubsub.subscribe('registry.update', function(context, data){
      this.setState({ data: data }); 
    }.bind(this));
  },
  render : function(){
    return(
      <div className={'page centered'}>
        <h1 className="title"><img width="500px" src="img/registry.png" /></h1>
        <p>No gifts, please!</p>
        <p>But if you can't resist, you may buy us a plant.</p>
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th></th>
              <th>Cost</th>
              <th>Benefactor</th>
            </tr>
            {
              this.state.data.map(function(row){
                return (
                  <tr>
                    <td>{row.item}</td>
                    <td>{row.description}</td>
                    <td>{row.cost}</td>
                    <td>{row.benefactor}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = Registry;
