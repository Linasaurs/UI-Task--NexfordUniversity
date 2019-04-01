function populate(selector) {
    var maincContainer= $(selector);
    //Checks if the container exists
    if (!maincContainer.length) {
        throw "Container not found.";
    }

    var navbar = $('<nav class="navbar navbar-yellow"></nav>');
    navbar.addClass('navbar navbar-yellow');
    navbar.append(`<div class="container-fluid navbar-container">
        <div class="navbar-header">
          <a class="navbar-brand nxu-brand" href="#"><img src="./img/nu_logo.svg" class="nxu-brand-img"></a>
        </div>

        <div class="collapse navbar-collapse nxu-navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav nxu-navbar-nav">
            <li><a href="#">Learn with NXU</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Partner with NXU</a></li>
            <li><a href="#">Log in</a></li>
          </ul>
          <ul class="nav navbar-nav nxu-navbar-right nxu-navbar-nav">
            <button class="btn btn-success navbar-btn">Register interest</button>
          </ul>
        </div>
      </div>`);
    
    var hero = $('<div></div>');
    hero.addClass('container-fluid nxu-hero');
    hero.append(`<div class="row nxu-hero-row">
        <div class="col-xs-6">
          <h1>Visualize your learning potential</h1>
          <h4>Your chance to join our founding cohort of pioneering learners.</h4>
          <button type="button" class="btn btn-success">Register interest</button>
          <button type="button" class="btn btn-default">More details</button>
        </div>
        <div class="col-xs-6">
          <img class="nxu-hero-img" src="./img/crowd.png">
        </div>
      </div>`);

    var bottomCols = $('<div></div>');
    bottomCols.addClass('container-fluid');
    bottomCols.append(`<div class="row">
        <div class="col-xs-10 col-xs-offset-1 text-center">
          <h2>Programs built from scratch</h2>
          <h6>Stand out in a global job market: earn your quality degree 100% online</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-1 text-center">
          <h2>
            AAS
          </h2>
          <hr>
          <h5>
            Associate of applied science in busniess
          </h5>
          <p class="nxu-programs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet, nisi natus assumenda minima
            obcaecati. Quas quibusdam ex aliquam tempora, obcaecati nam et blanditiis officiis architecto, culpa non
            aut temporibus?
          </p>
          <button type="button" class="btn btn-default">Discover more</button>
        </div>
        <div class="col-xs-2 col-xs-offset-2 text-center">
          <h2>
            BBA
          </h2>
          <hr>
          <h5>
            Bachelor business administration
          </h5>
          <p class="nxu-programs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet, nisi natus assumenda minima
            obcaecati. Quas quibusdam ex aliquam tempora, obcaecati nam et blanditiis officiis architecto, culpa non
            aut temporibus?
          </p>
          <button type="button" class="btn btn-default">Discover more</button>
        </div>
        <div class="col-xs-2 col-xs-offset-2 text-center">
          <h2>
            MBA
          </h2>
          <hr>
          <h5>
            Master business administration
          </h5>
          <p class="nxu-programs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eveniet, nisi natus assumenda minima
            obcaecati. Quas quibusdam ex aliquam tempora, obcaecati nam et blanditiis officiis architecto, culpa non
            aut temporibus?
          </p>
          <button type="button" class="btn btn-default">Discover more</button>
        </div>
      </div>`);

      maincContainer.append(navbar);
      maincContainer.append(hero);
      maincContainer.append(bottomCols);
}

populate('#nxu');