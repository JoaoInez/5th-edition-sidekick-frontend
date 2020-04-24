import React, { StatelessComponent } from "react";
import { withA11y } from "@storybook/addon-a11y";
import Button from "./index";

export default { title: "Button", decorators: [withA11y] };

export const withText: StatelessComponent = () => <Button>Hello</Button>;

export const withEmoji: StatelessComponent = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const defaultView: StatelessComponent = () => <Button>Info</Button>;

export const accessible: StatelessComponent = () => (
  <button>Accessible button</button>
);

export const inaccessible: StatelessComponent = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
