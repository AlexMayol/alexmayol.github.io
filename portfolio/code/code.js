Vue.component("theme-picker", {
  data: function() {
    return {
      selected: "",
      themes: [
        { name: "default" },
        { name: "cold-warm" },
        { name: "alto-contraste" },
        { name: "dark-pink" },
        { name: "veggie" }
      ]
    };
  },
  mounted() {
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
    }
  },
  template: `
  <label class="theme-picker">Seleccione un tema
  <select v-model="selected">
      <option disabled>-Selecciona un tema-</option>
      <option v-for="theme in themes" :value="theme.name">{{theme.name.charAt(0).toUpperCase() + theme.name.slice(1).replace('-',' ')}}</option>
  </select></label>`
});

Vue.component("project-list", {
  props: ["projects"],
  template: `
  <div class="projects">
    <div v-for="pr in projects" class="card">
      <img :src="pr.image" alt="">
      <div class="info">
        <h2><a class="title" :href="pr.link" target="_blank">{{pr.name}}</a></h2>
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
    data: {}
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
      modal: null,
      openModal: false
    },
    mounted() {
      this.webs = this.projects.filter(obj => obj.type == "web");
      this.apps = this.projects.filter(obj => obj.type == "app");
      this.games = this.projects.filter(obj => obj.type == "game");
      this.$on("showInfo", value => this.showModal(value));
    },
    methods: {
      getStack(string) {
        return string.split(",");
      },
      showModal(project) {
        this.modal = project;
        this.openModal = true;
        document.body.style.overflow = "hidden";
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
