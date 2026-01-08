import { Controller } from "@hotwired/stimulus";

/**
 * Form Controller
 *
 * Handles contact form functionality including:
 * - Conditional field display based on inquiry type
 * - Form submission to Web3Forms
 *
 * Usage:
 *   <form data-controller="form" data-action="submit->form#submit">
 *     <select data-action="change->form#toggleConditional" data-form-target="inquiryType">
 *       ...
 *     </select>
 *     <div data-form-target="conditionalFields" class="hidden">
 *       ...
 *     </div>
 *   </form>
 */
export default class extends Controller {
  static targets = ["inquiryType", "conditionalFields", "submitButton"];
  static values = {
    accessKey: { type: String, default: "" },
  };

  toggleConditional() {
    if (!this.hasInquiryTypeTarget || !this.hasConditionalFieldsTarget) return;

    const showConditional = this.inquiryTypeTarget.value === "special-event";
    this.conditionalFieldsTarget.classList.toggle("hidden", !showConditional);
  }

  async submit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Disable submit button
    if (this.hasSubmitButtonTarget) {
      this.submitButtonTarget.disabled = true;
      this.submitButtonTarget.textContent = "Sending...";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        form.reset();
        this.showMessage("Thank you! Your message has been sent.", "success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      this.showMessage("Sorry, there was an error. Please try again.", "error");
    } finally {
      if (this.hasSubmitButtonTarget) {
        this.submitButtonTarget.disabled = false;
        this.submitButtonTarget.textContent = "Send Message";
      }
    }
  }

  showMessage(text, type) {
    // Create message element
    const message = document.createElement("div");
    message.className = `mt-4 p-4 rounded-lg text-center ${
      type === "success"
        ? "bg-ntc-gold/20 text-ntc-gold border border-ntc-gold"
        : "bg-red-900/20 text-red-400 border border-red-400"
    }`;
    message.textContent = text;

    // Insert after form
    this.element.insertAdjacentElement("afterend", message);

    // Remove after 5 seconds
    setTimeout(() => message.remove(), 5000);
  }
}
