<template>
  <div class="hero is-light is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <div class="container has-text-left">
          <nav class="level">
              <p class="level-item has-text-centered">
                <button class="button is-rounded is-MEDIUM is-dark">
                        <b-icon
                            icon="home"
                            size="is-MEDUIM"
                            type="is-white">
                        </b-icon>
                        <span><router-link to="/">Home</router-link></span>
                </button>
             </p>
          </nav>
      </div>  
    </div>
    <div class="hero-body">
      <div class="container has-text-left">

        <button class="button is-info is-rounded">Prijava i sigurnost</button><br><br>
        <h1>Privatnost</h1><br><br>
        <h2>Zadrži povijest pretraživanja</h2>
        <div class="field">
            <b-switch  type="is-info" >
            </b-switch>
        </div><br>
        <h2>Status aktivnosti</h2>
        <div class="field">
            <b-switch  type="is-info" >
            </b-switch>
        </div><br>
        <h2>Obavjesti</h2>
        <div class="field">
            <b-switch  type="is-info" >
            </b-switch>
        </div><br>
        <p class="level-item has-text-centered">
            <img src="./moto_life.png" class="logo"/>
          </p>
        <button class="button is-info is-rounded">Blokiranje</button><br><br>
        <button class="button is-info is-rounded">Vaše informacije</button><br><br> 
        <button class="button is-info is-rounded">Plaćanja</button><br><br>
        <button class="button is-info is-rounded">Obavjeti</button><br><br>
        <button class="button is-info is-rounded">Jezik i regija </button><br><br>
      </div>  
    </div>
          <nav class="level">
              <p class="level-item has-text-centered">
                <button class="button is-rounded is-MEDIUM is-success">
                       <p>Spremi promjene</p>
                </button>
             </p>
          </nav><br>
  </div>

</template>
<script>
export default {
  name: 'pocetna',
  props: {
    title:String,
    msg: String
  },
}
</script>