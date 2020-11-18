import React from 'react'
import './CollectionPreview.css'
import { connect } from 'react-redux'
import CollectionItem from '../CollectionItem/CollectionItem'
import { createStructuredSelector } from 'reselect'
import { selectShopPreview, selectShop } from '../../Redux/Shop/ShopSelector'

const CollectionPreview = ({shop}) => {
    
   
    return (
        <div className="collectionPreview">
            {
                shop.map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps} />
                ))
            }   
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    shop: selectShopPreview
})
export default connect(mapStateToProps, null) (CollectionPreview)

