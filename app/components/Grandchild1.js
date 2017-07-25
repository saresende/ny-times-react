// Include React
var React = require("react");

var Grandchild1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
    	<div className="row">
    	<div className="col-lg-12">
    	<div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
        </div>
        </div>
    )
}

});

module.exports = Grandchild1;