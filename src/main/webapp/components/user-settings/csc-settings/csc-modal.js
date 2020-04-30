import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const CSCModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
      >
        Manage NCL Credentials
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Content Store Credentials</DialogTitle>
        <Table>
          <TableHead>
            <TableRow selected>
              <TableCell>
                <strong>User Name</strong>
              </TableCell>
              <TableCell>
                <strong>System</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>nclUser02</TableCell>
              <TableCell>NCL-East</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>nclUser05</TableCell>
              <TableCell>NCL-West</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ButtonGroup fullWidth>
          <Button>Add</Button>
          <Button>Modify</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </Dialog>
    </React.Fragment>
  )
}

export default CSCModal
