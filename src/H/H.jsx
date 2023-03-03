import styles from './H.module.scss';

export default ({ _class, point = 1, children, inline, start, end, ...props }) => {
	
	
	const align =
		start ? 'start'
			: end ? 'end'
				: 'center'
	
	const classList = [
		styles.h,
		styles['h_' + align],
		_class
	].join(' ')

	const display =
		inline ? 'inline-block'
			: 'block'

	const data = {
		class: classList,
		style: {
			display
		},
		...props
	}

	switch(+point) {
		case  2: return <h2 {...data}>{children}</h2> 
		case  3: return <h3 {...data}>{children}</h3> 
		case  4: return <h4 {...data}>{children}</h4> 
		case  5: return <h5 {...data}>{children}</h5> 
		case  6: return <h6 {...data}>{children}</h6>
		default: return <h1 {...data}>{children}</h1> 
	}
}

 