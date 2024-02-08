import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App" >
      <div className='header'>
       <Navbar   data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JustAnotherUIKit</Navbar.Brand>


          <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="conatact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="blog">Blog</Nav.Link>
        </Nav.Item>
      </Nav>
        </Container>
      </Navbar>
      </div>

      <div className='body'>


              <div className='hero'>
      <h2 className="herotext  text-center mt-5" bg="dark" data-bs-theme="dark">
            It doesn’t matter what <span style={{color: "rgba(255, 255, 0, 1)", fontSize: "50px", fontFamily: "inter", fontWeight: "700", lineHeight: "60.51px"}}>JS <br /> Framework</span>  you work with.
            </h2>
            <p className="herotext  text-center">
            Our boilerplates works with it <span  style={{ color: "rgba(145, 210, 247, 1)"}}>out-of-the-box.</span>
            </p>
            <div className='herobtn'>
            <Button style={{backgroundColor: "rgba(255, 255, 0, 1)", color: "black", border: "1px", borderRadius: "3px", marginRight: "20px"}}>Get started <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></span></Button>
            <Button style={{ color: "rgba(255, 255, 0, 1),", border: "1px solid rgba(255, 255, 0, 1)", backgroundColor: "black",  borderRadius: "3px", marginRight: "20px" }}>See repo <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></span></Button>
            </div>
            </div>

            <div className='surpport'>
              <p className='text-center mb-4'>Supported and backed by:</p>


              <div className=''>
              <div className="container-fluid text-center mb-4">
    <div className="row row-cols-auto m-auto mb-3">
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
    </div>
    <div className="row row-cols-auto m-auto">
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
      <div className="col box">Lorem</div>
    </div>
              </div>

              <div className='text-center'>
                <h3>Less code. More product.</h3>
                <p>
                By using our UI Kit, we make sure you only get to <span style={{color: "rgba(255, 255, 0, 1)",}}> focus more</span> on <br />
                the other things that matter.
                </p>
              </div>
              
            </div>
            </div>

              <div className='about'>
                <h2>About</h2>
                  <div className='content'>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Cras pulvinar mattis nunc sed blandit libero volutpat. Odio ut enim blandit volutpat maecenas volutpat. Sapien eget mi proin sed libero enim. Amet facilisis magna etiam tempor. Facilisi cras fermentum odio eu feugiat pretium nibh. Nibh tellus molestie nunc non blandit. Integer enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus. Et pharetra pharetra massa massa ultricies mi quis. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Eget sit amet tellus cras adipiscing enim eu turpis. Volutpat commodo sed egestas egestas fringilla. Dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum posuere lorem ipsum dolor. Dolor magna eget est lorem ipsum dolor. Nibh nisl condimentum id venenatis.
                </p>

                <p>
                  Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Mi bibendum neque egestas congue quisque egestas diam in arcu. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Arcu dictum varius duis at consectetur lorem. In nibh mauris cursus mattis molestie. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Vivamus at augue eget arcu dictum varius. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Morbi quis commodo odio aenean sed adipiscing diam donec. Nullam vehicula ipsum a arcu. Arcu non odio euismod lacinia at. Odio tempor orci dapibus ultrices in iaculis.
                </p>

                <p>
                  Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Est velit egestas dui id. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Sed felis eget velit aliquet sagittis id consectetur. Consequat interdum varius sit amet mattis. Adipiscing elit pellentesque habitant morbi tristique. Elit eget gravida cum sociis natoque penatibus et magnis dis. Sit amet nisl purus in mollis nunc. In nulla posuere sollicitudin aliquam. Ut tortor pretium viverra suspendisse potenti. Facilisi etiam dignissim diam quis enim. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Pellentesque massa placerat duis ultricies lacus. Donec massa sapien faucibus et molestie. Ac turpis egestas sed tempus urna et pharetra. At lectus urna duis convallis convallis tellus. Egestas diam in arcu cursus euismod quis viverra. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel.
                </p>

                  </div>
              </div>

            <div className='contact'>
              <h2>Contact</h2>
                <p className='text-center'>Fill out this form to reach us.</p>

                <form className='form justify-content-center'>
                  <div className='container-fluid d-flex' style={{width: "604px"}}>
                    
    <input type="text" id="fname" placeholder="First Name" style={{width: "290px", backgroundColor: "rgba(217, 217, 217, 1)",  marginBottom: "20px"}}/>
    <input type="text" id="fname" placeholder="First Name" style={{width: "290px", backgroundColor: "rgba(217, 217, 217, 1)", marginLeft: "16px", marginBottom: "20px"}}/> <br />
    </div>
    <input type="email" id="emal" placeholder="Email"  style={{width: "604px", backgroundColor: "rgba(217, 217, 217, 1)", marginBottom: "20px"}} /> <br />
    <input type="tel" id="phone" placeholder="Phone (optional) "  style={{width: "604px", backgroundColor: "rgba(217, 217, 217, 1)",  marginBottom: "20px"}}/> <br />
    <textarea
      className="form-control"
      placeholder="Message"
      id="floatingTextarea2"
      style={{ height: "120px", width: "604px", backgroundColor: "rgba(217, 217, 217, 1)" }}
      defaultValue={""}
      />
      <input type='submit' value="save" placeholder='Save'  style={{width: "250px", backgroundColor: "rgba(145, 210, 247, 1)", fontWeight: "700", fontSize: "24px", textAlign: "center", marginLeft: "155px", marginTop: "15px"}}/>
  </form>

            </div>
      </div>


  <div className="container text-center" style={{color: "rgba(255, 255, 255, 1)", marginTop: "150px"}}>
    <div className='d-flex p-5 ' style={{justifyContent: 'space-between'}}>
      <p>
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
      </p>
      <p>
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
        <br />
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
      </p>
      <p>
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
      </p>
      <p>
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
        Ipsum <br />
        <br />
        <b style={{fontSize: "20px",}}>Lorem</b> <br />
        Ipsum <br />
        Ipsum <br />
      </p>
    </div>
  </div>

<footer className='text-center mt-4' style={{color: "rgba(255, 255, 255, 1)"}}>
  <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg></span>2024</p>
</footer>

    </div>
  );
}

export default App;
