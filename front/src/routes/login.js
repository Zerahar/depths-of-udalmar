import { Form, Spinner, FloatingLabel, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
export default function Login() {
    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [regUserName, setRegUserName] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [loginProgress, setLoginProgress] = useState(false)
    const [registerProgress, setRegisterProgress] = useState(false)
    const login = (e) => {
        setLoginProgress(true)
        e.preventDefault()

        console.log("Trying to log in")
        if (loginUserName.length > 4 && loginPassword.length > 4) {
            fetch("http://localhost:8080/login/", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": loginUserName,
                    "password": loginPassword
                })
            })
                .then(res => res.status === 200 ? console.log("logged in") : console.log("failed"))
                .then(setLoginProgress(false))

        } else {
            alert("Check the input")
        }
    }
    const register = (e) => {
        setRegisterProgress(true)
        e.preventDefault()

        console.log("register")
        if (regUserName.length > 4 && regPassword.length > 4 && regEmail.includes("@")) {
            fetch("http://localhost:8080/user/", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": regUserName,
                    "password": regPassword,
                    "email": regEmail
                })
            })
                .then(res => res.text())
                .then(data => console.log(data))
                .then(setRegisterProgress(false))
        } else {
            alert("Check the input")
        }
    }
    return (
        <main>
            <Row>
                <Col className="border-right pe-5"><h1>Login</h1>
                    <Form id="loginForm" className="needs-validation" onSubmit={login}>

                        <Form.Group className="mb-3">
                            <FloatingLabel label="Username">
                                <Form.Control id="l-username" type="text" required value={loginUserName} onChange={e => setLoginUserName(e.target.value)} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Password">
                                <Form.Control id="l-password" type="password" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                            </FloatingLabel>
                        </Form.Group>

                        <button className="btn w-100" type="submit">
                            {loginProgress ?
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> : null}
                            Login</button>
                    </Form>
                </Col><Col className="ps-5">
                    <h1>Register</h1>
                    <Form id="registerForm" className="needs-validation" onSubmit={register}>

                        <Form.Group className="mb-3">
                            <FloatingLabel label="Username">
                                <Form.Control id="r-username" type="text" minLength="5" required value={regUserName} onChange={e => setRegUserName(e.target.value)} />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Email">
                                <Form.Control id="r-email" type="email" required value={regEmail} onChange={e => setRegEmail(e.target.value)} />
                            </FloatingLabel>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Password">
                                <Form.Control id="r-password" minLength="5" type="password" required value={regPassword} onChange={e => setRegPassword(e.target.value)} />
                            </FloatingLabel>

                        </Form.Group>

                        <button className=" btn w-100" type="submit">
                            {registerProgress ? <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> : null}
                            Register</button>
                    </Form>
                </Col></Row>
        </main>
    );
}
