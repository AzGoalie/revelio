import React from 'react'
import Typography from '@material-ui/core/Typography'
import DoneIcon from '@material-ui/icons/Done'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'

const AuthSourceStatus = ({ name, authenticated }) => (
  <React.Fragment>
    <Typography>
      {authenticated ? <DoneIcon /> : <PriorityHighIcon />}
      {name}
    </Typography>
  </React.Fragment>
)

export default AuthSourceStatus
