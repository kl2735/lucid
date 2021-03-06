import React from 'react';
import classNames from 'classnames';
import { bindClassNames } from '../../../util/style-helpers';
import Icon from '../Icon';

const boundClassNames = bindClassNames('CaretIcon');

const {
	oneOf,
} = React.PropTypes;

/**
 *
 * {"categories": ["visual design", "icons"], "extend": "Icon"}
 *
 * A caret icon.
 */
const CaretIcon = React.createClass({
	propTypes: {
		...Icon.propTypes,
		/**
		 * direction variations of the icon
		 */
		direction: oneOf([
			'up',
			'down',
			'left',
			'right',
		]),
	},

	getDefaultProps() {
		return {
			direction: 'down',
			viewBox: '0 3 16 8',
			size: 16
		};
	},

	render() {
		const {
			className,
			direction,
			size,
			...passThroughs
		} = this.props;

		const scopedClasses = boundClassNames('~', {
			'is-down': direction === 'down',
			'is-up': direction === 'up',
			'is-left': direction === 'left',
			'is-right': direction === 'right',
		});

		return (
			<Icon
				{...passThroughs}
				className={classNames(className, scopedClasses)}
				size={size}
			>
				<path d='M1.234,4.408l6.718,7.184l6.813-7.184H1.234z' />
			</Icon>
		);
	}
});

export default CaretIcon;
