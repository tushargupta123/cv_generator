import React from 'react';
import Templates from './Templates';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const CvTemplate = () => {
    return (
        <div>
            <div className="container home-p">
                <div className="row">
                    <div className="col" style={{ marginTop: 140 }}>
                        <h1>CV Templates for Every Job</h1>
                        <h5>Whether you’re looking for something creative and fun or elegant and powerful, we’ve got resume templates that can help you win the job. Once you’ve found your favorite design, use our super simple resume builder to make a standout application quickly and easily.</h5><br />
                        <NavLink to='/choose_template'><button className="btn home-btn" type="submit">Create my CV </button></NavLink>
                    </div>
                    <div className="col" style={{ marginTop: -70 }}>
                        <img src="https://resumebuild.com/wp-content/uploads/2020/10/Component.svg" className='template-img' />
                    </div>
                </div>
            </div>
            <div className="container home-p">
                <div className="row">
                    <h3>Choose from Our Best CV Templates</h3><hr /><br /><br />
                    <Templates />
                </div>
                <div className="template-p">
                    <div className="row">
                        <h3>The Benefits of Using Our CV Templates</h3><hr />
                        <div className="col">
                            <img src="https://resumebuild.com/wp-content/uploads/2020/10/Group-599.svg" /><br /><br />
                            <h4>Stronger first impressions</h4>
                            <p>You need to quickly communicate that your resume is worth a closer look. Our resume templates stand out as more visually interesting and informative than the competition.</p>
                        </div>
                        <div className="col">
                            <img src="	https://resumebuild.com/wp-content/uploads/2020/10/settings.svg" /><br /><br />
                            <h4>Better personalization</h4>
                            <p>Everything from the layout you choose to the skills you emphasize has an impact. Our resume templates allow you to easily create and customize your application so you can save time while still boosting your chances of getting hired.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="https://resumebuild.com/wp-content/uploads/2020/10/settings.svg" /><br /><br />
                            <h4>Professional designs</h4>
                            <p>Most of us aren’t designers, so being able to rest easy knowing you’re using a professionally designed resume template is a huge plus. This lets you put your focus where it should be: on your resume’s content.</p>
                        </div>
                        <div className="col">
                            <img src="https://resumebuild.com/wp-content/uploads/2020/10/download.svg" /><br /><br />
                            <h4>Formats that work</h4>
                            <p>Whether you need a single or double column design, whether you want color and personality or something simple and elegant, we have proven templates for you to choose from. Then, save your resume in whatever file format the employer needs, hassle-free.</p>
                        </div>
                    </div>
                </div><br /><br /><br />
                <div className="row">
                    <h3>Choosing the Right CV Format</h3><hr />
                    <p>Picking the perfect format for your needs is one of the most important choices you’ll make on your resume. For many recruiters, the wrong format may be a huge pet peeve and get you rejected almost immediately. But don’t worry, below, we break down everything you need to consider to make the right choice.</p><br /><br /><br /><br /><br />
                    <div className="col">
                        <h4 style={{ color: '#2fbe6e' }}>The chronological format</h4>
                        <p >As noted above, this is the most popular and all-around best format for most job applicants. It lists your work experience beginning with your most recent job at the top and details your accomplishments in each role. It’s the ideal choice if you’ve had continuous employment in your industry over time and therefore want to focus largely on that work history.</p><br />
                        <h4 style={{ color: '#2fbe6e' }}>
                            The functional format</h4>
                        <p>If you’d like to shift the emphasis of your resume away from your work history and towards your skills, a functional format may be a good option. Functional resumes group work experience and achievements according to the skills they’re connected to instead of listing them in chronological order. However, be aware that many recruiters are not fans of this approach so it’s always going to be somewhat risky to use.</p>
                    </div>
                    <div className="col">
                        <img src="https://resumebuild.com/wp-content/uploads/2020/10/Group-596.svg" style={{ marginLeft: 120 }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="	https://resumebuild.com/wp-content/uploads/2020/10/Group-597-1.svg" style={{ marginTop: -40 }} />
                    </div>
                    <div className="col">
                        <br /><h4 style={{ color: '#2fbe6e' }}>The combination (or hybrid) format</h4>
                        <p>If you don’t want to abandon the traditional chronological format but still want to put greater emphasis on how your work experience and achievements relate to your skills, a combination format is the best choice. This begins with sections focusing on your skills and achievements before including a standard chronological work history below.
                            <br />
                            Just bear in mind that if you’re using a format like to draw attention away from a gap in your work history, it’s better to simply explain the gap in a resume summary instead. This way, the recruiter won’t feel like you’re trying to hide something from them.</p>
                    </div>
                </div><br /><br /><br />
                <div className="row carousel-p">
                    <h3>See What Our Customers Think</h3><hr />
                    <Carousel className='carousel'>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></li>
                                    <li className="list-group-item carousel-heading">Anubhav gupta</li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarOutlined /></li>
                                    <li className="list-group-item carousel-heading">Abhishek kumar</li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></li>
                                    <li className="list-group-item carousel-heading">Devansh Jain</li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarOutlined /></li>
                                    <li className="list-group-item carousel-heading">Prince Prajapati</li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarOutlined /><StarOutlined /><StarOutlined /></li>
                                    <li className="list-group-item carousel-heading">Bhuwan Tiwari </li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments">
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item stars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></li>
                                    <li className="list-group-item carousel-heading">Anuj gupta</li>
                                    <li className="list-group-item">Easy to follow prompts and beautiful templates to choose from !! Started getting calls for job inteviews a few days after sumtting and applying the CV that I created with the help of this amazing website . It definately stand out.</li>
                                </ul>
                            </div>
                        </div>
                    </Carousel>
                </div><br /><br /><br />
                <div className="container home-p">
                    <div className="row">
                        <div className="col" style={{ marginTop: 40 }}>
                            <h1>Want Free Resume Examples & Samples?</h1>
                            <h5>Every job is different, so making the perfect resume isn’t always easy. That’s why we’ve compiled a huge array of quality resume examples and samples for you to browse.</h5><br />
                            <div className="row">
                                <div className="col">
                                    <div class="card" >
                                        <ol class="list-group list-group-flush">
                                            <li class="list-group-item">Accounting</li>
                                            <li class="list-group-item">Banking</li>
                                            <li class="list-group-item">Culinary</li>
                                            <li class="list-group-item">Dentistry</li>
                                            <li class="list-group-item">Education</li>
                                            <li class="list-group-item">Customer service</li>
                                            <li class="list-group-item">Engineering</li>
                                            <li class="list-group-item">Entertainment</li>
                                            <li class="list-group-item">Entry level</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="card" >
                                        <ol class="list-group list-group-flush">
                                            <li class="list-group-item">Executive</li>
                                            <li class="list-group-item">Food service</li>
                                            <li class="list-group-item">Fresher</li>
                                            <li class="list-group-item">Graphic web designer</li>
                                            <li class="list-group-item">Government</li>
                                            <li class="list-group-item">Healthcare service</li>
                                            <li class="list-group-item">Information technology</li>
                                            <li class="list-group-item">Management</li>
                                            <li class="list-group-item">Marketing</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ marginTop: -20 }}>
                            <img src="https://resumebuild.com/wp-content/uploads/2020/10/6-1-1.svg" className='template-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CvTemplate