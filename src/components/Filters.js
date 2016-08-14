import React from 'react';

const Filters = React.createClass({
  pickGender(event) {
    let gender = event.target.value;
    this.props.gender(gender);
  },
  pickStyle(event) {
    let style = event.target.value;
    this.props.style(style);
  },
  render() {
    return (
      <div>
        <div className="row">
          <h4>Filters</h4>
        </div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Gender
              </a>
              </h4>
            </div>
          <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              <form>
                <input type="radio" name="gender" value="male" onClick={this.pickGender}/> Male<br/>
                <input type="radio" name="gender" value="female" onClick={this.pickGender}/> Female
              </form>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Style
              </a>
              </h4>
            </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">
              <form>
                <input type="radio" name="style" value="casual" onClick={this.pickStyle}/> Casual<br />
                <input type="radio" name="style" value="formal" onClick={this.pickStyle}/> Formal<br />
                <input type="radio" name="style" value="sporty" onClick={this.pickStyle}/> Sporty
              </form>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Filters;
