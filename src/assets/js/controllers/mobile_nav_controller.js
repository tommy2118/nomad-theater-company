import { Controller } from "@hotwired/stimulus";

/**
 * Mobile Nav Controller
 *
 * Handles mobile navigation toggle functionality.
 *
 * Usage:
 *   <header data-controller="mobile-nav">
 *     <button data-action="click->mobile-nav#toggle" data-mobile-nav-target="button">
 *       <svg data-mobile-nav-target="iconOpen">...</svg>
 *       <svg data-mobile-nav-target="iconClose" class="hidden">...</svg>
 *     </button>
 *     <div data-mobile-nav-target="menu" class="hidden">
 *       Navigation links...
 *     </div>
 *   </header>
 */
export default class extends Controller {
  static targets = ["menu", "button", "iconOpen", "iconClose"];

  connect() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.sync();
  }

  open() {
    this.isOpen = true;
    this.sync();
  }

  close() {
    this.isOpen = false;
    this.sync();
  }

  sync() {
    // Toggle menu visibility
    if (this.hasMenuTarget) {
      this.menuTarget.classList.toggle("hidden", !this.isOpen);
    }

    // Toggle icons
    if (this.hasIconOpenTarget) {
      this.iconOpenTarget.classList.toggle("hidden", this.isOpen);
    }
    if (this.hasIconCloseTarget) {
      this.iconCloseTarget.classList.toggle("hidden", !this.isOpen);
    }

    // Update aria-expanded
    if (this.hasButtonTarget) {
      this.buttonTarget.setAttribute("aria-expanded", this.isOpen);
    }
  }
}
