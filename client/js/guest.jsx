var React = require('react');
var Form = require('./form.jsx');

var Guest = React.createClass({
  getInitialState : function(){
    return {};
  },
  render : function(){
    var hi = this.props.person.hi,
        or = this.props.person.or;

    var chosen = hi && or;

    return(
      <div className={"guest"}>
        <div className={"guest-row animated" + (this.props.hide ? ' fadeout' : '')}>
          <div className="title-row row" onClick={this.props.changeFocus}>
            <div className="col-xs-4">
              <div className={"fake-checkbox pull-right " + this.props.person.hi + this.props.person.or}>
                {chosen ? <img src={"img/" + (hi + or) + ".png"} /> : '' }
                <div className={"fake-checkbox-inner"}></div>
              </div>
            </div>
            <div className="col-xs-8">
              <h2>{this.props.person.name}</h2>
            </div>
          </div>
        </div>
        <div className={'guest-form animated' + (this.props.focused ? '' : ' fadeout')}> 
          <Form 
            person={this.props.person}
            index={this.props.index}
            question={this.props.question} 
            answer={this.props.answer} 
            update={this.props.update}
            changeFocus={this.props.changeFocus}
          />
        </div>
      </div>
    )
  }
});

module.exports = Guest; 
