var React = require('react');
var Slider = require('rc-slider');

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
  showAdvanced : function(){
    var switched = !this.state.advanced;
    this.setState({ advanced: switched });
  },
  render : function(){
    return (
      <div className="guest">

        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="name">Your Name</label>
          <div className="col-md-6">
            <input onChange={this.props.changeName} id="name" name="name" type="text" value={this.props.name} className="form-control input-md" required="" />
          </div>
        </div>
        
        <div className="form-group">
          <label className="control-label col-md-4" htmlFor="email">Your electronic mail address</label>
          <div className="col-md-6">
            <input id="email" name="email" type="text" defaultValue={this.props.email} className="form-control input-md" required="" />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="radios">Party in Kea'au?</label>
          <div className="col-md-6">
            <div className="radio">
              <label htmlFor="radios-0">
                <input onClick={this.handleRadio} type="radio" name="hi" id="radios-0" value="yes"/>
                Happily Accept
              </label>
            </div>
            <div className="radio">
              <label htmlFor="radios-1">
                <input onClick={this.handleRadio} type="radio" name="hi" id="radios-1" value="no" />
                Regretfully Decline
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="radios">Ceremony in Applegate?</label>
          <div className="col-md-6">
            <div className="radio">
              <label htmlFor="radios-2">
                <input onClick={this.handleRadio} type="radio" name="or" id="radios-2" value="yes"/>
                Happily Accept
              </label>
            </div>
            <div className="radio">
              <label htmlFor="radios-3">
                <input onClick={this.handleRadio} type="radio" name="or" id="radios-3" value="no" />
                Regretfully Decline
              </label>
            </div>
          </div>
        </div>
      
       
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <h4 onClick={this.showAdvanced} className={"toggle-advanced " + (this.state.advanced ? 'open' : 'closed')}>Advanced wedding options</h4>
          </div>
        </div>

        <div className={this.state.advanced ? ' slidein' : ' slideout'}>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="diet">Any dietary restrictions?</label>
            <div className="col-md-6">                     
              <textarea rows="4" className="form-control" id="textarea" name="textarea" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="question">{this.props.question}</label>
            <div className="col-md-6">                     
              <textarea rows="4" className="form-control" id="textarea" name="textarea" defaultValue={this.props.answer} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-4" htmlFor="needs">How fancy are you?</label>  
            <div className="col-md-6 slider-wrap">
              <Slider
                defaultValue={7}
                onChange={this.changeValue}
                step={1}
                max={10}
                min={1} />
            </div>
          </div>
        </div>
       
        <div className="form-group">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <button name="singlebutton" className="btn btn-secondary btn-lg pull-left" onClick={this.props.changeFocus}>Cancel</button>
            <button name="singlebutton" className="btn btn-primary btn-lg pull-right" onClick={this.props.changeFocus}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Form; 
