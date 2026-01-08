import { Controller } from "@hotwired/stimulus";

/**
 * Animate Controller
 *
 * Replaces AOS (Animate On Scroll) with a Stimulus-based IntersectionObserver solution.
 *
 * Usage:
 *   <body data-controller="animate">
 *     <div data-animate="fade-up">Content animates when scrolled into view</div>
 *     <div data-animate="fade-up" data-animate-delay="100">With delay</div>
 *   </body>
 */
export default class extends Controller {
  connect() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.animateDelay || 0;
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
            // Only animate once
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Find all elements with data-animate attribute
    this.animatedElements = this.element.querySelectorAll("[data-animate]");
    this.animatedElements.forEach((el) => {
      el.classList.add("animate-on-scroll");
      this.observer.observe(el);
    });
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
