<template>

    <div id="Login">
        <img alt="Vue logo" src="../assets/logo.png">

        <form >
            <div class="Form">
                <input class="formField" type="text"  placeholder="username"  v-model="username"/>
                <input class="formField" type="password"  placeholder="password"  v-model="password"/>
            </div>

            <button v-on:click="login" class="rounded btn-outline-success    btn-lg"> Login</button>

        </form>
        <label v-if="error">{{error}}</label>
    </div>

</template>

<script>
    import Login from "../services/Login";

    export default {
        name: "Login",

        data:()=>{

            return{
                username : '',
                password : '',
                error :false
            }
        },


        created: function () {
            // `this` points to the vm instance
        },
        methods:{

            login: function (event) {
                event.preventDefault();

                const userLogin =  Login.instance;
                if (userLogin.loginUser(this.username,this.password))
                    this.$router.push('/tickets');
                else
                    this.error="Error logging in ! Please check username and password"

            }


        }

      
    }
</script>

<style scoped>
    #Login {

        color: #2c3e50;
        margin-top: 20vh ;
    }

    .Form{
        display: flex;
        max-width: 400px;
        flex: 1;
        flex-direction: column;
        margin: auto;
    }
    .formField{
        flex: 1;
        padding: 20px;
        margin-bottom: 20px;
        border: yellowgreen 1px solid;
        border-radius: 3px;
        outline: none;

    }

</style>