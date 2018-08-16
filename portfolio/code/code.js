Vue.component("theme-picker", {
  data: function() {
    return {
      selected: "",
      themes: [{ name: "default" },{ name: "aquamarina" }, { name: "joy" }, { name: "fortune" }, { name: "summer" }, { name: "soft" }, { name: "veggie" }, { name: "alto-contraste" }]
    };
  },
  mounted(){
    if (localStorage.getItem("theme") != null) {
      this.selected = localStorage.getItem("theme");
    }
  },
  watch: {
    selected: function() {
      const el = document.documentElement;
      el.classList.value = "";
      el.classList.add(this.selected);
      
      localStorage.setItem("theme", this.selected);
      console.log(`almaceno ${this.selected}`);
    }
  },
  template: `
  <label class="theme-picker">Seleccione un tema
  <select v-model="selected">
                    <option disabled>-Selecciona un tema-</option>
                    <option v-for="theme in themes" :value="theme.name">{{theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace('-',' ')}}</option>
                </select></label>`
});



if (document.getElementById("app")) {
  new Vue({
    el: "#app",
    data: {
    }
  });
}

if (document.getElementById("projects")) {
  new Vue({
    el: "#projects",
    data: {
      projects: projectsinfo,
      webs:null,
      games:null,
      apps:null
    },
    mounted(){
      this.webs = this.projects.filter( obj => obj.type == "web");
      this.apps = this.projects.filter( obj => obj.type == "app");
      this.games = this.projects.filter( obj => obj.type == "game");
    },
    methods:{
      getStack(string){
        return string.split(",");
      }
    }
  });
}

new Vue({
  el: "#footer",
  components: { themepicker: "theme-picker" } 
});
