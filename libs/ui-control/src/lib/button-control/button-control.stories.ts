import { Meta, StoryObj } from "@storybook/angular";

import { ButtonControlComponent } from "./button-control.component";

const meta: Meta<ButtonControlComponent> = {
    title: "ButtonControlComponent",
    component: ButtonControlComponent    
};
export default meta;

type Story = StoryObj<ButtonControlComponent>;

export const Primary: Story = {
    args: {
        value: "Hello",
        type: 'primary',
        fullWidth: false,
        isText: false
    }
};

export const Secondary: Story = {
    args: {
        value: "Hello",
        type: 'secondary',
        fullWidth: false,
        isText: false
    }
};

export const Success: Story = {
    args: {
        value: "Hello",
        type: 'success',
        fullWidth: false,
        isText: false
    }
};

export const Danger: Story = {
    args: {
        value: "Hello",
        type: 'danger',
        fullWidth: false,
        isText: false
    }
};

export const Warning: Story = {
    args: {
        value: "Hello",
        type: 'warning',
        fullWidth: false,
        isText: false
    }
};
