import { A } from '@solidjs/router';
import styles from './Link.module.scss';

export const NavLink = ({href = "/", _class = '', children, ...props}) => {
	const classList = [
		_class,
		styles.link,
		styles.link_nav
	].join(' ')

	return (
		
		<A href={href}>
			<span
				class={classList}
				{...props}
			>{children}
			</span>
		</A>
	)
}

export const Link = ({href = "/", _class = '', children, ...props}) => {
	const classList = [
		_class,
		styles.link
	].join(' ')

	return (
		<a
			href={href}
			title={href}
			{...props}>
			<span
				class={classList}
			>{children}</span>
		</a>
	)
}
 