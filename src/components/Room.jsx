import React, { Suspense, useState } from 'react'
import { BiCubeAlt } from 'react-icons/bi'
import { AiOutlineWarning } from 'react-icons/ai'
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const Room = () => {

    const [renderStatus, setRenderStatus] = useState('Load Canvas')
    const [show, setShow] = useState('')
    const [renderObj, setRenderObj] = useState(false)
    const [fullScreen, setFullScreen] = useState('')
    const [fullScreenStatus, setFullScreenStatus] = useState(false)

    const stopRender = () => {
        if (renderObj) {

            setRenderObj(false)
            setRenderStatus('Load Canvas')
            setShow('hide')
        }
        else {

            setRenderObj(true)
            setRenderStatus('Reset Canvas')
            setShow('')
        }
    }

    const handleFullScreen = () => {
        if (!fullScreenStatus) {
            setFullScreen(' full-screen')
            setFullScreenStatus(true)
        }
        else {
            setFullScreen('')
            setFullScreenStatus(false)
            console.log('hs')
        }
    }

    return (
        <div className={'object-container' + fullScreen}>
            <Suspense fallback={<h1>Rendering 3D Object...</h1>}>
                <div className='object'>
                    {renderObj ?
                        <iframe src='https://my.spline.design/portfolioroomcopy-ea96ade774b7f9c18b4b4eda94c0de0d/' id='room' frameBorder='0' width='100%' height='100%' title='Room'></iframe>
                        :
                        <h2>3D Interactive Canvas<br /> <BiCubeAlt className='box-svg' /><br /><mark className='canvas-warning'><AiOutlineWarning /> May impact performance on lower end devices</mark></h2>
                    }
                </div>
                <div className='buttons'>
                    <button className='hide-object' onClick={() => stopRender()}>{renderStatus}</button>
                    <button className='full-object' onClick={() => handleFullScreen()}>
                        {fullScreenStatus ? <FiMinimize2 /> : <FiMaximize2 />}
                    </button>
                </div>
            </Suspense>
        </div>
    )
}

export default Room