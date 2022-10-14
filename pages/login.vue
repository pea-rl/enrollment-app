<template>
  <div class="container-fluid">
    <form class="center">
      <div class="card cardbg">
        
        <div class="curved-background">
          <div class="curved-background__curved">
            <div class="center">
              <img src="~/static/images/CTUlogo.png" class="logo" />
            </div>
          </div>
        </div>

        <div class="card-body">
          <h4 class="center">Login</h4>

          <div class="mb-3 form-check">
            <div class="floating-label">
              <input type="email" class="floating-label__input" id="floatingInput" placeholder="Email">
              <label for="floatingInput" class="floating-label__label">Email</label>
            </div>
          </div>

          <div class="mb-3 form-check">
            <div class="floating-label">
              <input type="password" class="floating-label__input" id="floatingPassword" placeholder="Password">
              <label for="floatingInput" class="floating-label__label">Password</label>
            </div>
          </div>

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
  }
}

</script>

<style>
.curved-background__curved {
    /* Background color */
    background-color: #000000;

    /* You can use gradient background color such as */
    /* background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

    /* Curved corners */
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;

    /* Size */
    height: 100%;
    width: 100%;
}
.center {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 5%;
    position: relative;
}
.logo {
    /* Size */
    height: 30%;
    width: 30%;
}
.btnLogin {
  font-weight: 600;
  border-radius: 8px;
  padding: 2%;
  width: 150px;
  height: 40px;
  border: 1px solid #d1d5db;
}
.floating-label {
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  position: relative;   
}
.floating-label__input {
  border: none;
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
}

.cardbg {
  background-color: #FF9F29;
  position: relative;
  width: 400px;
  box-shadow: 10px 11px 10px 2px #D8D9CF;
}

</style>