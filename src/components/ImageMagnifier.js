/**
 * 图片放大镜组件
 *
 * Created by Freeman on 2016/9/9.
 */
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Magnifier from './Magnifier'
class ImageMagnifier extends Component {
  constructor(props) {
    super(props)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.portalElement = null
    this.state = {
      x: 0,
      y: 0,
      offsetX: -1,
      offsetY: -1
    }
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove)
    if (!this.portalElement) {
      this.portalElement = document.createElement('div')
      document.body.appendChild(this.portalElement)
    }
    this.componentDidUpdate()
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.body.removeChild(this.portalElement)
    this.portalElement = null
  }

  onMouseMove(e) {
    let offset = getOffset(this.refs.giraffe)
    //fix ie scrollX scrollY
    //fix ff not support e.x e.y
    this.setState({
      x: e.clientX + (window.scrollX || window.pageXOffset),
      y: e.clientY + (window.scrollY || window.pageYOffset),
      offsetX: e.clientX - offset.x,
      offsetY: e.clientY - offset.y
    })
  }

  componentDidUpdate() {
    ReactDOM.render(<Magnifier
        size={this.props.size}
        smallImage={this.props.image}
        zoomImage={this.props.zoomImage}
        cursorOffset={this.props.cursorOffset}
        {...this.state}
    />, this.portalElement)
  }

  render() {
    return (
        <img src={this.props.image.src} ref="giraffe"/>
    )
  }
}
ImageMagnifier.propTypes = {
  // the size of the magnifier window
  size: PropTypes.number,

  // the offset of the zoom bubble from the cursor
  cursorOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),

  // the size of the non-zoomed-in image
  image: PropTypes.shape({
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
ImageMagnifier.defaultProps = {
  size: 200,
  cursorOffset: {x: 0, y: 0}
}
function getOffset(el) {
  var x = 0
  var y = 0
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
    x += el.offsetLeft - el.scrollLeft
    y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { x, y }
}
export default ImageMagnifier