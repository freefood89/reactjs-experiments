import { makeActionCreator } from 'actions/utils'

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const openDrawer = makeActionCreator(OPEN_DRAWER)
export const closeDrawer = makeActionCreator(CLOSE_DRAWER)
