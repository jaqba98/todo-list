import { Meta, StoryObj } from "@storybook/angular";

import { ButtonControlComponent } from "./button-control.component";
import { ButtonTypeEnum } from "./button-type.enum";

const meta: Meta<ButtonControlComponent> = {
    title: "ButtonControlComponent",
    component: ButtonControlComponent    
};
export default meta;

type Story = StoryObj<ButtonControlComponent>;

export const Primary: Story = {
    args: {
        value: "Hello",
        type: ButtonTypeEnum.primary,
        fullWidth: false
    }
};

export const Secondary: Story = {
    args: {
        value: "Hello",
        type: ButtonTypeEnum.secondary,
        fullWidth: false
    }
};

export const Success: Story = {
    args: {
        value: "Hello",
        type: ButtonTypeEnum.success,
        fullWidth: false
    }
};

export const Danger: Story = {
    args: {
        value: "Hello",
        type: ButtonTypeEnum.danger,
        fullWidth: false
    }
};

export const Warning: Story = {
    args: {
        value: "Hello",
        type: ButtonTypeEnum.warning,
        fullWidth: false
    }
};
