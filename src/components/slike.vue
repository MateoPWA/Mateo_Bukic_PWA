<template>
  <div class="hero is-warning is-bold is-light is-fullheight is-bold">
    <div class="hero-head">
      <div class="container has-text-centered">
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
       <div class="container has-text-centered">
        <div class="slike">
         <img src="./1.jpg"/>
        </div>
         <div class="slike">
            <img src="./2.jpg"/>
         </div>   
         <div class="slike">
            <img src="./3.jpg"/>
         </div>
          <div class="slike">
            <img src="./4.jpg"/>
         </div>
          <div class="slike">
            <img src="./5.jpg"/>
         </div>
          <div class="slike">
            <img src="./6.jpg"/>
         </div>
          <div class="slike">
            <img src="./7.jpg"/>
         </div>
          <div class="slike">
            <img src="./8.jpg"/>
         </div>    
      </div>
    </div>
     <div class="container has-text-centered">
     <b-field class="file">
              <b-upload v-model="file">
                  <a class="button is-MEDIUM is-dark">
                      <b-icon icon="upload"></b-icon>
                      <span>Click to upload</span>
                  </a>
              </b-upload>
              <span class="file-name" v-if="file">
                  {{ file.name }}
              </span>
            </b-field>
     </div>
  </div>
</template>
<style>
    .slike{
        width: 24%;
        margin-right: 2px;
        margin-top: 2px;
        height:200px;;
        float:left;
    }
    img{
        width:100%;
        height: 100%;
    }
</style>
<script>
export default {
  name: 'login',
  props: {
    title:String,
    msg: String
  }
}
</script>