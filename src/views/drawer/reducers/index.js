import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions'

export const updateDrawerVisibility = (open = false, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return true
    case CLOSE_DRAWER:
      return false
    default:
      return open
  }
}
