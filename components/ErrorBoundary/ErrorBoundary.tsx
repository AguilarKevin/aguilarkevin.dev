import {useCallback} from 'react'
import type {ReactNode} from 'react'
import {ErrorBoundary as BaseErrorBoundary} from 'react-error-boundary'
import type {ErrorBoundaryPropsWithComponent} from 'react-error-boundary'

import {callAll} from '@chakra-ui/utils'

// import {captureException} from 'utilities/analytics/sentry'

interface ErrorBoundaryProps extends ErrorBoundaryPropsWithComponent {
  children: ReactNode
}

export function ErrorBoundary({
  onError: _onError,
  ...props
}: ErrorBoundaryProps) {
  const onError = useCallback((error: Error) => {
    console.error(error)
    // captureException(error)
  }, [])

  return <BaseErrorBoundary {...props} onError={callAll(onError, _onError)} />
}
