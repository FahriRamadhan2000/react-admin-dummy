import DataDummy1 from './chart/DataDummy1'
import DataDummy2 from './chart/DataDummy2'
import DataDummy3 from './chart/DataDummy3'
import chartPNG from '../assets/chart.png'

const Home = (props) => {
    return (
        <>
            <div className="row g-4 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card-1 main-color d-flex">
                        <div className="col-9 d-flex flex-column justify-content-center align-items-start px-5" style={{ height: '100%' }}>
                            <b className='m-0 text-white'>Dummy</b>
                            <b className='m-0 text-white text-large-1'>sip</b>
                        </div>
                        <div className="col d-flex flex-column justify-content-center align-items-start" style={{ height: '100%' }}>
                            <img src={chartPNG} alt="" style={{ height: 'auto', width: '50%' }} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card-1 main-color d-flex">
                        <div className="col-9 d-flex flex-column justify-content-center align-items-start px-5" style={{ height: '100%' }}>
                            <b className='m-0 text-white'>Dummy</b>
                            <b className='m-0 text-white text-large-1'>sip</b>
                        </div>
                        <div className="col d-flex flex-column justify-content-center align-items-start" style={{ height: '100%' }}>
                            <img src={chartPNG} alt="" style={{ height: 'auto', width: '50%' }} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card-1 main-color d-flex">
                        <div className="col-9 d-flex flex-column justify-content-center align-items-start px-5" style={{ height: '100%' }}>
                            <b className='m-0 text-white'>Dummy</b>
                            <b className='m-0 text-white text-large-1'>sip</b>
                        </div>
                        <div className="col d-flex flex-column justify-content-center align-items-start" style={{ height: '100%' }}>
                            <img src={chartPNG} alt="" style={{ height: 'auto', width: '50%' }} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card-1 main-color d-flex">
                        <div className="col-9 d-flex flex-column justify-content-center align-items-start px-5" style={{ height: '100%' }}>
                            <b className='m-0 text-white'>Dummy</b>
                            <b className='m-0 text-white text-large-1'>sip</b>
                        </div>
                        <div className="col d-flex flex-column justify-content-center align-items-start" style={{ height: '100%' }}>
                            <img src={chartPNG} alt="" style={{ height: 'auto', width: '50%' }} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-3">
                    <div className="card-2" style={{ overflow: 'hidden' }}>
                        <h4 className='text-center pt-4 pb-1'>Data Dummy 1</h4>
                        <DataDummy1 />
                    </div>
                </div>
                <div className="col">
                    <div className="card-2">
                        <h4 className='text-center pt-4 pb-1'>Data Dummy 2</h4>
                        <DataDummy2 />
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <div className="card-2">
                        <h4 className='text-center pt-4 pb-1'>Data Dummy 3</h4>
                        <DataDummy3 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home