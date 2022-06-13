// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {
    setContext: 'OPEN'
    resetContext: 'xstate.after(201)#overlays.closing'
  }
  internalEvents: {
    'xstate.after(201)#overlays.closing': {
      type: 'xstate.after(201)#overlays.closing'
    }
    'xstate.init': {type: 'xstate.init'}
  }
  invokeSrcNameMap: {}
  missingImplementations: {
    actions: never
    services: never
    guards: never
    delays: never
  }
  eventsCausingServices: {}
  eventsCausingGuards: {}
  eventsCausingDelays: {}
  matchesStates: 'closed' | 'closing' | 'opened'
  tags: never
}
