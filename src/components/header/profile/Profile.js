import style from './prodile.module.css';
import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div  className={style.profile}>
                <button className={style.profileBtn}></button>
            </div>
        );
    }
}

export default Profile;