import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const EditAuthSource = () => (
    <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
            <Typography align="center">Modify Credentials</Typography>
        </Grid>
        <Grid item>
            <TextField 
                InputProps={{
                    readOnly: true,
                }}
                label="System" 
                variant="outlined"
                value="NCL-West" />
        </Grid>
        <Grid item>
            <TextField 
                InputProps={{
                    readOnly: true,
                }}
                label="Username" 
                variant="outlined"
                value="nclUser05" />
        </Grid>
        <Grid item>
            <TextField label="Password" variant="outlined" type="password" />
        </Grid>
        <Grid item>
            <TextField label="Confirm Password" variant="outlined" type="password" />
        </Grid>
        <Grid item container justify="center">
            <Button variant="contained" color="primary">Confirm</Button>
            <Button variant="outlined" color="secondary">Cancel</Button>
        </Grid>
    </Grid>
)

export default EditAuthSource