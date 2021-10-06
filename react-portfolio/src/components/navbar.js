import React from 'react'

function Navbar ({ handlePageChange}) {
    return (
        <header class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-uppercase" href="#Home" onClick={() => handlePageChange('Home')} >Jeff Lynch</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id = "dontReact"></div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="btn btn-primary text-uppercase" aria-current="page" href="#aboutme" onClick={() => handlePageChange('aboutme')}>About Me</a>
                        <a class="btn btn-primary text-uppercase" href="#work" onClick={() => handlePageChange('work')}>Work</a>
                        <a class="btn btn-primary text-uppercase" href="#contactme" onClick={() => handlePageChange('contactme')}>Contact Me</a>
                        <a class="btn btn-primary text-uppercase" href="Resume.html">Resume</a>
                    </div> 
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar;