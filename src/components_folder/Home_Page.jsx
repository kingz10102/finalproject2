import React from 'react'
import homepic from '../images/homesneaker.png';
import '../components_folder/Home_Page.css';

function Home_Page() {
    return (
        <header>
        <section class="section-a">
        <div class="holder">
          <div>
            <h1>SHINE IT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
              commodi placeat ea itaque modi corrupti corporis nam voluptas aut
              reprehenderit eaque culpa.
            </p>
            <a href="" class="btn">Read More</a>
          </div>
          <img src={homepic} alt="" />
        </div>
      </section>
      <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2">Style & Show</h3>
          <h2 class="text-5 mt-1">Lorem, ipsum dolor sit amet ikser</h2>
          <p class="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p>
        </div>
      </div>
    </section>
    <section class="section-c">
      <div class="gallery">
        <a href="https://www.converse.com/c/black-lives-matter" class="big"
          ><img src="https://images.unsplash.com/photo-1570132151768-55adb52c3887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""
        /></a>
        <a href="https://blacklivesmatter.com/" class="big"
          ><img src="https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&auto=format&fit=crop&w=2547&q=80" alt=""
        /></a>
        <a href="https://unsplash.com/photos/kA7Y-Ob0Ws0" class="big"
          ><img src="https://images.unsplash.com/photo-1596122787821-95c4255bb936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjkzMjh9&auto=format&fit=crop&w=668&q=80" alt=""
        /></a>
        <a href="https://images.unsplash.com/photo-1591623938927-f39a2ea92233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80" class="big"
          ><img src="https://images.unsplash.com/photo-1542219550-a204208f019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""
        /></a>
        <a href="https://images.unsplash.com/photo-1591623938927-f39a2ea92233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80" class="big">
          <img src="https://images.unsplash.com/photo-1549394471-3791da84f25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""
        /></a>
        <a href="https://unsplash.com/photos/psXeKJQcl2o" class="big"
          ><img src="https://images.unsplash.com/photo-1596644882941-2c7645aa4e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""
        /></a>
      </div>
    </section>

    <footer class="section-footer py-4 bg-secondary">
      <div class="container">
        <div>
          <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
          <a href="http://twitter.com">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>

      
</header>
    )
}

export default Home_Page