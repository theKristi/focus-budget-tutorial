<template>
<div class="1-auth-container">
    <div class="1-auth">
        <v-form v-model="validLogin">
            <v-text-field label="username"
                          v-model="credentials.username"
                          prepend-icon="account_box"
                          :rules="rules"
                          required
                          color="light-blue lighten-1">
            </v-text-field>
            <v-text-field label="password"
                          v-model="credential.password"
                          prepend-icon="lock"
                          :rules="rules"
                          :append-icon="loginPasswordVisible?'visibility':'visibility_off'"
                          :append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"
                          :type="loginPasswordVisible ? 'text':'password'"
                          color="light-blue lighten-1"
                          required>
            </v-text-field>
            <v-btn flat color="light-blue lighten-1" @click.native="signupVisible=true">Create Account</v-btn>
            <v-btn color="light-blue lighten-1" @click.native="submitAuthentication()">Login</v-btn>
        </v-form>
    </div>
    <div class="1-signup" v-if="signUpVisible">
        <v-form v-model="validSignUp">
            <v-text-field label="Username"
                          v-model="newUser.username"
                          prepend-icon="account_box"
                          :rules="rules"
                          required
                          color="light-blue lighten-1">
            </v-text-field>
            <v-text-field label="password"
                          v-model="newUser.password"
                          prepend-icon="lock"
                          :rules="rules"
                          :append-icon="signUpPasswordVisible?'visibility':'visibility_off'"
                          :append-icon-cb="() => (signUpPasswordVisible=!signUpPasswordVisible)"
                          :type="signUpPasswordVisible?'text':'password'"
                          color="light-blue lighten-1"
                          required>
                <v-btn block color="light-blue lighten-1" @click.native="submitSignUp()">Sign Up</v-btn>
            </v-text-field>
        </v-form>
    </div>
    <v-snackbar timeout="6000"
                bottom="bottom"
                color="red lighten-1"
                v-model="snackbar">
    {{message}}
    </v-snackbar>
</div>
</template>

<script>
import Authentication from '@/components/pages/Authentication'
export default{
  data () {
    return {
      snackbar: false,
      validLogin: false,
      validSignUp: false,
      signUpVisible: false,
      loginPasswordVisible: false,
      signUpPasswordVisible: false,
      rules: [(value) => !!value || 'This field is required'],
      credentials: {
        username: '',
        password: ''
      },
      newUser: {
        username: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    submitAuthentication () {
      Authentication.authenticate(this, this.credentials, '/')
    },
    submitSignUp () {
      Authentication.signup(this, this.newUser, '/')
    }
  }
}

</script>
<style lang="scss">
@import "./../../../assets/styles";
    .l-auth{
        background-color: $background-color;
        padding: 15px;
        margin: 45px auto;
        min-width: 272px;
        min-height: 320px;
        animation: slideInFormat 1s forwards ease;
    }
</style>
