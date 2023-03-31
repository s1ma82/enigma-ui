import _styles from './_templateName.module.scss';

export default ({children, ...props}) => {
	
	return (
		<div enigma-ui="" {...props}>
			{children}
		</div>
	);
}

