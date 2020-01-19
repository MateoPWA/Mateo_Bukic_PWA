<template>
  <div class="hero is-light is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <div class="container has-text-left">
          <br>
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
        <button class="button is-info is-rounded">Privatnost</button><br><br>
        <button class="button is-info is-rounded">Blokiranje</button><br><br>
        <button class="button is-info is-rounded">Vaše informacije</button><br><br> 
        <button class="button is-info is-rounded">Plaćanja</button><br><br>
        <button class="button is-info is-rounded">Obavjeti</button><br><br>
        <button class="button is-info is-rounded">Jezik i regija </button><br><br>
      </div>  
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