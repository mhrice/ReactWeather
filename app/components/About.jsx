var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return(
    <div>
  <h1 className="text-center page-title">About</h1>
  <div className="row">
    <div className="columns medium-12 large-12 small-6">
<ul>
<li>
  <div className="callout">
  <h5>This is a callout.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
<a href="https://github.com/mhrice/ReactWeather">Github Repo</a>
</div>
</li>
<li>
<div className="callout secondary">
<h5>This is a callout.</h5>
<p>It has an easy to override visual style, and is appropriately subdued.</p>
<a href="https://openweathermap.org">Open Weather Map</a> I used Open Weather Map
to seach for weather data by city name
</div>
</li>

</ul>
</div>
</div>
</div>
)
};

module.exports = About;
