function createUser(){
  var app = document.getElementById('app');

  var form =  `
      <div class="card">
        <div class="card-header clearfix">
          <h2 class="h3 float-left">Create a New User</h2>
          <div class="float-right">
            <a href="#" class="btn btn-primary">Cancel</a>
          </div>
        </div>
        <div class="card-body">
          <form id="registrationForm" class="card-body">
            <div id="formMsg" class="alert alert-danger text-center">Your form has errors</div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" class="form-control" required>
              </div>

              <div class="form-group col-md-6">
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" class="form-control" required>
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" class="form-control" required>
              </div>

              <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" class="form-control" required>
              </div>
            </div>

            <div class="text-right">
              <input type="submit" value="Submit" class="btn btn-lg btn-primary btn-sm-block">
            </div>
          </form>
        </div>
      </div>
  `;

  app.innerHTML=form;
}
