import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AuthSourceStatus from './auth-source-status'
import CSCModal from './csc-modal'

const Spacing = () => <div style={{ marginTop: 20 }} />

const CMSSettings = () => {
  const sources = [
    { name: 'NCL-East', authenticated: true, username: 'nclUser02' }, 
    { name: 'NCL-West', authenticated: false, username: 'nclUser05'}
  ]

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography align="center"> {sources.filter(source => source.authenticated).length}/{sources.length} Sources Authenticated </Typography>
      </Grid>
      <Spacing />
      {sources.map(({ name, authenticated }) => (
        <Grid item>
          <AuthSourceStatus name={name} authenticated={authenticated} />
        </Grid>
      ))}
      <Spacing />
      <Grid item>
        <CSCModal sources={sources} />
      </Grid>
    </Grid>
  )
}

export default CMSSettings
