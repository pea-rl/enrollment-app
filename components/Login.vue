<template>
  <div class="container-fluid">
    <form class="center">
      <div class="card cardbg">  
        <div class="curved-background">
          <div class="curved-background__curved">
<!--Logo-->
            <div class="center">
              <img src="~/static/images/CTUlogo.png" class="logo" />
            </div>
            
          </div>
        </div>

        <div class="card-body">
          <div class="mb-3 form-check">
<!--Email-->
            <div class="floating-label">
              <input type="email" class="floating-label__input" id="floatingInput" placeholder="Email">
              <label for="floatingInput" class="floating-label__label">Email</label>
            </div>
          </div>
<!--Password-->
          <div class="mb-3 form-check">
            <div class="floating-label">
              <input type="password" class="floating-label__input" id="floatingPassword" placeholder="Password">
              <label for="floatingInput" class="floating-label__label">Password</label>
            </div>
          </div>
<!--Login Button-->
          <div class="center">
            <button type="submit" class="btnLogin">LOGIN</button>
          </div>

        </div>
      </div>
  </form>
  </div>
</template>

<script>
export default {
  //name: 'Login'
  data( ){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.email= ''
      this.form.password= ''
    }
  }
}

</script>

<style>
.curved-background__curved {
    /* Background color */
    background: #06283D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 1px 5px 9px rgba(45, 88, 115, 0.5);
    /* You can use gradient background color such as */
    /* background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

    /* Curved corners */
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

    /* Size */
    height: 100%;
    width: 100%;

    position: inherit;
    padding: 5%;
}
.center {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 5%;
    position: relative;
    color: #000000;
}
.logo {
    /* Size */
    height: 25%;
    width: 25%;
    filter: drop-shadow(3px 2px 5px #0F181E);
}
.btnLogin {
  font-weight: 700;
  background: #338476;
  border-radius: 50px;
  padding: 2%;
  width: 150px;
  height: 40px;
  border: 1px solid #338476;
  box-shadow: inset 2px 3px 3px rgba(0, 0, 0, 0.25);
}
.floating-label {
  border: none;
  position: relative;   
  margin-top: 10px;
}
.floating-label__input {
  border: none;
  background: rgba(192, 192, 192, 0.51);
  border-radius: 18px;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
}
.floating-label__label {
  /* Position the label */
  left: 1rem;
  position: absolute;
  top: 100%;
  /* Hide it by default */
  opacity: 0;
  transition: all 200ms;
  padding: 0.5rem;
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
}

.cardbg {
  background-color: #FEC261;
  position: relative;
  width: 400px;
  border: #FEC261;
  box-shadow: inset 10px 15px 25px 5px rgba(217, 148, 38, 0.5);
  filter: drop-shadow(12px 12px 18px rgba(0, 0, 0, 0.25));
  margin: 50px;
}

</style>