import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import EditAuthSource from './edit-auth-source'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
})

const CSCModal = ({sources, onChange}) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState()
  const [editing, setEditing] = useState()
  const classes = useStyles()

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
      >
        Manage Credentials
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Typography align="center">Content Store Credentials</Typography>
        </DialogTitle>
        <DialogContent>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>User Name</strong>
                </TableCell>
                <TableCell>
                  <strong>System</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sources.map(({ name, username }, i) => (
                <TableRow
                  hover
                  selected={selected == i}
                  onClick={() => setSelected(i)}
                >
                  <TableCell>{username}</TableCell>
                  <TableCell>{name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ButtonGroup fullWidth>
            <Button>Add</Button>
            <Button>Modify</Button>
            <Button>Delete</Button>
          </ButtonGroup>
          <EditAuthSource />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default CSCModal
