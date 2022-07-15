import '../css/Image.css'
import {isWebpSupported} from 'react-image-webp/dist/utils';

const Image = ({ img, webp, alt }) => {
	function portrait() {
		if (webp) {
			return isWebpSupported() ? webp : img
		} else {
			return img
		}
	}

	return (
		<div className="img-container">
			<img src={portrait()} alt={alt} />
		</div>
	)
}

export default Image