import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

import { bindClassNames } from '../../../util/style-helpers';

const boundClassNames = bindClassNames('WarningIcon');

/**
 *
 * {"categories": ["visual design", "icons"], "extend": "Icon"}
 *
 * A warning Icon.
 */
const WarningIcon = React.createClass({
	propTypes: {
		...Icon.propTypes,
	},

	getDefaultProps() {
		return {
			viewBox: '0 0 18 18'
		};
	},

	render() {
		const {
			className,
			...passThroughs
		} = this.props;

		const scopedClasses = boundClassNames('~');

		return (
			<Icon
				{...passThroughs}
				className={classNames(className, scopedClasses)}
			>
				<path className={boundClassNames('triangle')} d='M9,1C8.2,1,7.4,1.6,7.1,2.3C5.9,4.3,1,12.9,0.5,13.7C-0.6,15.5,0.3,17,2.4,17h13.2 c2.1,0,3-1.5,1.9-3.3C14.9,9.2,13.7,6.9,11,2.3C10.6,1.5,9.9,1,9,1L9,1z'/>
				<rect x='8.1' y='5.4' fill='#ffffff' width='1.8' height='6.3'/>
				<rect x='8.1' y='12.6' fill='#ffffff' width='1.8' height='1.8'/>
			</Icon>
		);
	}
});

export default WarningIcon;
