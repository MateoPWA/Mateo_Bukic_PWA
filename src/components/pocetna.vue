<template>
  <div class="hero is-warning is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <nav class="level">
         <p class="level-item has-text-centered">
            <img src="./moto_life.png" class="logo"/>
          </p>
         <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark">
                  <b-icon
                    icon="calendar"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                  <span>Events</span>
          </button>
        </p>
        <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark">
                  <b-icon
                    icon="bell"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                  <span>Notifications</span>
          </button>
        </p>
         <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark">
                  <b-icon
                    icon="cogs"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                  <span><router-link to="/postavke">Settings</router-link></span>
          </button>
        </p>
         <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark">
                  <b-icon
                    icon="account"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                 <span><router-link to="/login">Log Out</router-link></span>
          </button>
        </p>
      </nav>
    </div>
    <div class="hero-body">
       <div class="container has-text-centered">
        <h1>Welcome to your Moto life App</h1>
        <p>Find other riders around you</p><br>
        <nav class="level">
          <button class="button level-item has-text-centered is-dark is-medium is-rounded">
              <b-icon
                  icon="email"
                  size="is-medium"
                  type="is-white">
              </b-icon>
              <span>chat</span>
          </button>
          <button class="button level-item has-text-centered is-dark is-medium is-rounded">
              <b-icon
                  icon="map-marker"
                  size="is-medium"
                  type="is-white">
              </b-icon>
              <span>Location</span>
          </button>
          <button class="button level-item has-text-centered is-dark is-medium is-rounded">
              <b-icon
                  icon="plus"
                  size="is-medium"
                  type="is-white">
              </b-icon>
              <span><router-link to="/slike">Add</router-link></span>
          </button>
        </nav>
      </div>
    </div>
    <div class="foot">
        <div class="content has-text-centered">
          <a href="https://www.twitter.com/"
                target="_blank"
                rel="noopener">
              <button class="button is-medium is-info is-rounded">
                  <span class="icon">
                  <i class="fab fa-twitter"></i>
                  </span>
              </button>
            </a>
            <a href="https://www.facebook.com/"
                target="_blank"
                rel="noopener">
              <button class="button is-medium is-info is-rounded">
                  <span class="icon">
                  <i class="fab fa-facebook"></i>
                  </span>
              </button>
            </a>
              <a href="https://www.instagram.com/"
                target="_blank"
                rel="noopener">
                <button class="button is-medium is-primary is-bold is-rounded">
                    <span class="icon">
                    <i class="fab fa-instagram"></i>
                    </span>
                </button>
              </a>
            <a href="https://www.youtube.com/"
                target="_blank"
                rel="noopener">
            <button class="button is-medium is-danger is-bold is-rounded">
                <span class="icon">
                <i class="fab fa-youtube"></i>
                </span>
            </button>
            </a>
        </div>
      <br>
    </div>
  </div>
</template>
<style>
    .logo{
        width:276px;
        height:127px;
        margin-top: 30px;
    }
    h1{
      font-size: 30px;
    }
</style>
<script>
export default {
  name: 'pocetna',
  props: {
    title:String,
    msg: String
  }
}
</script>