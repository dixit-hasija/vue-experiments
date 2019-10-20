new Vue({
  el: "#vue-app",
  data: {
    message: "Dixit",
    status: true,
    fruits: ["Apple", "grapes"],
    vegies: [{ name: "tomatos", cost: "76" }, { name: "onions", cost: "65" }],
    textColor: "green",
    upperCaseText: "",
    disabled: true,
    color: "green",
    amount: "71.428"
  },
  methods: {
    getColor: function(time) {
      return (this.textColor.color = "yellow");
    },
    getName: function() {
      return this.messagex;
    }
  },
  filters: {
    changeCase: function(value) {
      return value.toUpperCase();
    },
    INRTOUSD: function(amount) {
      console.log(amount);
      return amount * 0.014;
    }
  }
});
