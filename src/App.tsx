import { defineComponent } from "vue";

const App = defineComponent(() => {
  return () => (
    <>
      <router-view></router-view>
    </>
  );
});

export default App;
