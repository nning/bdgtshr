// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.

import 'core-js/fn/string/starts-with'

import ReactRailsUJS  from 'react_ujs'

const componentRequireContext = require.context('components', true)
ReactRailsUJS.useContext(componentRequireContext)

import '../components/budget/Budget.jsx'
