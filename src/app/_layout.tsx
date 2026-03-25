import {ThemeProvider} from '@shopify/restyle'
import {Slot} from 'expo-router'

import {lightTheme} from 'themes/light'

export default function RootLayout() {
	return (
		<ThemeProvider theme={lightTheme}>
			<Slot />
		</ThemeProvider>
	)
}
