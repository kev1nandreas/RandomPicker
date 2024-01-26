

const App = Vue.createApp({
    data() {
        return {
            state: true,
            nameInput: '',
            names: [],
            error: '',
            showError: false,
            result: '',
        }
    },
    computed: {
        isReady(){
            return this.names.length > 1
        }
    },
    methods: {
        inputNameList(){
            const userName = this.nameInput;
            if (this.validate(userName)) {
                this.names.push(userName);
                this.nameInput = '';
                this.showError = false;
            } else {
                this.showError = true;
            }
        },
        validate(value){
            this.error = ''
            if (value === '') {
                this.error = 'Name can not empty'
                return false
            } else if (this.names.includes(value)) {
                this.error = 'Name must be unique'
                return false
            }

            return true
        },
        removeName(index){
            this.names.splice(index, 1)
        },
        showResult(){
            this.state = false;
            this.generateResult();
        },
        getResult(){
            return this.names[Math.floor(Math.random() * this.names.length)]
        },
        generateResult(){
            let randomName = this.getResult();
            if (randomName !== '') {
                while (randomName === this.result) {
                    randomName = this.generateResult();
                }
            }
            this.result = randomName;
        },
        resetApp(){
            this.state = true;
            this.nameInput = '';
            this.names = [];
            this.error = '';
            this.showError = false;
            this.result = '';
        },
        getNewName(){
            this.generateResult();
        }
    },
}).mount('#app')