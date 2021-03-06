import React from 'react'

import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import EditIcon from '@material-ui/icons/Edit'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import moment from 'moment'

import { CustomTooltip } from '../tooltip'

import { ShareAction } from '../sharing/sharing-modal'

import { ConfirmDeleteAction as DeleteAction } from '../confirm-delete'

const onClick = action => e => {
  e.preventDefault()
  e.stopPropagation()
  if (typeof action === 'function') {
    action(e)
  }
}

export const EditAction = props => {
  const { onEdit } = props
  return (
    <IconButton onClick={onClick(onEdit)}>
      <EditIcon />
    </IconButton>
  )
}
export const DuplicateAction = props => {
  const { onDuplicate } = props
  return (
    <IconButton onClick={onClick(onDuplicate)}>
      <CustomTooltip title="Duplicate">
        <FileCopyIcon />
      </CustomTooltip>
    </IconButton>
  )
}

export { ShareAction, DeleteAction }

export const Actions = CardActions

const ItemContainer = props => {
  const { children, style, onClick } = props

  return (
    <Card
      style={{
        width: 345,
        margin: 20,
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Card>
  )
}

export const AddCardItem = props => {
  const { onClick } = props

  return (
    <ItemContainer onClick={onClick}>
      <CardActionArea
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <AddCircleOutlineIcon style={{ width: '50%', height: '50%' }} />
      </CardActionArea>
    </ItemContainer>
  )
}

export const IndexCardItem = props => {
  const {
    headerAction,
    title,
    subHeader,
    metacard_owner,
    modified,
    children,
    onClick,
  } = props

  return (
    <ItemContainer onClick={onClick}>
      <CardActionArea component={'div'}>
        <CardHeader
          title={title}
          subheader={subHeader || moment(modified).fromNow()}
          action={headerAction}
        />
        <CardContent>
          {metacard_owner && (
            <Typography variant="body2" color="textSecondary" component="p">
              Owner: {metacard_owner}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {children}
    </ItemContainer>
  )
}

export const IndexCards = props => {
  const { children } = props
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>
}
