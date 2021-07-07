import React from 'react';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

import './AsideLeft.css';

function AsideNav() {
    return (
        <div className="sidebar-left">

            <a className="sidebar-left__link" href="/news">
                <Link to="/home">
                    <LibraryBooksIcon className="sidebar-left__icon" aria-label="all-posts" />
                    <span className="sidebar-left__anchor">Tous les posts</span>
                </Link>
            </a>


            <a className="sidebar-left__link" href="/messages">
                <Link to="/newpost">
                    <CreateIcon className="sidebar-left__icon" aria-label="new-post" />
                    <span className="sidebar-left__anchor">Ecrire un post</span>
                </Link>
            </a>

        </div>
    )
}

export default AsideNav;
