var React = require('react');

var Form = require('./form.jsx');

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
            email={this.props.email} 
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

module.exports = Guest; 
