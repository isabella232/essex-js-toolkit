/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import type { ButtonProps } from './Button.js'
import { Button } from './Button.js'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
	<Button {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Button',
}
