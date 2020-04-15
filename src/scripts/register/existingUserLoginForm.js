// Author: Traye Johson

export const loginFormHTML = `
<article class='loginContainer'>
  <title class='loginTitle'>Login/Register</title>
  <section class='loginForm'>
    <form>
      <label for="loginUserName">User name:</label>
      <input type="text" id="loginUserName" name="loginUserName">
      <label for="loginPassword">Enter Password:</label>
      <input type="text" id="loginPassword" name="loginPassword">
    </form>
    <button id='loginButton'>Login</button>
    <button id='registerButton'>Register New User</button>
  </section>  
</article>
`