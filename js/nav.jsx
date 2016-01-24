var React = require('react')

var Nav = React.createClass({
  handleClick : function(page, e){
    e.preventDefault();
    this.props.onNavigate(page);
  },
  render: function(){
    var handleClick = this.handleClick;
    var context = this;
    return (
      <nav className="main-nav">
        <ul className="main-nav-inner">
          {
            this.props.tabs.map(function(page){
              return (
                <li>
                  <a href={'#' + page.name} onClick={handleClick.bind(context, page)}>
                    {page.display}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
});

module.exports = Nav;
