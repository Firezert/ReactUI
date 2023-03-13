Export const Login ()=>{
const [login,SetLogin]=useState();
const handlelogin=()=>{
console.log('You are logged in')
}
return{
<div>Usename</div>
<div>Password</div>
<button
   onclick={handlelogin}
        >Login</Login>
}

}
