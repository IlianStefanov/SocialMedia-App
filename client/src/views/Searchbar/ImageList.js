import React, { Component } from 'react';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import ImageCard from './ImageCard';

 class ImageList extends Component {
  render() {
    const { searchResults } = this.props;

    const searchImages = searchResults.map(image => 
      // <GridItem xs={12} sm={8} md={4} lg={4} key={image.id} className="searchbox-result">
          <ImageCard key={image.id} image={image} /> 
      // </GridItem>   
    );
    return (
      <div>
        {/* <GridContainer justify="center"> */}
        <div className="image-grid">
            {searchImages}
        </div>
          
        {/* </GridContainer> */}
      </div>
    )
  }
}


export default ImageList;