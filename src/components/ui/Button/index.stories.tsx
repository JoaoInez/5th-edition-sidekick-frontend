import React, { FC } from "react";
import { withA11y } from "@storybook/addon-a11y";
import Button from "./index";

export default { title: "Button", decorators: [withA11y] };

export const lightTheme: FC = () => (
  <div className="light-theme">
    <Button>Hello</Button>
  </div>
);

export const darkTheme: FC = () => (
  <div className="dark-theme">
    <Button>Hello</Button>
  </div>
);
