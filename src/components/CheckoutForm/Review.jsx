import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'

const Riview = ({checkoutToken}) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>   
            <List disablePadding>
                {checkoutToken.live.line_items.map((product)=>(
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding:'10px 0'}}>
                    <ListItemText primary="Total" secondary/>
                    <Typography style={{fontWeight:700}} variant="subtitle1">
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Riview;