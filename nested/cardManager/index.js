import "./assets/styles.scss";
import React, { Component } from "react";
import propTypes from "prop-types";
import CardList from "./lib/cardlist";
import { getDataset } from "@utils";

/**
 * @author Özer Yılmaztekin
 *
 * @description Responsible for sending request and creating card list.
 * @prop {dataset} string - a slug of the dataset which will be placed in enpoint.
 * @prop {limit} number - determines limitation of the item. Slices array according to the given limit
 *
 * ---- can be gave by users -----
 * @prop {direction} string - determines direction of the columns horizontal or vertical
 * @prop {bg} string - background color of the wrapper
 * @prop {cardBg} string - background color of the Card Component
 * @prop {gallery} boolean - if its true gallery icon will be displayed
 * @prop {textColor} string - custom hex color of Card.Title
 * @prop {fontSize} string - overrides font size of the Card.Title
 *
 * ---- Will be created dynamicly -----
 * @prop {cardRegistry} array - all items which returned response from the server
 * @prop {inherit} object - injects all instances of this keyword ( can be used for calling methods directly in child components )
 * @return {CardList} The Component responsible for creating card lists
 */

class CardManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardRegistry: null,
      inherit: null
    };
  }

  sendRequest() {
    // imajlar için ayrı request atmak gerekiyor.
    return getDataset(this.props.dataset).then(
      data => {
        if (this.props.limit) {
          return data.data.data.items.slice(
            0,
            this.props.limit
          );
        }
        return data.data.data.items;
      }
    );
  }

  async componentDidMount() {
    const registry = await this.sendRequest();
    this.setState({
      inherit: this.constructor.prototype,
      cardRegistry: registry
    });
  }

  render() {
    const { cardRegistry, inherit } = this.state;

    const {
      cardBg,
      imgClassName,
      border,
      textColor,
      fontSize,
      width,
      height,
      lineHeight,
      direction,
      dataset
    } = this.props;

    return (
      <CardList
        inherit={inherit}
        registry={cardRegistry}
        dataset={dataset}
        cardBg={cardBg}
        imgClassName={imgClassName}
        border={border}
        textColor={textColor}
        fontSize={fontSize}
        width={width}
        height={height}
        direction={direction}
        lineHeight={lineHeight}
      />
    );
  }
}

CardManager.propTypes = {
  dataset: propTypes.string.isRequired,
  limit: propTypes.number,
  direction: propTypes.string,
  bg: propTypes.string,
  cardBg: propTypes.string,
  gallery: propTypes.bool,
  textColor: propTypes.string,
  fontSize: propTypes.string,
  registry: propTypes.array,
  border: propTypes.string,
  imgClassName: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  lineHeight: propTypes.string
};

export default CardManager;
