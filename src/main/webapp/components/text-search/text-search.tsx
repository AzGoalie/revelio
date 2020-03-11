import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { Map } from 'immutable'
import * as React from 'react'
import { createQuery } from '../basic-search/basic-search'
import { QueryBuilderProps } from '../query-builder/query-builder'
import { QueryFilter } from '../query-builder/types'

const TextSearch = (props: any) => {
  return (
    <TextField
      fullWidth
      label="Text"
      variant="outlined"
      value={props.text}
      onChange={props.handleChange}
    />
  )
}

export default (props: QueryBuilderProps) => {
  const [text, setText] = React.useState(
    (props.query?.filterTree as QueryFilter).value || '*'
  )

  const onChange = (text: string) => {
    setText(text)
    return props.onChange(createQuery(Map({ text })))
  }

  return (
    <React.Fragment>
      <Paper
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 16,
          boxSizing: 'border-box',
        }}
      >
        <TextSearch
          text={text}
          handleChange={(e: any) => onChange(e.target.value)}
        />
      </Paper>

      <Divider />
    </React.Fragment>
  )
}
