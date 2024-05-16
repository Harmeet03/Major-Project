import React from 'react';
import './index.css';
import Navbar from './Navbar';
import  './App.css'
import Footer from './Footer';

const Home = () => {
return(
    <>
    <div className='abc1' style={{width: "1200px", margin: "auto"}}>
        <Navbar/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Nothing+You+Could+Do" />
        <div class="slideshow-container">
            <div class="mySlides fade">
                <img src="https://m.media-amazon.com/images/I/81ZYZa-tsjL._SY879_.jpg" alt="sdsd"></img>
            </div>
            <div class="mySlides fade">
                <img src="https://m.media-amazon.com/images/I/71auRIYMxAL._SY741_.jpg" alt="sdsd"></img>
            </div>
            <div class="mySlides fade">
                <img src="https://m.media-amazon.com/images/I/61eJA6vigNL._SY741_.jpg" alt="sdsd"></img>
            </div>
            <div class="dots" style={{textAlign: "center"}}>
                <span class="dot"></span> 
                <span class="dot"></span> 
                <span class="dot"></span> 
            </div>
        </div>
        <div className='Cont1' style={{width: "1200px", margin: "auto"}}>
            <h1>About Us</h1>

            <div className='Cont2'>
                <img id='i99' src='https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg' alt='img'></img>

                <p id='p1'>
                School management software is a comprehensive digital solution designed to efficiently handle various
                administrative and academic tasks within educational institutions. It encompasses features such as student
                information management, teacher administration, attendance tracking, examination and grade management,
                and parent communication. The software aims to streamline processes, enhance communication between stakeholders,
                and provide a centralized platform for organizing and managing diverse aspects of school operations.
                With modules like timetable management, financial administration, and reporting tools, school management
                software facilitates effective decision-making, resource optimization, and overall operational efficiency in
                educational institutions.
                </p>
            </div>
        </div>

        <div className='cont3' style={{width: "1200px", margin: "auto"}}>
            <div className='cont31'>
                <h1>Our Mission</h1>
                <p id='p12'>As a software company, our mission is to empower organizations and individuals through innovative and
                cutting-edge technological solutions. We are committed to delivering software products that not only meet
                but exceed the evolving needs and expectations of our clients. Our core focus lies in harnessing the power
                of technology to simplify complex processes, enhance efficiency, and foster growth. We strive to build robust,
                user-friendly applications that address the unique challenges faced by our diverse clientele.
                Our mission extends beyond just delivering software; we aim to forge lasting partnerships, providing continuous
                support and staying at the forefront of technological advancements to ensure our clients remain at the pinnacle
                of their respective industries. At the heart of our mission is a dedication to driving positive change through
                software solutions that inspire progress and transformation.</p>
            </div>

            <div className='cont32'>
                <h1>Our Vision</h1>
                <p id='p12'>As a forward-thinking software company, our vision is to be a catalyst for transformative change in the
                digital landscape. We envision a future where our innovative technologies not only revolutionize the way
                organizations operate but also inspire positive societal impact. Our goal is to continually push the boundaries
                of what is possible, fostering a culture of creativity, adaptability, and technological excellence. We aspire to
                be recognized as a global leader in providing cutting-edge software solutions that empower businesses and
                individuals to thrive in an ever-evolving digital world. Embracing a commitment to sustainability, inclusivity,
                and ethical practices, we aim to contribute meaningfully to the advancement of technology while prioritizing the
                well-being of our clients, employees, and the communities we serve. Our vision extends beyond short-term success,
                aiming to leave a lasting legacy of innovation and positive change in the realms of software development and
                technological advancement.</p>
            </div>
        </div>

        <div className='cont4'>
            <h1>Why Choose Us?</h1>
            <p id='p12'>Choosing our software means selecting a solution that goes beyond mere functionality. Our software stands out due
            to its commitment to excellence, innovation, and user satisfaction. We prioritize user-friendly interfaces and intuitive
            designs, ensuring a seamless and enjoyable experience for all users. Our products are not just tools; they are comprehensive
            solutions crafted to meet the specific needs of our clients. With a focus on cutting-edge technology, we guarantee that our
            software remains at the forefront of industry standards, providing a future-proof solution. Moreover, our customer support
            is unparalleled, offering timely assistance and continuous updates to adapt to evolving requirements. Security and
            reliability are embedded in the core of our software, ensuring the protection of sensitive data and the uninterrupted
            operation of critical processes. When you choose our software, you choose a trusted partner committed to your success,
            innovation, and long-term satisfaction.
            </p>
        </div>

        <div className='cont5'>
            <h1>Our Achievements</h1>
            <div className='cont51'>
                <div>
                    <img id='i89' src='https://www.callcentrehelper.com/images/stories/2021/03/mountain-top-celebration-760.jpg' alt="sdsd"></img>
                    <h4>Industry Recognition</h4>
                    <p id='p12'> Received multiple awards and accolades for innovation and excellence in software development.</p>
                </div>

                <div>
                    <img id='i89' src='https://img.freepik.com/premium-photo/customer-review-satisfaction-feedback-survey-concept_31965-6888.jpg' alt="sdsd"></img>
                    <h4>Client Satisfaction</h4>
                    <p id='p12'>Maintained consistently high customer satisfaction scores, with positive feedback on the usability
                    and effectiveness of our software solutions.</p>
                </div>

                <div>
                    <img id='i89' src='https://t3.ftcdn.net/jpg/06/03/43/86/360_F_603438646_lXIgmPU4Myc4UCkqihuhbaiVAhyl3Msr.jpg' alt="sdsd"></img>
                    <h4>Global Reach</h4>
                    <p id='p12'>Expanded our presence globally, with a diverse clientele spanning various industries and geographical locations.</p>
                </div>

                <div>
                    <img id='i89' src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/07/Philips-AI-e1530715287950.jpg' alt="sdsd"></img>
                    <h4>Cutting-Edge Technology</h4>
                    <p id='p12'>Pioneered the integration of cutting-edge technologies, staying ahead of industry trends and providing clients
                    with state-of-the-art solutions.</p>
                </div>
            </div>
        </div>

        <div className='cont6'>
            <h1>Our Experts</h1>
            <div className='cont61'>
                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p> Office Assistant<br></br>M.Com,BBA</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p> Office Assistant<br></br>M.Com,BBA</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p> Office Assistant<br></br>M.Com,BBA</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p> Office Assistant<br></br>M.Com,BBA</p>
                </div>
            </div>
        </div>

        <h1 id='headi'>Our Results</h1>
        <div className='cont7'>
            <h1>10th Results</h1>
            <div className='cont71'>
                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050624358004.png' alt="sdsd"></img>
                    <p>Percentage 56</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050624358004.png' alt="sdsd"></img>
                    <p>Percentage 60</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 79</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>
            </div>
        </div>

        <div className='cont7'>
            <h1>12th Results</h1>
            <div className='cont71'>
                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050751722427.png' alt="sdsd"></img>
                    <p>Percentage 56</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050624358004.png' alt="sdsd"></img>
                    <p>Percentage 60</p>
                </div>

                <div>
                    <img  src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 79</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>

                <div>
                    <img src='https://antlovebaba.com/school_management_api/assets/images/urtzsevs_smsDemo/14012023050654784512.png' alt="sdsd"></img>
                    <p>Percentage 90</p>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</>
)
}

export default Home;
