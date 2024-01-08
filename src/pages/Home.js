import React from 'react'
import banner from '../pictures/banner.jpg'
import han from '../pictures/Hanya-KA-Website.png'


const Home = () => {
    return (
        <div className='container-fluid '>
            <div className='home-header'>
                <div className='row'>
                    <img src={banner} alt='banner' className='img align-self-center justify-content-cneter'></img>
                </div>
            </div>
            <div>
                <h1 className='text-center'>KABLE ACADEMY</h1>
                <h3 className='text-center mb-5'>Conntecting you to your future one student at a time!</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam similique ad
                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                quasi aliquam eligendi, placeat qui corporis!</p>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className='col-6'>
                        <div className='home-box'>
                            <h2>Web Devopement</h2>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className='home-box right'>
                            <div className=''>
                            <h2>Cyber Security</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hr text-center'></div>
            <h3 className='text-center mb-5 mt-5'>Admissions</h3>
            <div className='row'>
                <div className='col-6 partner'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit</p>
                </div>
                <div className='col-6 partner-logo'>
                    <img src={han} className='' alt='Han'/>

                </div>
            </div>
        </div>
    )
}

export default Home
