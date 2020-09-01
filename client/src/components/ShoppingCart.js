import React from 'react'
import { connect } from 'react-redux'

const ShoppingCart = () => {
    return (
        <div>
            
        </div>
    )
}

function mapStateToProps({cart, dispatch}) {
    return ({cart, dispatch});
}
export default connect(mapStateToProps)(ShoppingCart)
