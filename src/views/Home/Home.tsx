import { defineComponent, onMounted, reactive, watch } from "vue";
import TestComponents from "@/components/TestComponents";
import { useDec, useInc } from "./useHome";
import { HomeState } from "./home.type";

const Home = defineComponent({
  setup() {
    const state = reactive<HomeState>({
      count: 0
    });

    console.log("父组件setup优先触发");
    onMounted(() => {
      console.log("父级组件的onmounted");
    });

    watch(
      () => state.count,
      count => {
        if (count >= 3) {
          console.log(count);
        }
      }
    );

    return () => (
      <>
        <button onClick={() => useInc(state)} style={{ marginRight: "20px" }}>
          增加
        </button>
        <a-button></a-button>
        <button onClick={() => useDec(state)}>减少</button>
        <TestComponents value={state.count} />
      </>
    );
  }
});

export default Home;
