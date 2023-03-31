import styles from './_h.module.scss';

export default ({ point = 1, children, inline, start, end, m = "", ...props }) => {
	
	
	const align =
		start ? 'start'
			: end ? 'end'
				: 'center'
	
	const display =
		inline ? 'inline-block'
			: 'block'

	const data = {
		class: styles[align],
		"enigma-ui": "title",
		style: {
			display,
			margin: m
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

 