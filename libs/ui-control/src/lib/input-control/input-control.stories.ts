import { Meta, StoryObj } from "@storybook/angular";

import { InputControlComponent } from "./input-control.component";

const meta: Meta<InputControlComponent> = {
    title: "InputControlComponent",
    component: InputControlComponent    
};
export default meta;

type Story = StoryObj<InputControlComponent>;

export const Text: Story = {
    args: {
        type: 'text',
        placeholder: 'Login',
        fullWidth: false
    }
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Password',
        fullWidth: false
    }
};
