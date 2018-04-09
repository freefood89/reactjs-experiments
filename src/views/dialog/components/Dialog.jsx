import React from 'react'

import {
  DialogContent,
  DialogContentText,
} from 'material-ui/Dialog'

const Dialog = ({ text }) => (
  <DialogContent>
    <DialogContentText>
      { text }
    </DialogContentText>
  </DialogContent>
)

export default Dialog
