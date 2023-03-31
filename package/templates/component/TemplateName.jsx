import _styles from './templateName.module.scss';

export default ({children, ...props}) => {
	
	return (
		<div enigma-ui="" {...props}>
			{children}
		</div>
	);
}

