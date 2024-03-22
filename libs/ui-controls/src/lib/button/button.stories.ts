import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
    title: "ButtonComponent",
    component: ButtonComponent    
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
    args: {
        value: "Hello"
    }
};