// Include React
var React = require("react");

var Link = require("react-router").Link;

var helpers = require('../config/helpers');

var Child1 = React.createClass({

  getInitialState: function () {
    return { term: "" };
  },

  handleChange: function () {
    this.setState({ term: event.target.value})
  },

  handleSubmit: function (event) {
    event.preventDefault();

    this.props.setTerm(this.state.term);
    this.setState({ term: "" })
  },

  articleTest: function() {
    helpers.getArticles();
  },
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
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">

              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />


            

            <p className="text-center">
              <Link to="/Child1/Grandchild1"><button className="btn btn-warning btn-sm" type="submit">Search</button></Link>
              
            </p>
            </div>
            </form>            

            
  
      
          </div>
        </div>
      </div>
      
        
      </div>
      <div className="row">
      <div className="col-lg-12">
      <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Saved</h3>
              </div>
              <div className="panel-body">
                  
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
