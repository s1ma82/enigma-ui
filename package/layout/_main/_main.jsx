import _styles from './_main.module.scss';

export default ({ width, children, ...props}) => (
	<main enigma-ui-layout="main" style={{maxWidth: width}} {...props}>
		{children}
	</main>
)
 