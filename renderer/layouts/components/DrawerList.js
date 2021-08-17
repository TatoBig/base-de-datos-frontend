import { Fragment } from 'react'

import useDrawerData from 'layouts/components/drawerData'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const DrawerList = () => {
  const drawerData = useDrawerData()
  return (
    <Fragment>
      <List>
        {Object.keys(drawerData).map((key, index) => (
          <ListItem onClick={() => drawerData[key].redirect()} button key={key}>
            <ListItemIcon>{drawerData[key].icon}</ListItemIcon>
            <ListItemText primary={<Typography variant="subtitle1">{key}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
}

export default DrawerList
