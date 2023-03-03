import styles from './Content.module.scss';

export default ({children, m = "10px 0 0 0", ...props}) => {
	const _style = {
		m
	} 
	return (
		<div
			class={styles.content} {...props}
			style={_style}
		>
			{children}
		</div>
	);
}

 