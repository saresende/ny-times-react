// Include React
var React = require("react");

var Link = require("react-router").Link;

var Child1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
        <div>
        <div className="row">
        <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Search</h3>
          </div>
          <div className="panel-body text-center">
  
            <p>
              <Link to="/Child1/Grandchild1"><button className="btn btn-warning btn-sm">Search</button></Link>
              
            </p>    

            
  
      
          </div>
        </div>
      </div>
      
        
      </div>
      {this.props.children} 
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Child1;
