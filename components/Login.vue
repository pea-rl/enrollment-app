<template>
  <div class="container-fluid bodyLogin">
    <form class="center">
      <div class="card cardbg">
        <div class="curved-background">
          <div class="curved-background__curved">
            <div class="title">
              <h1 class="navbrand">CTU Enrollment</h1>
            </div>
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
              <input
                v-model="txtEmail"
                type="email"
                class="floating-label__input"
                id="Email"
                placeholder="Email"
                required
              />
              <label for="floatingInput" class="floating-label__label">
                Email</label
              >
            </div>
          </div>
          <!--Password-->
          <div class="mb-3 form-check">
            <div class="floating-label">
              <input
                v-model="txtPassword"
                type="password"
                class="floating-label__input"
                id="Password"
                placeholder="Password"
                required
              />
              <label for="floatingInput" class="floating-label__label">
                Password</label
              >
            </div>
          </div>
          <!--Login Button-->
          <div class="center">
            <NuxtLink to="/home" class="nav-link">
              <button @click="loginClck" type="submit" class="btnLogin">
                LOGIN
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  //name: 'Login'
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginClck() {
      let mssg = "";
      let ttl = "";
      let vrnt = "";
      if(this.txtEmail == "" || this.txtPasssword == "") {
        mssg = "Please fill all fields";
        ttl = "Missing fields";
        vrnt = "error";
      }
      else {
        mssg = "Email: " + this.txtEmail + "\r\nPassword: " +this.txtPasssword + "\r\nHello!";
        ttl = "Success";
        vrnt = "Success";
        this.ClearField()
      }
      this.$bvToast.toast(mssg, {
        title: ttl,
        autoHideDelay: 3000,
        appendToast: false,
        variant: vrnt
      });
    },
    ClearField() {
      this.txtEmail = "";
      this.txtPassword = "";
    }
  },
  computed: {
    CheckEmail() {
      if(this.txtEmail.length == 0){
        return null;
      }
      return this.txtEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true:false;
    },
    CheckPasswrd() {
      if(this.txtPassword.length == 0)
      {
        return null;
      }
      return this.txtPassword.length >=8 ? true : false;
    }
  }
};
</script>

<style>
.bodyLogin {
  background-color: #b73e3e;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.title {
  align-content: center;
  position: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
}
.curved-background__curved {
  /* Background color */
  background: #06283d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 1px 5px 9px rgba(45, 88, 115, 0.5);
  /* You can use gradient background color such as */
  /* background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

  /* Curved corners */
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;

  /* Size */
  height: 100%;
  width: 100%;

  position: inherit;
  padding: 3%;
}
.navbrand {
  font-weight: 700;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  font-style: normal;
  line-height: 40px;
  color: #d8e4e9;
  text-shadow: 2px 1px 1px rgb(14, 11, 31);
  margin: 5px;
}
.center {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3.5%;
  position: relative;
  color: #000000;
}
.logo {
  /* Size */
  height: 25%;
  width: 25%;
  filter: drop-shadow(3px 2px 5px #0f181e);
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
  margin-top: 8px;
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
  background-color: #fec261;
  position: relative;
  width: 580px;
  border: #fec261;
  box-shadow: inset 10px 15px 25px 5px rgba(217, 148, 38, 0.5);
  filter: drop-shadow(12px 12px 18px rgba(0, 0, 0, 0.25));
  margin: 10px;
}
</style>
