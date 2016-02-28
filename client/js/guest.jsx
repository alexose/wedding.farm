var React = require('react');
var Form = require('./form.jsx');

var Guest = React.createClass({
  getInitialState : function(){
    return {};
  },
  update: function(state){
    this.setState({ 
      decision : state.hi + state.or
    }); 
  },
  render : function(){
    console.log(this.props.focus);
    return(
      <div className={"guest"}>
        <div className={"guest-row animated" + (this.props.hide ? ' fadeout' : '')}>
          <div className="title-row row" onClick={this.props.changeFocus}>
            <div className="col-md-4">
              <div className={"fake-checkbox pull-right " + this.state.decision}>&nbsp;</div>
            </div>
            <div className="col-md-6">
              <h2>{this.props.name}</h2>
            </div>
          </div>
          <div className="row">&nbsp;</div>
        </div>
        <div className={'guest-form animated' + (this.props.focused ? '' : ' fadeout')}> 
          <Form 
            name={this.props.name} 
            email={this.props.email} 
            question={this.props.question} 
            answer={this.props.answer} 
            update={this.update}
            changeName={this.props.changeName}
            changeFocus={this.props.changeFocus}
          />
        </div>
      </div>
    )
  }
});

module.exports = Guest; 
