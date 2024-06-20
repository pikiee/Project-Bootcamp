import { Breadcrumb } from "./breadcrumb";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BreadcrumbProps } from "./breadcrumb.types";
// import {Card} from '../card';

export default {
    title: 'Atoms/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        variant: { control: 'select' }
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => <Breadcrumb {...args} />;
Default.args = {
    variant: 'medium',
    datas: [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Library',
            path: '/library'
        },
        {
            title: 'Data',
            path: '/data'
        }
    ]
};

export const custom: StoryObj<BreadcrumbProps> = (args: React.JSX.IntrinsicAttributes & BreadcrumbProps) => (
    <Breadcrumb {...args}>
        <div className="mr-2">
            <span></span>
        </div>
    </Breadcrumb>
);
custom.args = {
    ...Default.args,
};