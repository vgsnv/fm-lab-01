import {createTheme} from '@shopify/restyle'

import {defaultTheme} from './default'

export const lightTheme = createTheme({
	...defaultTheme,
})

export type Theme = typeof lightTheme
