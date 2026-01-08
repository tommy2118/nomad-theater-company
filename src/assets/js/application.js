// =============================================================================
// STIMULUS APPLICATION
// Nomad Theater Company
// =============================================================================

import { Application } from "@hotwired/stimulus";

// Start Stimulus application
const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

// =============================================================================
// CONTROLLER REGISTRATION
// =============================================================================

import AnimateController from "./controllers/animate_controller.js";
application.register("animate", AnimateController);

import MobileNavController from "./controllers/mobile_nav_controller.js";
application.register("mobile-nav", MobileNavController);

import FormController from "./controllers/form_controller.js";
application.register("form", FormController);

export { application };
