/**
 * Created by Freeman on 2016/9/9.
 */
import React, {PropTypes} from 'react'
const Magnifier = (props) => {
  
  let halfSize = props.size / 2
  let magX = props.zoomImage.width / props.smallImage.width
  let magY = props.zoomImage.height / props.smallImage.height
  let bgX = -(props.offsetX*magX - halfSize)
  let bgY = -(props.offsetY*magY - halfSize)
  let isVisible = props.offsetY < props.smallImage.height &&
      props.offsetX < props.smallImage.width &&
      props.offsetY > 0 &&
      props.offsetX > 0

  return (
      <div style={{
        position: 'absolute',
        display: isVisible ? 'block' : 'none',
        top: props.y,
        left: props.x,
        width: props.size,
        height: props.size,
        marginLeft: -halfSize + props.cursorOffset.x,
        marginTop: -halfSize + props.cursorOffset.y,
        backgroundColor: 'white',
        borderRadius: props.size,
        boxShadow: '1px 1px 6px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          width: props.size,
          height: props.size,
          backgroundImage: `url(${props.zoomImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `${bgX}px ${bgY}px`,
          borderRadius: props.size
        }} />
      </div>
  )

}
Magnifier.propTypes = {
  // the size of the magnifier window
  size: PropTypes.number.isRequired,

  // x position on screen
  x: PropTypes.number.isRequired,

  // y position on screen
  y: PropTypes.number.isRequired,

  // x position relative to the image
  offsetX: PropTypes.number.isRequired,

  // y position relative to the image
  offsetY: PropTypes.number.isRequired,

  // the offset of the zoom bubble from the cursor
  cursorOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,

  // the size of the non-zoomed-in image
  smallImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,

  // the size of the zoomed-in image
  zoomImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired
}

export default Magnifier