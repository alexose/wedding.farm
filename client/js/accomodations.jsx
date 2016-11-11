var React = require('react');

var Accomodations = React.createClass({
  render : function(){
    return(
      <div className="container">
        <div className='logistics'>
          <hr className="spacer" />
          <h1 className="title"><img width="350px" src="img/logistics.png" /></h1>
          <h3 className="middle section-title">Hawai'i</h3>
          <p>
            <div className="aside left">
              <img src="img/hawaii.jpg" />
              <h5>An especially paradise-y part of HPP</h5>
            </div>
            For wedding goers visiting the Big Island in November, the reception will be held at <a href="https://www.google.com/maps/dir/Hilo+International+Airport,+2450+Kekuanaoa+Street,+Hilo,+HI+96720/'19.562431,-154.953911'/@19.6327481,-155.0800487,12z/data=!3m1!4b1!4m11!4m10!1m5!1m1!1s0x79524c78af8cfe03:0x2e9bfe4565716c7f!2m2!1d-155.0416866!2d19.7188342!1m3!2m2!1d-154.953911!2d19.562431">Maluhia’s childhood home</a> in Hawaiian Paradise Park, a rural subdivision in lower Puna between the small towns of Kea’au and Pāhoa. With the nearest hotels being in Hilo, a 40 minute drive from the party, accommodations are best sought through <a href="http://airbnb.com">AirBnB</a> and <a href="http://vrbo.com">VRBO</a>.
          </p>
          <p>
            Out-of-towners should be familiar with the <a href="https://www.google.com/maps/dir/Hilo+International+Airport,+2450+Kekuanaoa+Street,+Hilo,+HI+96720/'19.562431,-154.953911'/@19.6327481,-155.0800487,12z/data=!3m1!4b1!4m11!4m10!1m5!1m1!1s0x79524c78af8cfe03:0x2e9bfe4565716c7f!2m2!1d-155.0416866!2d19.7188342!1m3!2m2!1d-154.953911!2d19.562431">route</a> ahead of time-- Google directions can be unreliable in Paradise Park.
          </p>
          <p>
            Festivities begin at 3:00pm until pau.  See you there!
          </p>
        </div>

        <p className="middle section-title clear">
          Questions about the area?  Ask us!
          <br /><br />
          <img className="footer-tree" src="img/footer_tree.png" />
        </p>
        <hr className="spacer" />
      </div>
    )
  }
});

module.exports = Accomodations;
