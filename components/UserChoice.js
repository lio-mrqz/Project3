import React from 'react';

const UserChoice = React.createClass({
  compareMethod: function(choice) {
    this.props.compare(choice);
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div
            title="Rock"
            className="col s2 offset-s3 center-align"
            onClick={() => this.compareMethod('Rock')}>
            <button className="btn btn-floating btn-large pulse valign-wrapper hoverable">
              <span className="symbol valign center-block">👊</span>
            </button>
          </div>
          <div
            title="Paper"
            className="col s2 center-align"
            onClick={() => this.compareMethod('Paper')}>
            <button className="btn-floating btn-large pulse valign-wrapper hoverable">
              <span className="symbol valign center-block">✋️</span>
            </button>
          </div>
          <div
            title="Scissors"
            className="col s2 center-align"
            onClick={() => this.compareMethod('Scissors')}>
            <button className="btn-floating btn-large pulse valign-wrapper hoverable">
              <span className="symbol valign center-block">✌️</span>
            </button>
          </div>
        </div>
      </div>
    );
  },
});

export default UserChoice;
