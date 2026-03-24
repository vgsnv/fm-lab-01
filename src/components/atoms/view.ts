import {ComponentProps} from 'react'

import {createBox} from '@shopify/restyle'

import {Theme} from 'themes/default'

export const View = createBox<Theme>()
export type ViewProps = ComponentProps<typeof View>
