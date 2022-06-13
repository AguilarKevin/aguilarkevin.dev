import {Suspense} from 'react'
import {F} from 'ts-toolbelt'

import {useActor} from '@xstate/react'

import {overlayService} from './machines/mod'

export interface OverlayProps {
  isOpen: boolean
  onClose(): void
}

export type GetOverlayPropsType<T extends F.Function> = Omit<
  F.Parameters<T>[0],
  keyof OverlayProps
>

export function OverlayManager() {
  const [overlayState, sendOverlay] = useActor(overlayService)

  if (overlayState.matches('closed')) {
    return null
  }

  const {context} = overlayState
  const OverlayComponent = context.component
  const props = {
    ...(context.props ?? {}),
    isOpen: overlayState.matches('opened'),
    onClose: () => sendOverlay('CLOSE'),
  }

  return (
    <Suspense fallback={null}>
      {/* @ts-expect-error */}
      <OverlayComponent {...props} />
    </Suspense>
  )
}
