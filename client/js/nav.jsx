var React = require('react')
var Link = require('react-router').Link;

var Nav = React.createClass({
  render: function(){
    var context = this;
    return (
      <nav className="main-nav">
        <ul className="main-nav-inner">
          {
            this.props.tabs.map(function(page){
              console.log(page);
              return (
                <li className={ page.component ? "" : "disabled" }>
                  <Link to={page.name}>{page.display}</Link>
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
