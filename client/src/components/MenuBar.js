import React from 'react'
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import "./MenuBar.css"

const MenuBar = () => {
    return (
        <div className="menubar">
            <Divider />
            <div className="button_list">
            <Button href="./clothes">CLOTHES</Button>
            <Button href="./men">MEN</Button>
            <Button href="./ja">JEWELRY & ACCESSORIES</Button>
            <Button>KIDS</Button>
            <Button>HOME</Button>
            <Button color="secondary">NEW ARRIVAL</Button>
            <Button color="secondary">ON SALE</Button>
            </div>
            <Divider />
        </div>
    )
}

export default MenuBar