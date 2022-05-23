import React, { Suspense, useState } from 'react'
import { BiCubeAlt } from 'react-icons/bi'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const Room = () => {

    const [obj, setObj] = useState()
    const [toggle, setToggle] = useState(false)
    const [status, setStatus] = useState('Stop Animation')
    const [renderStatus, setRenderStatus] = useState('Load Object')
    const [show, setShow] = useState('')
    const [renderObj, setRenderObj] = useState(false)

    const onLoad = (spline) => {
        const temp = spline.findObjectById('5bf7fb81-6117-422d-97d1-e247833be1ab')
        setObj(temp)
    }

    const stopAnimation = (spline) => {
        if (!toggle) {
            obj.emitEvent('mouseDown', '5bf7fb81-6117-422d-97d1-e247833be1ab')
            setToggle(true)
            setStatus('Start Animation')
        }
        else {
            console.log(toggle)
            obj.emitEvent('start', '5bf7fb81-6117-422d-97d1-e247833be1ab')
            setToggle(false)
            setStatus('Stop Animation')
        }
    }

    const stopRender = () => {
        if (renderObj) {
            setRenderObj(false)
            setRenderStatus('Load Object')
            setShow('hide')
        }
        else {
            setRenderObj(true)
            setRenderStatus('Hide Object')
            setShow('')
        }
    }

    return (
        <div className='object-container'>
            <Suspense fallback={<h1>Rendering 3D Object...</h1>}>
                {renderObj ?
                    <Spline
                        scene="https://prod.spline.design/Lg2dWVfToWdTfBqV/scene.splinecode"
                        onLoad={onLoad} /> : <h2>3D Object Canvas<br /> <BiCubeAlt className='box-svg' /></h2>
                }
                <button className={'stop-animation ' + show} onClick={() => stopAnimation()}>{status}</button>
                <button className='hide-object' onClick={() => stopRender()}>{renderStatus}</button>
            </Suspense>
        </div>
    )
}

export default Room