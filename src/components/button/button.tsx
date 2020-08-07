import { defineComponent } from "vue";

const Button = defineComponent({
  name: "AButton",
  setup() {
    return () => (
      <>
        <button>Click</button>
      </>
    );
  }
});

export default Button;
