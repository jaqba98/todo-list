import { Meta, StoryObj } from "@storybook/angular";
import { UiControlsComponent } from "./ui-controls.component";

const meta: Meta<UiControlsComponent> = {
    title: "UiControlsComponent",
    component: UiControlsComponent
};
export default meta;

type Story = StoryObj<UiControlsComponent>;

export const Default: Story = {
    args: {}
};