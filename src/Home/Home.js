import React, { useState, useEffect } from 'react';
import './Home.css';
import showToast from 'crunchy-toast';
import SignUp from '../Loginpage/SignUp'

export default function Home() {

    const [login, setLogin] = useState([
        {
            name: 'Rutuja Tikkal',
            mobile: '9158569290',
            email: 'rutu@gmail.com'
        }
    ]);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [editIndex, setEditIndex] = useState('-1')
    const [isEditMode, setIsEditMode] = useState(false)

    const userDetails = () => {

        if (!name) {
            showToast('Please enter name', 'error', 3000)
            return;
        }
        if (!email) {
            showToast('please enter email', 'error', 3000)
            return;
        }
        if (!mobile) {
            showToast('Please enter mobile number', 'error', 3000)
            return;
        }
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }

        const newContacts = [...login, obj];
        setLogin([newContacts]);
        saveToLocalStorage(newContacts);

        showToast('User Login Sucessfully', 'success', 3000)

        setName('');
        setEmail('');
        setMobile('');
    };
    const editlogin = () => {
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }

        login[editIndex] = obj;

        setLogin([...login]);

        saveToLocalStorage(login);

        showToast('Contact edited successfully', 'success', 3000)

        setName('');
        setEmail('');
        setMobile('');

        setIsEditMode(false);
    }
    useEffect(() => {
        loadFromLocalStorage()
    });

    const saveToLocalStorage = (Data) => {
        localStorage.setItem('login', JSON.stringify(Data))
    }

    const loadFromLocalStorage = () => {
        const loginData = JSON.parse(localStorage.getItem('login'));

        if (loginData) {
            setLogin(loginData);
        }
    }

    return (<>
        <h1 className='app-title'>SignUp</h1>

        <div className='app-body'>

            <div className='contact-container'>
                <h2 className='sub-heading'>Login Users</h2>
                {
                    login.map((contacts, index) => {
                        return (
                            <>
                                <SignUp key={index}
                                    name={contacts.name}
                                    mobile={contacts.mobile}
                                    email={contacts.email}
                                    index={index} />
                            </>
                        )
                    })
                }
            </div>
            <div className='add-contact-container'>

            

                <div class="container">
                    <div className='main-container'>
                        <h1>Register</h1><hr />

                        <div className='box1'>
                            <div>
                                <span id="head1">First Name:{name}</span><br></br>
                                <input type="text" id="name1"  onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}/>
                            </div>

                            <div>
                                <span id="head2">Last Name:{name}</span><br></br>
                                <input type="text" id="name1" onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}/></div>
                        </div>

                        <span id="name">Email :{email} </span>
                        <br></br>
                        <input type="email"  required id="text"   onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}/>

                        <br></br><br></br>

                        <span id="name">Mobile No. :{mobile} </span>
                        <br></br>
                        <input type="tel" required id="text"   onChange={(e) => {
                                setMobile(e.target.value);
                            }}
                            value={mobile}/>

                        <br></br><br></br>

                        <div className='box1'>
                            <div>
                                <span id="head1">Password</span><br></br>
                                <input type="password" id="name1" />
                            </div>
                            <div><span id="head2">Confirm Passsword</span><br></br>
                                <input type="password" id="name1" /></div>
                        </div>

                        <br></br>
                        <button type="submit" id="submitbtn" onClick={() => {
                            isEditMode ? editlogin() : userDetails()
                        }
                        }>login</button>
                        <br></br><br></br>

                        <span id="register">Already have an account? <a href='./LoginPage.js'>
                            Login </a>
                        </span>
                    </div>



                    <div></div>

                </div>




            </div>

        </div>


    </>
    )
}
