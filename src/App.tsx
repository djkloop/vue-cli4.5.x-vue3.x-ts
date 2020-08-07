import { defineComponent } from "vue";
const App = defineComponent({
  setup() {
    return () => (
      <>
        <router-view></router-view>
      </>
    );
  }
});

export default App;
