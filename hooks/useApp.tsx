import { AppCtx } from 'context/AppProvider'
import { useContext } from 'react'

function useApp() {
  return useContext(AppCtx)
}

export { useApp }
