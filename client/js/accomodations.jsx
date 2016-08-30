var React = require('react');

var Accomodations = React.createClass({
  render : function(){
    return(
      <div className="container">
        <hr className="spacer" />
        <h1 className="title">Accomodations</h1>
        <h3 className="middle section-title">Oregon</h3>
        <p>
          <div className="aside left">
            <img src="img/applegate.jpg" />
            <h5>This is Applegate!</h5>
            <h5>&nbsp;</h5>
          </div>
          The wedding ceremony will be in the Applegate Valley, near the town of Applegate.  Applegate is a small farming community that prefers an early bedtime.  At sundown, we’ll be relocating the party to nearby Jacksonville (the closest city with amenities such as bars).
          <br /><br />
          <div className="aside right">
            <img src="img/jacksonville.jpg" />
            <h5>This is Jacksonville!</h5>
          </div>
          Wedding guests are encouraged to use our room blocks in Jacksonville.  The <a href="http://www.countryhouseinnsjacksonville.com/winecountryinn.jsp">Wine Country Inn</a> offers nicely appointed rooms starting at $129 per night and includes a light continental breakfast. <a href="http://www.countryhouseinnsjacksonville.com/winecottages.jsp">The Wine Cottages</a> and <a href="http://www.countryhouseinnsjacksonville.com/mccullyhouseinn.jsp">McCully House Inn</a> offers more deluxe accommodations right on downtown main street with rooms starting at $188 per night.
        </p>
        <p>
          <div className="aside left">
            <img src="img/winecountry.jpg" />
            <h5>Ah, casual elegance in wine country</h5>
          </div>
          Guest rooms and suites at both locations can be booked under our group rate by calling 541.899.2050 or emailing <a href="mailto:innkeeper@countryhouseinnsjacksonville.com">innkeeper@countryhouseinnsjacksonville.com</a> and referring to the Maluhia and Alex Wedding or group code 1610GREENL.
          <br /><br />
          <div className="aside right">
            <img src="img/mccully.jpg" />
            <h5>Definitely not where we live</h5>
          </div>
          Guests who enjoy a rural aesthetic may be interested in checking vacation rentals around the Applegate Valley [<a href="http://airbnb.com">AirBnB</a>, <a href="http://vrbo.com">VRBO</a>].  There are plenty of ranch-style rentals that to cater to the Wine tourism crowd.  While there is a hotel in Applegate, it is best left to the adventurous.
          <br /><br />
          Our good friend in the valley runs <a href="https://www.airbnb.com/rooms/2987960">The Crashpad</a>, a hostel-style vacation rental.  Located halfway between the wedding ceremony and the after party in the town of Ruch, The Crash Pad is a great option for a group of up to 12.  Please contact <a href="mailto:flyinghobogirl@gmail.com">the proprietor</a> directly if you’re interested in booking it.
          <br /><br />
        </p>
        <h3 className="middle section-title">Hawai'i</h3>
        <p>
          <div className="aside left">
            <img src="img/hawaii.jpg" />
            <h5>A especially paradise-y part of HPP</h5>
          </div>
          For wedding goers visiting the Big Island in November, the reception will be held at Maluhia’s childhood home in Hawaiian Paradise Park, a rural subdivision in lower Puna between the small towns of Kea’au and Pāhoa. With the nearest hotels being in Hilo, a 40 minute drive from the party, accommodations are best sought through <a href="http://airbnb.com">AirBnB</a> and <a href="http://vrbo.com">VRBO</a>.
        </p>
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
