import styles from './Flex.module.scss';

export default ({_class = '', column, children, gap = 10, ...props}) => {
	
	const classList = [
		styles.flex,
		column ? styles.column : '',
		_class
	]
	const classStr = classList.join(' ')
	
	const _style = {
		gap: gap + 'px'
	}

	return (
		<div
			style={_style}
			class={classStr}
			{...props}
		>
			{children}
		</div>
	);
}

 