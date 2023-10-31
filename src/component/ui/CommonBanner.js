

const CommonBanner = ({title,links, currentPageUrl}) => {
  return (
    <>
<section id="common_banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="common_bannner_text">
                        <h2>{title}</h2>
                        <ul>
                            <li><a href="/" style={{color:"#ffffff91"}} >Home</a></li>

                            {links?.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} style={{ color: link.url === currentPageUrl ? 'white' : '#ffffff91' }}> ● {link.text}</a>
                  </li>
                ))}
                            
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default CommonBanner