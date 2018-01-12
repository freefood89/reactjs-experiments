import React from 'react'
import PropTypes from 'prop-types'

export const dispatcher = (dispatcher, Component) => {
	class Injectable extends React.Component {
		getChildContext() {
			return { dispatcher: dispatcher }
		}

		render() {
			return React.createElement(Component, this.props)
		}
	}

	Injectable.childContextTypes = {
		dispatcher: PropTypes.object.isRequired,
	}

	return Injectable
}

export const inject = Component => {
	class wrapper extends React.Component {
		render() {
			const props = {
				...this.props,
				dispatcher: this.context.dispatcher,
			}

			return React.createElement(Component, props)
		}
	}

	wrapper.contextTypes = {
		dispatcher: PropTypes.object.isRequired,
	}

	return wrapper
}
