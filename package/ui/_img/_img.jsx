import _styles from './_img.module.scss';

export default ({ width = 150, height = 150, src, title = null, ...props}) => {
	const imgProps = {
		src,
		height,
		width
	}

	if (title) imgProps.title = title
	
	return (
		<img enigma-ui="img" {...imgProps} />
	);
}

