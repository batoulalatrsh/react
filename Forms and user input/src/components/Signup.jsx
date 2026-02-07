import {
  isEmail,
  isNotEmpty,
  isEqualsToOtherValue,
  hasMinLength,
} from "../util/validation.js";
import { useActionState } from "react";

export default function Signup() {
  // const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   //Built-in object in the browser ,we need to pass form to it
  //   //all this input must have name properity
  //   setPasswordAreNotEqual(false);
  //   const fd = new FormData(event.target);
  //   const acquisitionChannel = fd.getAll("acquisition");
  //   const data = Object.fromEntries(fd.entries());
  //   data.acquisition = acquisitionChannel;

  //   if (data.password !== data["confirm-password"]) {
  //     setPasswordAreNotEqual(true);
  //     return;
  //   }
  //   // event.target.reset();
  // }

  /*------------------------------------------------------------- */
  //action in native HTML used to define the path ,But in React is update of onSubmit
  //and behind the scene call 'event.preventDefault();' ,func pass to action prop will take formData obj
  //also reSet form after submit
  function signupAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lasttName = formData.get("last-name");
    const role = formData.get("role");
    const term = formData.get("terms");
    const acquisitionChannel = formData.getAll("acquisition");

    const error = [];

    if (!isEmail(email)) {
      error.push("Invalid email address.");
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      error.push("Use munst provide a password with at least six characters");
    }

    if (!isEqualsToOtherValue(password, confirmPassword)) {
      error.push("Password so not match");
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lasttName)) {
      error.push("Please provide both first and last name");
    }
    if (!isNotEmpty(role)) {
      error.push("Please select a role.");
    }
    if (!term) {
      error.push("You must agree to the terms and conditions.");
    }

    if (acquisitionChannel.length === 0) {
      error.push("Please select at least one acquisition channel.");
    }

    if (error.length > 0) {
      return { errors: error };
    }
    return { errors: null };
    //To use this error to check inputs we use useActionState hook
  }

  useActionState();

  return (
    <form action={signupAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={6}
          />
          <div className="control-error">
            {/* {passwordAreNotEqual && <p>Passwords must matche.</p>} */}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
