import {useActor} from '@xstate/react'

import {overlayService} from '../machines/mod'

export function useOverlayService() {
  return useActor(overlayService)
}
