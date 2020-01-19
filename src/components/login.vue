<template>
  <div class="hero is-danger is-light is-fullheight is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <button class="button is-dark is-rounded"><router-link to="/">Log in</router-link> </button><br><br>
        <h1>Create account</h1><br><br> 
        <input class="input is-small" type="text" placeholder="Email"><br><br>
        <input class="input is-small" type="text" placeholder="Create pasword"><br><br>
        <input class="input is-small" type="text" placeholder="Age"><br><br>
        <div class="select is-rounded is-success">
          <select>
            <option>Select type of motorcycle</option>
            <option>Street</option>
            <option>Scooter</option>
            <option>Off-road</option>
          </select>
        </div><br><br>
        <button class="button is-dark is-rounded"><router-link to="/">Continue</router-link> </button><br><br>
        <p>OR</p><br>
        <button class="button is-info is-rounded">Continue with Facebook</button><br><br>
        <button class="button is-info is-rounded">Continue with Google</button><br> 
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    title:String,
    msg: String
  }
}
</script>

