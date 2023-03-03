import styles from './Btn.module.scss';

export default ({...props}) => {
	const {_class, children} = props
	
	return (
		<button class={styles.btn + ` ${_class}`} {...props}>
			{children}
		</button>
	);
}

 