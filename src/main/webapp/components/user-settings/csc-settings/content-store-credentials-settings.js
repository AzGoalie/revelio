import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import DialogTitle from '@material-ui/core/DialogTitle'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AuthSourceStatus from './auth-source-status'
import CSCModal from './csc-modal'

const Spacing = () => <div style={{ marginTop: 20 }} />

const CMSSettings = () => (
  <Grid container direction="column">
    <Grid item>
      <Typography align="center"> 1/2 Sources Authenticated </Typography>
    </Grid>
    <Spacing />
    <Grid item>
      <AuthSourceStatus name="NCL-East" authenticated />
    </Grid>
    <Grid item>
      <AuthSourceStatus name="NCL-West" />
    </Grid>
    <Spacing />
    <Grid item>
      <CSCModal />
    </Grid>
  </Grid>
)

export default CMSSettings
