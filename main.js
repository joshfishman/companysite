const app = new Vue({
  el: '#onboard',

  data: {
    project: '',
    email: '',
    confirm: false
  },
  
  methods: {
    processForm: function() {
      console.log({ name: this.project, email: this.email });
      this.confirm = true;
    }
  }
});