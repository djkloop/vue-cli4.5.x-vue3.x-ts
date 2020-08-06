import { defineComponent, onMounted } from "vue";

const TestComponents = defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    console.log("子组件的setup触发了");
    onMounted(() => {
      console.log(`子组件的mounted触发了`);
    });

    return () => {
      return (
        <>
          <div>props value is {props.value}</div>
          {props.value > 2 ? <p style={{ color: "red" }}>我是tips</p> : null}
        </>
      );
    };
  }
});

export default TestComponents;
