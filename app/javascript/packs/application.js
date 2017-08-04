/* eslint no-console:0 */
//
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual
// application logic in a relevant structure within app/javascript and only use
// these pack files to reference that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the
// appropriate layout file, like app/views/layouts/application.html.erb

import 'core-js/fn/string/starts-with'

import RailsUJS from 'rails-ujs'
import ReactRailsUJS from 'react_ujs'

RailsUJS.start()

// Support component names relative to this directory:
const componentRequireContext = require.context('components', true)
ReactRailsUJS.useContext(componentRequireContext)

import ActionCable from 'actioncable'
window.cable = ActionCable.createConsumer()

import '../../assets/stylesheets'
import '../components/budget/Budget.jsx'
