import { Mapa } from ".";

export default {
  title: "Components/Mapa",
  component: Mapa,
  argTypes: {
    property1: {
      options: ["frame-3", "frame-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-3",
    className: {},
  },
};
