const ResolveTypescriptPlugin = require('resolve-typescript-plugin')

module.exports = {
	stories: ['../../*/src/**/*.stories.@(mdx|js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@storybook/addon-interactions',
	],
	webpackFinal: async (config, { configType }) => {
		if (!config.resolve) {
			config.resolve = {}
		}
		if (!config.resolve.plugins) {
			config.resolve.plugins = []
		}
		config.resolve.plugins.push(new ResolveTypescriptPlugin())

		if (!config.resolve.alias) {
			config.resolve.alias = {}
		}
		config.resolve.alias[`styled-components`] =
			require.resolve('styled-components')

		return config
	},
}
