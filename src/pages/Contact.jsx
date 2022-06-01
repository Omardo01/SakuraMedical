import React from 'react'
import '../css/main.css'
const Contact = () => {
  return (
    <>
      <div className="container">
	      <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
		      <div className="h-100 tofront">
			      <div className="row justify-content-between">
				      <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
					      <p className="text-uppercase font-weight-bold">
						      <a className="text-danger" href="./blog.html">Pagina Principal</a>
					      </p>
					      <h1 className="display-4 secondfont mb-3 font-weight-bold">¡Contacto de Sakura Medical!</h1>
					      <p className="mb-3">
						      Somos la plataforma número uno sobre información para tu salud y la de tu familia, confia en nosotros, confia en Sakura Medical.
					      </p>
					      <div className="d-flex align-items-center">
						      <img className="rounded-circle" src="../img/avatar2.jpg" width="70" />
						      <small className="ml-2">Sakura Medical</small>
					      </div>
				      </div>
				      <div className="col-md-6 pr-0">
					      <img src="https://t2.uc.ltmcdn.com/es/posts/0/8/7/como_encontrar_las_mejores_formas_de_contacto_de_las_empresas_50780_orig.jpg" />
				      </div>
			      </div>
		      </div>
	      </div>
      </div>

      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
          <div className="col-lg-2 pr-4 mb-4 col-md-12">
            <div className="sticky-top text-center">
              <div className="text-muted">
                Comparte Aquí
              </div>
              <div className="share d-inline-block">
                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                  <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                  <a className="a2a_button_facebook"></a>
                  <a className="a2a_button_twitter"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-8">
          <article className="article-post">
          <p>
            Correo de Sakura Medikal: sakuramedikaloficial@gmail.com
          </p>
          <p>
            Numero Telefonico: 933-102-53-14
          </p>
          </article>
          <div className="border p-5 bg-lightblue">
            <div className="row justify-content-between">
              <div className="col-md-5 mb-2 mb-md-0">
                <h5 className="font-weight-bold secondfont">¡Suscribete ahora!</h5>
                Recibe información exclusiva y creada especialmente para tí.
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Ingresa Tu Correo Electronico" />
                  </div>
                  <div className="col-md-12 mt-2">
                    <button type="submit" className="btn btn-success btn-block">Subscribirte</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact