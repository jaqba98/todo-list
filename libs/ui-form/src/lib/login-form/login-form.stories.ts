import { Meta, StoryObj } from "@storybook/angular";

import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
    title: "LoginFormComponent",
    component: LoginFormComponent    
};
export default meta;

type Story = StoryObj<LoginFormComponent>;

export const Default: Story = {
    args: {
    }
};
