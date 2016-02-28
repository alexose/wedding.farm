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
          <label className="control-label col-md-3" for="email">Your electronic mail address</label>
          <div className="col-md-6">
            <input id="email" name="email" type="text" defaultValue={this.props.email} className="form-control input-md" required="" />
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
            <button name="singlebutton" className="btn btn-primary pull-right" onClick={this.props.toggleForm}>Done!</button>
          </div>
        </div>
 
        <hr />
      </div>
    )
  }
});

module.exports = Form; 
