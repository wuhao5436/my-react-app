import React, {useEffect, useRef} from 'react'
import { createPortal } from 'react-dom';

import './style.css'

export default function Modal(props) {
    const { title, content, visiable, onOk} = props
    const node = useRef();

    


    const modalDom = <div className="modal-wrapper">
        <div className="modal-box">
            <div className="modal-title">
                {title}
            </div>
            <div className="modal-content">
                {content}
            </div>
            <div className="modal-footer">
                <button onClick={onOk}> 确定 </button>
            </div>
        </div>
    </div>

    useEffect(() => {
        node.current = document.createElement('div');
        document.body.appendChild(node.current);
        return () => {
            document.body.removeChild(node.current);
        }
    }, [])

    return (
        visiable && createPortal( modalDom, node.current)
    )
}
