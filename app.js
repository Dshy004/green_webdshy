const app = Vue.createApp({
    data() {
        return {
            forms: false,
            login: true,
            register: false,
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            emailError: '',
            passwordError: '',
            confirmPasswordError: ''
        };
    },
    methods: {
        showForm() {
            if(this.forms === false) {
                this.forms = true;
            }else {
                this.forms = false;
            }
        },
        closeForm() {
            this.forms = false;
        },
        toggleForms() {
            if(this.register === false) {
                this.register = true;
                this.login = false;
            }else {
                this.register = false;
                this.login = true;
            }
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        validateEmail() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(this.email)) {
                this.emailError = "Enter a valid email";
            } else {
                this.emailError = '';
            }
        },
        validatePassword() {
            const regex1 = /^.{6,}$/;
            if (!regex1.test(this.password)) {
                this.passwordError = "Your password must contain at least 6 characters";
            } else {
                this.passwordError = '';
            }
        },
        validateConfirmPassword() {
            if (this.confirmPassword !== this.password) {
                this.confirmPasswordError = "Password don't match";
            } else {
                this.confirmPasswordError = '';
            }
        }
    }
});

app.mount('#app');