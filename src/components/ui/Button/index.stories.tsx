import React, { FC } from "react";
import { withA11y } from "@storybook/addon-a11y";
import Button from "./index";

export default { title: "Button", decorators: [withA11y] };

export const withText: FC = () => <Button>Hello</Button>;

export const withEmoji: FC = () => (
  <div className="light-theme">
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </div>
);

export const defaultView: FC = () => <Button>Info</Button>;

export const accessible: FC = () => <button>Accessible button</button>;

export const inaccessible: FC = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
