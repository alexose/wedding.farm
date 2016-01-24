var React = require('react')

var Nav = React.createClass({
  getDefaultProps: function(){
    return {
      pages : [
        {
          name : 'home',
          display : 'Home'
        },
        {
          name : 'clothes',
          display : 'Clothes'
        }
      ]
    }
  },
  handleClick : function(e){
    e.preventDefault();
    console.log('click');
  },
  render: function(){
    return (
      <nav className="main-nav">
        <ul className="main-nav-inner">
          {
            this.props.pages.map(function(page){
              return (
                <li>
                  <a href={'#' + page.name} onClick={this.handleClick}>
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
