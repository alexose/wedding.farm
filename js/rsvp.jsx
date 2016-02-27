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
      name : 'Mr. Bob J. Smith, Esq.',
      child : false
    },
    {
      name : 'Mrs. Sue S. Smith',
      child : false
    },
    {
      name : 'Bob Smith, Jr.',
      child : true
    }
  ]
};

var Guest = React.createClass({
  render : function(){
    return (
      <div className="guest">
        <div className="form-group">
          <label className="control-label col-md-3" for="name">Your Name</label>
          <div className="col-md-6">
            <input id="name" name="name" type="text" placeholder={this.props.name} className="form-control input-md" required="" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-3" for="needs">{this.props.question}</label>  
          <div className="col-md-6">
            <input id="needs" name="needs" type="text" placeholder="puppies" className="form-control input-md" />
          </div>
        </div>
        <hr />
      </div>
    )
  }
});

var Form = React.createClass({
  render : function(){

    var shuffled = shuffle(questions);

    console.log(shuffled);

    return (
      <div className="container page">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Répondez, s'il vous plaît.</h1>
          </div>
        </div>
        <form className="form-horizontal">
          <fieldset>
             
          {
            invitation.people.map(function(d,i){
              return (
                <Guest name={d.name} question={shuffled[(i+1) % shuffled.length]} />
              )
            })
          }
          </fieldset>
        </form>
      </div>
    )
  }
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = Form; 
