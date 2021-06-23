import React, {useState} from 'react'
import Modal from '../component/modal'

export default function Mtest() {
    const [visiable, setVisiable] = useState(false)
    return (
        <div>
            <Modal
                title="系统消息"
                content="您的账号已在其他电脑登录"
                visiable={visiable}
                onOk={() => {setVisiable(pre => !pre)}}
            />
            <button onClick={() => {setVisiable(pre => !pre) }}>show modal</button>
        </div>
    )
}
