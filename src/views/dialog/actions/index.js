import { makeActionCreator } from 'actions/utils'

export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const SET_DIALOG_CONTENT = 'SET_DIALOG_CONTENT'
export const CLEAR_DIALOG_CONTENT = 'CLEAR_DIALOG_CONTENT'

export const openDialog = makeActionCreator(OPEN_DIALOG)
export const closeDialog = makeActionCreator(CLOSE_DIALOG)
export const setDialogContent = makeActionCreator(SET_DIALOG_CONTENT, 'content')
export const clearDialogContent = makeActionCreator(CLEAR_DIALOG_CONTENT)
