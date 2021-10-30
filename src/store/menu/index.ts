import {setError, setMenu, setMenuSuccess} from './slice'

export {default as menu} from './slice'

export const menuActions = {
  setMenu,
  setMenuSuccess,
  setError,
}
export * from './saga'
