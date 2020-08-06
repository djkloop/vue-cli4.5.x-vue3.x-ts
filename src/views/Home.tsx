import { defineComponent, ref, unref, onMounted } from "vue";
import TestComponents from "@/components/TestComponents";

const Home = defineComponent(() => {
  const count = ref(0);

  const inc = () => {
    count.value++;
  };

  const dec = () => {
    count.value--;
  };

  onMounted(() => {
    console.log("父级组件的onmounted");
  });

  return () => {
    console.log("父组件setup优先触发");
    return (
      <>
        <button onClick={inc} style={{ marginRight: "20px" }}>
          增加
        </button>
        <button onClick={dec}>减少</button>
        <TestComponents value={unref(count)} />
      </>
    );
  };
});

export default Home;
