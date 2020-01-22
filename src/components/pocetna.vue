<template>
  <div class="hero is-warning is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <nav class="level">
        <br>
         <p class="level-item has-text-centered">
           <section>
            <button class="button block button is-rounded is-MEDIUM is-dark" @click="isActive = !isActive"><b-icon
                    icon="calendar"
                    size="is-MEDUIM"
                    type="is-white">
                  </b-icon>
                  <span>Events</span>
                  </button>
            <b-message title="Default" :active.sync="isActive" aria-close-label="Close message">
                25.07.2020. - 26.07.2020.  	MK SINOVI - Posušje (BiH)
                26.06.2020. - 27.06.2020.  	MK RIDERS - Grude (BiH)
                12.06.2020. - 13.06.2020.  	SV.MIHOVIL - Donji Proložac
                23.05.2020. - 24.05.2020.  	MK ROLLERS - Čapljina (BiH)
                28.03.2020.  	MK DUGO SELO - Dugo Selo
            </b-message>
        </section>
        </p>
        <p class="level-item has-text-centered">
          <button class="button is-rounded is-MEDIUM is-dark" @click="alert">
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
         <p class="level-item has-text-centered">
            <img src="./moto_life.png" class="logo"/>
          </p>
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
        <carousel>
          <slide>
           <img src="./1.jpg"/>
          </slide>
          <slide>
            <img src="./2.jpg"/>
          </slide>
           <slide>
            <img src="./3.jpg"/>
          </slide>
           <slide>
            <img src="./4.jpg"/>
          </slide>
           <slide>
           <img src="./5.jpg"/>
          </slide>
          <slide>
            <img src="./6.jpg"/>
          </slide>
           <slide>
            <img src="./7.jpg"/>
          </slide>
           <slide>
            <img src="./8.jpg"/>
          </slide>
        </carousel>
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
    .level{
      margin-top: 30px;
    }
    .logo{
        width:276px;
        height:127px;
        
    }
    h1{
      font-size: 30px;
    }
    a{
      margin-right: 5px;
    }
    button{
      margin-right: 5px;
    }

</style>
<script>
export default {
  name: 'pocetna',
  props: {
    title:String,
    msg: String
  },
  methods: {
            alert() {
                this.$buefy.dialog.alert('You have no notifications !')
            }
 },
  data() {
            return {
                isActive: true
            }
        }
}
</script>