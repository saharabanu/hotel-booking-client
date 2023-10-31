import Image from "next/image";



const PromotionalTourCard = ({tour}) => {
  return (
    <>
       <div key={tour.id} className="theme_common_box_two img_hover ">
              <div className="theme_two_box_img ">
                <a href="/services">
                  <Image src={tour.img} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>{tour.title}
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/services">{tour.address}</a>
                </h4>
                <p>
                  <span className="review_rating">{tour.rating} Excellent</span>{" "}
                  <span className="review_count">({tour.review} reviewes)</span>
                </p>
                <h3>
                  ${tour.price}.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
    </>
  )
}

export default PromotionalTourCard