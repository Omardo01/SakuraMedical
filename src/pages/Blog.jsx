import React from 'react'
import '../css/blog.css'

const Blog = () => {

  return (
    <>
      <div id="ctn-bars-search">
        <input type="text" id="inputSearch" placeholder="¿Qué deseas buscar?">
        </input>
      </div>

      <ul id="box-search">
        <li><a href="covid19.html"><i class="fas fa-search"></i>COVID</a></li>
        <li><a href="articulo.html"><i class="fas fa-search"></i>VIH</a></li>
        <li><a href="articulo.html"><i class="fas fa-search"></i>SIDA</a></li>
        <li><a href="articulo.html"><i class="fas fa-search"></i>SIKA</a></li>
        <li><a href="contacto.html"><i class="fas fa-search"></i>CONTACTO</a></li>
        <li><a href="nosotros.html"><i class="fas fa-search"></i>QUE ES SAKURA MEDIKAL</a></li>
        <li><a href="articulo.html"><i class="fas fa-search"></i>COVID - 19</a></li>
        <li><a href="articulo.html"><i class="fas fa-search"></i>COMO CURAR EL SIKA</a></li>
        <li><a href="covid.html"><i class="fas fa-search"></i>COMO EVITAR EL COVID</a></li>
      </ul>

      <div id="cover-ctn-search"></div>
        <div className="container-all" id="move-content">
          <div className="blog-container-cover">
            <div className="container-info-cover">
              <h1>¡Covid 19!</h1>
              <h2>Noticias Recientes</h2>
              <p>La enfermedad por coronavirus (COVID‑19) es una enfermedad infecciosa provocada 
                por el virus SARS-CoV-2. La mayoría de las personas que padecen COVID‑19 sufren 
                síntomas de intensidad leve a moderada y se recuperan sin necesidad de tratamientos 
                especiales. Sin embargo, algunas personas desarrollan casos graves y necesitan atención médica.</p>
            </div>
          </div>
          <div class="container-post">
            <input type="radio" id="TODOS" name="categories" value="TODOS" checked />
            <input type="radio" id="COVID" name="categories" value="COVID" />
            <input type="radio" id="VIH/SIDA" name="categories" value="VIH/SIDA" />
            <input type="radio" id="SIKA" name="categories" value="SIKA" />
            <div class="container-category">
              <label for="TODOS">TODOS</label>
              <label for="COVID">COVID</label>
              <label for="VIH/SIDA">VIH/SIDA</label>
              <label for="SIKA">SIKA</label>
            </div>

            <div class="posts">
              <div class="post" data-category="COVID">
                <div class="ctn-img">
                  <img src="img/articulos/covid.jpg" alt="" />
                </div>
                <h2>¿Que es el Covid-19 y como evitar el contagio?</h2>
                <span>26 febrero 2022 - 1:32 pm</span>
                <ul class="ctn-tag">
                    <li>COVID</li>
                </ul>
                <a href="covid19.html"><button>Leer más</button></a>
              </div>
              <div class="post" data-category="VIH/SIDA">
                <div class="ctn-img"><img src="img/articulos/vih.jpg" alt="" /></div>
                <h2>VIH/SIDA!, ¿Como se contagia?</h2>
                <span>26 septiembre 2021 - 5:14 pm</span>
                <ul class="ctn-tag">
                    <li>VIH/SIDA</li>
                </ul>
                <a href="#"><button>leer más</button></a>
              </div>
              <div class="post" data-category="SIKA">
                <div class="ctn-img"><img src="img/articulos/sika.jpg" alt="" /></div>
                <h2>¡SIKA! ¿Que es y como tratarlo?</h2>
                <span>25 abril 2022 - 3:30 pm</span>
                <ul class="ctn-tag">
                    <li>SIKA</li>    
                </ul>
                <a href="#"><button>leer más</button></a>
              </div>
            </div>
            
            <div class="video">
              <iframe width="860" height="480" src="https://www.youtube.com/embed/69-C4XRHtt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
    </>
  )
}

export default Blog