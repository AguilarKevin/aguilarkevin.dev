import type {ComponentType, LazyExoticComponent} from 'react'
import {assign, createMachine, interpret} from 'xstate'

import {assign as immerAssign} from '@xstate/immer'

type OverlayType = 'MODAL'

interface OverlayContext {
  component?: LazyExoticComponent<ComponentType<any>>
  overlayType?: OverlayType
  props: Record<string, any>
}

type OverlayEvent =
  | {
      type: 'CLOSE'
    }
  | {
      component: LazyExoticComponent<ComponentType<any>>
      overlayType?: OverlayType
      props?: Record<string, any>
      type: 'OPEN'
    }

export const overlayMachine = createMachine(
  {
    schema: {
      context: {} as OverlayContext,
      events: {} as OverlayEvent,
    },
    tsTypes: {} as import('./overlayMachine.typegen').Typegen0,
    id: 'overlays',
    initial: 'closed',
    context: {
      component: undefined,
      overlayType: undefined,
      props: {},
    },
    states: {
      closed: {
        on: {
          OPEN: {
            actions: 'setContext',
            target: 'opened',
          },
        },
      },

      closing: {
        after: {
          201: {
            actions: 'resetContext',
            target: 'closed',
          },
        },
      },

      opened: {
        on: {
          CLOSE: 'closing',
        },
      },
    },
  },
  {
    actions: {
      resetContext: immerAssign((ctx) => {
        ctx.component = undefined
        ctx.overlayType = undefined
        ctx.props = {}
      }),
      setContext: assign({
        component: (ctx, e) => {
          return e.component
        },
        overlayType: (ctx, e) => {
          return e.overlayType
        },
        props: (ctx, e) => {
          return e.props
        },
      }),
    },
  }
)

export const overlayService = interpret(overlayMachine).start()
