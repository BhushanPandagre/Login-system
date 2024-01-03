import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const Details = () => {


    const [logindata, setloginData] = useState([]);

    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const Birthday = () => {
        const getuser = localStorage.getItem("bhoju");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);

            console.log(user);

            setloginData(user);

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });
            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }

    }
    const userlogout = () => {
        localStorage.removeItem("bhoju");
        history("/login");
    }

    useEffect(() => {
        Birthday();
    }, []);

    return (
        <>

            {
                logindata.length === 0 ? "error" :
                    <>
                        <center>
                            <h1 >Details page </h1>
                            <h1>{logindata[0].name}</h1>

                            <Button onClick={userlogout}>LogOut</Button>

                        </center>

                        {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body> Whish you Many many returns of the day..!!! </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> : ""

                        }

                    </>

            }
        </>
    )
}
export default Details;