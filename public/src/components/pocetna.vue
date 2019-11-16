<template>
  <div class="hero is-warning is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <br>
      <nav class="level">
         <p class="level-item has-text-centered">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="serch">
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
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
                  <span>Settings</span>
          </button>
        </p>
         <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark">
                  <b-icon
                    icon="account"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                  <span>Log out</span>
          </button>
        </p>
      </nav>
    </div>
    <div class="hero-body">
       <div class="container has-text-centered">
         <img src="./moto_life.png"/>
        <h1 class="title">{{title}}</h1>
        <p>{{ msg }}</p><br>
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
              <span>Add</span>
          </button>
        </nav>
      </div>
    </div>
    <div class="foot">
        <div class="content has-text-centered">
            <button class="button is-medium is-info is-rounded">
                <span class="icon">
                <i class="fab fa-twitter"></i>
                </span>
            </button>
            <button class="button is-medium is-info is-rounded">
                <span class="icon">
                <i class="fab fa-facebook"></i>
                </span>
            </button>
            <button class="button is-medium is-primary is-bold is-rounded">
                <span class="icon">
                <i class="fab fa-instagram"></i>
                </span>
            </button>
            <button class="button is-medium is-danger is-bold is-rounded">
                <span class="icon">
                <i class="fab fa-youtube"></i>
                </span>
            </button>
        </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pocetna',
  props: {
    title:String,
    msg: String
  }
}
</script>