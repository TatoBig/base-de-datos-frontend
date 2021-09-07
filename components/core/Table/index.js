import { withStyles, makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.table.head,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 16
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})
export default function CustomizedTables (props) {
  const { headers = [], rows = [], options = [] } = props

  const classes = useStyles()

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {
              headers.map((header, index) => (
                <StyledTableCell key={index} align={header.align || 'left'}>{header.name}</StyledTableCell>
              ))
            }
            {
              options.length > 0 &&
              <StyledTableCell key={'options'}>Opciones</StyledTableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {
                headers.map((header, index) => (
                  <StyledTableCell key={index} align={header.align}>{row[header.id]}</StyledTableCell>
                ))
              }
              {
                options.length > 0 &&
                <StyledTableCell align="center">
                  {
                    options.map((option, index) => (
                      <Tooltip title={<Typography variant="subtitle2" color="initial">{option.name}</Typography>} key={index}>
                        <IconButton key={index} onClick={() => option.action(row)} size="small">
                          {option.icon}
                        </IconButton>
                      </Tooltip>
                    ))
                  }
                </StyledTableCell>
              }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
