import { Meta, StoryObj } from "@storybook/angular";

import { ButtonControlComponent } from "./button-control.component";

const meta: Meta<ButtonControlComponent> = {
    title: "ButtonControlComponent",
    component: ButtonControlComponent    
};
export default meta;

type Story = StoryObj<ButtonControlComponent>;

export const Default: Story = {
    args: {
        value: "Hello"
    }
};
