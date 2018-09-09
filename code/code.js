Vue.component("theme-picker", {
  data: function() {
    return {
      selected: "",
      themes: [
        { name: "default" },
        { name: "green" },
        { name: "sunset" },
        { name: "sea-salt" },
        {name: "pinker"},
        {name: "soft"}
      ]
    };
  },
  mounted() {
    
    if (localStorage.getItem("theme") != null) {
      this.selected = localStorage.getItem("theme");
    }else{
      this.selected = "default";
      const el = document.documentElement;
      el.classList.value = "";
      el.classList.add(this.selected);
      localStorage.setItem("theme", this.selected);
    }
  },
  watch: {
    selected: function() {
      const el = document.documentElement;
      el.classList.value = "";
      el.classList.add(this.selected);
      localStorage.setItem("theme", this.selected);
    }
  },
  template: `
  <label class="theme-picker">Seleccione un tema
  <select v-model="selected">
      <option disabled>-Selecciona un tema-</option>
      <option v-for="theme in themes" :value="theme.name">{{theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace('-',' ')}}</option>
  </select></label>`
});

 // <h2 v-if="pr.link != null"><a class="title" :href="pr.link" target="_blank">{{pr.name}}</a></h2>
Vue.component("project-list", {
  props: ["projects"],
  template: `
  <div class="projects">
    <div v-for="pr in projects" class="card">
      <img :src="pr.image" alt="">
      <div class="info">
       
        <h2 class="text-center">{{pr.name}}</h2>
        <p>{{pr.excerpt}}</p>
        <button @click="showInfo(pr)">Más información</button>
     </div>
    </div>
    </div>
  `,
  methods: {
    showInfo(project) {
      this.$parent.$emit("showInfo", project);
    }
  }
});

if (document.getElementById("app")) {
  new Vue({
    el: "#app",
    components: { themepicker: "theme-picker" }
  });
}

if (document.getElementById("projects")) {
  new Vue({
    el: "#projects",
    data: {
      projects: projectsinfo,
      webs: null,
      games: null,
      apps: null,
      modal: null
    },
    mounted() {
      this.webs = this.projects.filter(obj => obj.type == "web");
      this.apps = this.projects.filter(obj => obj.type == "app");
      this.games = this.projects.filter(obj => obj.type == "game");
      this.$on("showInfo", value => this.showInfo(value));
    },
    methods: {
      getStack(string) {
        return string.split(",");
      },
      showInfo(project) {
        this.modal = project;
        var modal = document.getElementById("modal");
        modal.style.display = "flex";
        window.onclick = function(event) {
          if (event.target == modal) modal.style.display = "none";
        };
      },
      closeModal() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
      }
    }
  });
}
if (document.getElementById("footer")) {
  new Vue({
    el: "#footer",
    components: { themepicker: "theme-picker" }
  });
}
