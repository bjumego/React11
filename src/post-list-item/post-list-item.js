import React, {Component} from "react";

import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {laber, onDelete, onToggleImportant, onToggleLiked, like, important} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames +=' like';
        }
        
        return (
            <div className={classNames}>
                <span
                className="app-list-item-labe"
                onClick={onToggleLiked}>
                    {label}
                </span>
            <div className="d-flex justify-content-center align-centre">
            <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}>
                <i className="fa fa-star"></i>
            </button>
            <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDelete}>
                <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
            <div>
                
            </div>