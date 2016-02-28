var React = require('react');
var Slider = require('rc-slider');

var text = [
  'Not very fancy.  Remember that you should wear shoes',
  'Neither fancy nor unfancy.',
  'Pretty fancy.  You appreciate the finer things in life.',
  'Extremely fancy.',
  'Liberace'
];

var questions = [
  { 
    q : 'Please write a short 5000 word essay on why you\'d like to attend this event.',
    a : [
      '5000 words?  That\'s way too long.  Listen, asking me to go all the way to Southern Oregon is more than enough.',
      "WELL, PRINCE, Genoa and Lucca are now no more than private estates of the Bonaparte family. No, I warn you, that if you do not tell me we are at war, if you again allow yourself to palliate all the infamies and atrocities of this Antichrist (upon my word, I believe he is), I don't know you in future, you are no longer my friend, no longer my faithful slave, as you say. There, how do you do, how do you do? I see I'm scaring you, sit down and talk to me.",
      'Chapter 1 \r\n\r\nThe sky above the port was the color of television, tuned to a dead channel. \r\n\r\n\"It\'s not like I\'m using,\" Case heard someone say, as he shouldered his way through the crowd around the door of the Chat. \"It\'s like my body\'s developed this massive drug deficiency.\" It was a Sprawl voice and a Sprawl joke. The Chatsubo was a bar for professional expatriates; you could drink there for a week and never hear two words in Japanese.',
      '\"I\'ve watched through his eyes, I\'ve listened through his ears, and I tell you he\'s the one. Or at least as close as we\'re going to get.\" \r\n\"That\'s what you said about the brother.\" \r\n\"The brother tested out impossible. For other reasons. Nothing to do with his ability.\" \r\n\"Same with the sister. And there are doubts about him. He\'s too malleable. Too willing to submerge himself in someone else\'s will.\" \r\n\"Not if the other person is his enemy.\"',
    ]
  },
  { 
    q : 'Any special partying restrictions?',
    a : [
      'No, I am prepared to meet this party head-on.',
      'No, although I might need to be done before 4am.',
      'I need to make it home early so I can catch up on House of Cards'
    ]
  },
  { 
    q : 'I won\'t have fun unless:',
    a : [
      'There is a bouncy castle',
      'Everyone promises not to take pictures',
      'The ceremony is 4 minutes or less'
    ]
  },
  { 
    q : 'Favorite Real Housewives series:',
    a : [
      'Real Housewives of Atlanta',
      'Real Housewives of New Jersey',
      'Real Housewives of Antarctica',
      'Real Housewives of Space Station Mir'
    ]
  },
  { 
    q : 'What\'s the deal with Lebron this year?',
    a : [
      'Sorry, I don\'t follow sports',
      'Who?',
      "Listen kid, I've been hearing that crap ever since I was at UCLA. I'm out there busting my buns every night! Tell your old man to drag Walton and Lanier up and down the court for 48 minutes!"
    ]
  },
  { 
    q : 'Favorite Julia Roberts role:',
    a : [
      'Pretty woman, obviously.  Although, there are just so many good ones...',
      'Runaway Bride.  Ha, just kidding!',
      'Oceans 11 is the only one I\'ve seen',
      'Twister.  Wait, that was Helen Hunt'
    ]
  },
];

var invitation = {
  id : 123,
  people : [
    {
      name : 'Mr. Bob J. Smith, Esq.'
    },
    {
      name : 'Mrs. Sue S. Smith'
    },
    {
      name : 'Bob Smith, Jr.',
      child : true
    }
  ]
};

var Guest = React.createClass({
  getInitialState : function(){
    return { hidden : true };
  },
  toggleForm: function(e){
    if (e && e.preventDefault){
      e.preventDefault();
    }
    this.setState({ hidden: !this.state.hidden });
  },
  update: function(state){
    this.setState({ 
      decision : state.hi + state.or,
    }); 
  },
  render : function(){
    console.log(this.props.name + 'fart');
    return(
      <div>
        <div className="title-row row" onClick={this.toggleForm}>
          <div className="col-md-3">
            <div className={"fake-checkbox pull-right " + this.state.decision}>&nbsp;</div>
          </div>
          <div className="col-md-6">
            <h2>{this.props.name}</h2>
          </div>
        </div>
        
        <div className="row">&nbsp;</div>
       
        <div className={'guest-form ' + (this.state.hidden ? 'hidden' : 'visible') }>
          <Form 
            name={this.props.name} 
            question={this.props.question} 
            answer={this.props.answer} 
            toggleForm={this.toggleForm}
            update={this.update}
            changeName={this.props.changeName}
          />
        </div>
      </div>
    )
  }
});

var Form = React.createClass({
  getInitialState : function(){
    return {
      hi : 'blank',
      or : 'blank'
    };
  },
  handleRadio : function(e){
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj, function(){
      this.props.update(this.state); 
    });
  },
  render : function(){
    return (
      <div className="guest">

        <div className="form-group">
          <label className="control-label col-md-3" for="name">Your Name</label>
          <div className="col-md-6">
            <input onChange={this.props.changeName} id="name" name="name" type="text" value={this.props.name} className="form-control input-md" required="" />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" for="radios">Party in Kea'au?</label>
          <div className="col-md-6">
            <div className="radio">
              <label for="radios-0">
                <input onClick={this.handleRadio} type="radio" name="hi" id="radios-0" value="yes"/>
                Happily Accept
              </label>
            </div>
            <div className="radio">
              <label for="radios-1">
                <input onClick={this.handleRadio} type="radio" name="hi" id="radios-1" value="no" />
                Regretfully Decline
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label className="col-md-3 control-label" for="radios">Ceremony in Applegate?</label>
          <div className="col-md-6">
            <div className="radio">
              <label for="radios-2">
                <input onClick={this.handleRadio} type="radio" name="or" id="radios-2" value="yes"/>
                Happily Accept
              </label>
            </div>
            <div className="radio">
              <label for="radios-3">
                <input onClick={this.handleRadio} type="radio" name="or" id="radios-3" value="no" />
                Regretfully Decline
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label className="col-md-3 control-label" for="diet">Any dietary restrictions?</label>
          <div className="col-md-6">                     
            <textarea rows="4" className="form-control" id="textarea" name="textarea" />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label" for="question">{this.props.question}</label>
          <div className="col-md-6">                     
            <textarea rows="4" className="form-control" id="textarea" name="textarea" defaultValue={this.props.answer} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3" for="needs">How fancy are you?</label>  
          <div className="col-md-6 slider-wrap">
            <Slider
              defaultValue={7}
              onChange={this.changeValue}
              step={1}
              max={10}
              min={1} />
          </div>
        </div>
       
        <div className="form-group">
          <div className="col-md-9">
            <button name="singlebutton" className="btn btn-primary pull-right" onClick={this.props.toggleForm}>All done!</button>
          </div>
        </div>
 
        <hr />
      </div>
    )
  }
});

var Rsvp = React.createClass({
  getInitialState : function(){
    return { invitation : invitation };
  },
  addNew : function(){

    var invitation = this.state.invitation;

    invitation.people.push({
      name : 'Surprise guest!'
    });

    this.setState({ invitation : invitation });
  },
  render : function(){

    var shuffled = shuffle(questions);

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
          <hr />
          {
            invitation.people.map(function(d,i){

              var question = shuffled[(i+1) % shuffled.length],
                  answer = shuffle(question.a)[0];
                  changeName = function(e){
                    var invitation = this.state.invitation;
                    invitation.people[i].name = e.target.value;
                    this.setState({ invitation : invitation });
                  }.bind(this);
              
              return (
                <Guest name={d.name} changeName={changeName} question={question.q} answer={answer} />
              )
            }.bind(this))
          }
          </fieldset>
        </form>
        <div className="row">
          <div className="col-md-9">
            <div className="pull-right">
              <div onClick={this.addNew} className="btn-round blue pull-right"><span>+</span></div>
              <div className="add-person pull-right">Add another person</div>
            </div>
          </div>
        </div>
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

module.exports = Rsvp; 
