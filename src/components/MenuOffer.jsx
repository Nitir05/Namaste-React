import { OFFER_ICON_URL } from "../utils/constants";

const MenuOffer = ({ offerData }) => {
  const { couponCode, description, header } = offerData;
  return (
    <div className="offer-slide">
      <button className="res-offer-wrapper">
        <div className="res-offer-container">
          <div className="res-offer-info-wrapper">
            <div className="res-offer-header-wrapper">
              <img src={OFFER_ICON_URL} className="res-offer-icon" />
              <p className="res-offer-header">{header}</p>
            </div>
            <div className="res-offer-code-wrapper">
              <span>{couponCode}</span>
              <span className="res-offer-description">{description}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuOffer;
