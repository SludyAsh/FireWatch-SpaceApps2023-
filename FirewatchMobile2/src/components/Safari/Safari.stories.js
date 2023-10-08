import { Safari } from ".";

export default {
  title: "Components/Safari",
  component: Safari,
  argTypes: {
    type: {
      options: ["tab-bar", "address-bar"],
      control: { type: "select" },
    },
    position: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
    orientation: {
      options: ["landscape", "portrait"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "tab-bar",
    position: "top",
    orientation: "landscape",
    scrolled: true,
    className: {},
    safariAddressBarClassName: {},
    iconsSafariRefresh3StyleOverrideClassName: {},
    addressClassName: {},
    divClassName: {},
    text: "apple.com",
  },
};
