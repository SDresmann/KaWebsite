import React from 'react'
import banner from '../pictures/banner.jpg'
import han from '../pictures/Hanya-KA-Website.png'
import altafiber from '../pictures/Partners/altafiber-logo1.jpg'
import gaig from '../pictures/Partners/gaig-logo1.jpg'
import glidfast from '../pictures/Partners/glidefast-logo1.jpg'


const Home = () => {
    return (
        <div className='container'>
            <div className='home-header'>
                <div className='row'>
                    <img src={banner} alt='banner' className='img align-self-center justify-content-center'></img>
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
                quasi aliquam eligendi, placeat qui corporis!
            </p>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className='col-6'>
                        <div className='home-box'>
                            <h2>Web Development</h2>
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
                <div className='col-6 admissions mb-5'>
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
                    <button className='btn btn-primary '>Talk with Admisions</button>
                </div>
                <div className='col-6 admissions pic mb-5 '>
                    <img src={han} className='han' alt='Han' />

                </div>
            </div>
            <h3 className='text-center mb-5'>Our Partners</h3>
            <div className='row partner justify-content-center mb-5'>
                <div className='col-4'>
                    <img src={altafiber} alt='alta fiber logo' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={gaig} alt='great american insurance group' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={glidfast} alt='Glide fast logo' width='300px' />
                </div>
            </div>
            <div className='row partner mb-5'>
                <div className='col-4'>
                    <img src={altafiber} alt='alta fiber logo' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={gaig} alt='great american insurance group' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={glidfast} alt='Glide fast logo' width='300px' />
                </div>
            </div>
            <div className='row partner mb-5'>
                <div className='col-4'>
                    <img src={altafiber} alt='alta fiber logo' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={gaig} alt='great american insurance group' width='300px' />
                </div>
                <div className='col-4'>
                    <img src={glidfast} alt='Glide fast logo' width='300px' />
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12 '>
                    <button className='btn btn-primary partner-btn '>Become a partner</button>
                </div>
            </div>
            <div className='hr'></div>
            <h3 className='text-center mb-5'>News</h3>
            <div className='row  news mb-5 ms-5'>
                <div className='col-4 '>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row news ms-5'>
                <div className='col-4'>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4 '>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
