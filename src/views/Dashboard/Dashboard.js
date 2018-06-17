import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <form action method='post' class="form-horizontal">
            <div class="form-group row">
                <div class="col-md-12">
                    <span class="input-group-prepend">
                        <button type="button" class="btn btn-primary">
                            <i class="fa fa-search">
                                ::before
                            </i>
                            "SEARCH"
                        </button>
                    </span>
                </div>
            </div>
        </form>
        
      </div>
    )
  }
}

export default Dashboard;
