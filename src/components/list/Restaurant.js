import React from 'react';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {

  constructor() {
    super();

    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.props.hover(this.props.item.id)
  }

  render() {

    const { item, highlight } = this.props;
    const highlightClass = highlight ? 'hovered' : '';

    return(
      <div className={`row`}>
        <div className={`col-xs-12 restaurant-item ${highlightClass}`} onMouseEnter={this.onHover}>
          <div className={'col-xs-2 no-pad featured_image'}>
            <img src={item.thumb} alt={item.name} />
          </div>
          <div className={'col-xs-10 content'}>
            <h4>
              <a href={item.url} target={'_blank'}>
                { item.name }
              </a>
            </h4>
            <p className={'locality'}>
              { item.location.locality }
            </p>
            <p className={'address'}>
              { item.location.address }
            </p>
            <p className={'user-rating'}>
              <span className={'aggregate_rating'} style={{background: `#${item.user_rating.rating_color}`}} title={item.user_rating.rating_text}>
                { item.user_rating.aggregate_rating }
              </span>
              <span>
                { item.user_rating.votes } votes
              </span>
            </p>
          </div>
          <div className={`col-xs-12 meta text-left`}>
            <div className={'col-xs-3 key'}>
              Cuisines
            </div>
            <div className={'col-xs-9 value'}>
              { item.cuisines }
            </div>
            <div className={'col-xs-3 key'}>
              average cost for two
            </div>
            <div className={'col-xs-9 value'}>
              {item.currency}{ item.average_cost_for_two }
            </div>
          </div>
          <div className={'col-xs-12 no-pad action'}>
            <a href={item.photos_url} target={'_blank'} className={'btn btn-pics'}>
              View Photos
            </a>
            {
              !item.has_online_delivery
                ? null
                : (
                  <a href={`https://www.zomato.com/restaurant?tab=order&res_id=${item.id}`} target={'_blank'} className={'btn btn-order'}>
                    Order online
                  </a>
                )
            }
            <a href={item.menu_url} target={'_blank'} className={'btn btn-menu'}>
              View Menu
            </a>
          </div>
        </div>
      </div>
    )

  }

}

Restaurant.propTypes = {
  item: PropTypes.object,
  hover: PropTypes.func,
  highlight: PropTypes.bool
};

export default Restaurant;