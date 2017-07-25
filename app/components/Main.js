// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


var helpers = require('../config/helpers');


// Create the Main component
var Main = React.createClass({

  getIninitalState: function () {
    return {
      articles: 0
    };
  },

  // Here we render the component
  render: function() {

    return (
      
      <div className="container">

        <div className="row">

          <div className="jumbotron text-center">
            <h2><strong>New York Times Search</strong></h2>
              <p><em>Search and annotate your favorite articles.</em></p>
                
             
          </div>
        </div>
    

          

       

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
