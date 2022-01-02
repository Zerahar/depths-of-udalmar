import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"
import { useState } from "react"
export default function Login() {
    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [regUserName, setRegUserName] = useState("")
    const [regPassword, setRegPassword] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const login = (e) => {
        e.preventDefault()
        console.log("Login")

    }
    const register = (e) => {
        e.preventDefault()
        console.log("register")
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

                        <button className="btn w-100" type="submit">Login</button>
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

                        <button className=" btn w-100" type="submit">Register</button>
                    </Form>
                </Col></Row>
        </main>
    );
}
