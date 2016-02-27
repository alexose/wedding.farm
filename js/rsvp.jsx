var React = require('react');
var Slider = require('react-slider');

var text = [
  'Not very fancy.  Remember that you should wear shoes',
  'Neither fancy nor unfancy.',
  'Pretty fancy.  You appreciate the finer things in life.',
  'Extremely fancy.',
  'Liberace'
];

var questions = [
  'Please write a short 5000 word essay on why you\'d like to attend this event.',
  'Any special partying restrictions?',
  'I need the following in order to have a good time:',
  'Favorite Real Housewives series:',
  'What\'s the deal with Lebron this year?',
  'Favorite Julia Roberts role:',
];

var invitation = {
  id : 123,
  people : [
    {
      name : 'Bob Smith',
      child : false
    },
    {
      name : 'Sue Smith',
      child : false
    },
    {
      name : 'Bob Smith, jr.',
      child : true
    }
  ]
};

var Guest = React.createClass({
  render : function(){
    return (
      <div>
        <div className="form-group">
          <label className="control-label" for="name">Name</label>
          <div className="">
            <input id="name" name="name" type="text" placeholder={this.props.name} className="form-control input-md" required="" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label" for="needs">What do you need to have fun?</label>  
          <div className="">
            <input id="needs" name="needs" type="text" placeholder="puppies" className="form-control input-md" />
          </div>
        </div>
      </div>
    )
  }
});

var Form = React.createClass({
  render : function(){
    return (
      <div className="container page">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Répondez, s'il vous plaît.</h1>
            <form className="form-horizontal">
              <fieldset>
              {
                invitation.people.map(function(d){
                  return (
                    <Guest name={d.name} />
                  )
                })
              }
              </fieldset>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }
});

module.exports = Form; 
