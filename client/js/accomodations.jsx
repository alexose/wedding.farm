var React = require('react');

var Accomodations = React.createClass({
  render : function(){
    return(
      <div className="container">
        <div className='logistics'>
          <hr className="spacer" />
          <h1 className="title"><img width="350px" src="img/logistics.png" /></h1>
          <p>The wedding ceremony and the reception will be held at our house:</p>
          <address>
            The Thompson Creek Country and/or Yacht Club<br/>
            3479 Thompson Creek Road<br/>
            Applegate, OR  97530<br/>
          </address>
          <p>The ceremony begins at <b>3:00</b>, and the reception shortly after. <br/>Followed by an informal afterparty in downtown Jacksonville (venue TBA).
          </p>

          <h3 className="middle section-title">Attire</h3>
          <p>Please note that our property could be considered "rustic".  Due to the terrain, we highly recommend flat soled shoes.</p>
          <p>We are hoping for a 70+ degree day with sunshine and a temperature drop at dusk.  It will get cold!  Checking the weather forecast and planning your fancy outfits with layers is always a good idea.</p>

          <h3 className="middle section-title">Getting there (From Jacksonville)</h3>
          <p> We are providing a <b>shuttle</b> from downtown Jacksonville with a stopover in Ruch.  The shuttle will depart promptly at 2:15pm from Ray's grocery store (401 N. 5th Street) in Jacksonville. Shuttle parking is available in the gravel lot across the street.  </p>
          <p> If you choose to drive, carpooling is encouraged-- Mother nature thanks you.  </p>
          <p> Should you need to leave early, our shuttle service can return you to Jacksonville earlier in the evening. Please flag down the event coordinator and she will hail your sweet ride.  </p>

          <h3 className="middle section-title">Afterparty</h3>
          <p> We'll keep the party going closer to the room block in Jacksonville.  The trolley will leave our house at 7:00pm and deliver you directly to the venue should you choose to join.  </p>
          <p> If you aren't staying in Jacksonville and need a ride home from the afterparty, don't worry! Here are a few of the higher-rated local companies that will come pick you up: </p>

          <ul>
            <li> A to B Taxi: (541) 499-9245  (5.0 stars) </li>
            <li> A town Cab: (541) 944-8477 (4.5 stars) </li>
            <li> Checker Cab: (541) 531-5222   (4.5 stars) </li>
          </ul>
          <p></p>
          <h4>CONCLUSION</h4>

          <p> You're going to have a great time.  </p>
        </div>

        <hr className="spacer" />
        <h1 className="title"><img width="500px" src="img/accomodations.png" /></h1>
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
          Wedding guests are encouraged to <strike>use our room blocks in Jacksonville.  The <a href="http://www.countryhouseinnsjacksonville.com/winecountryinn.jsp">Wine Country Inn</a> offers nicely appointed rooms starting at $129 per night and includes a light continental breakfast. <a href="http://www.countryhouseinnsjacksonville.com/winecottages.jsp">The Wine Cottages</a> and <a href="http://www.countryhouseinnsjacksonville.com/mccullyhouseinn.jsp">McCully House Inn</a> offers more deluxe accommodations right on downtown main street with rooms starting at $188 per night.</strike>  Update: We've used up all the rooms, but there are still vacancies in town.  Check the Jacksonville Inn, or any of the various B&B options.
        </p>
        <br/>
        <p>
          <div className="aside left">
            <img src="img/winecountry.jpg" />
            <h5>Ah, casual elegance in wine country</h5>
          </div>
          <div className="aside right">
            <img src="img/mccully.jpg" />
            <h5>Definitely not where we live</h5>
          </div>
          Guests who enjoy a rural aesthetic may be interested in checking vacation rentals around the Applegate Valley [<a href="http://airbnb.com">AirBnB</a>, <a href="http://vrbo.com">VRBO</a>].  There are plenty of ranch-style rentals that to cater to the Wine tourism crowd.  While there is a hotel in Applegate, it is best left to the adventurous.
          <br /><br />
          <strike>Our good friend in the valley runs <a href="https://www.airbnb.com/rooms/2987960">The Crashpad</a>, a hostel-style vacation rental.  Located halfway between the wedding ceremony and the after party in the town of Ruch, The Crash Pad is a great option for a group of up to 12.  Please contact <a href="mailto:flyinghobogirl@gmail.com">the proprietor</a> directly.</strike>  Update: We've also filled the Crash Pad.
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
