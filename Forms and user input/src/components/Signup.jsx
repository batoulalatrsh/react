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
  function signupAction(prevformState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lasttName = formData.get("last-name");
    const role = formData.get("role");
    const term = formData.get("terms");
    const acquisitionChannel = formData.getAll("acquisition");

    const errors = [];

    if (!isEmail(email)) {
      errors.push("Invalid email address.");
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push("Use munst provide a password with at least six characters");
    }

    if (!isEqualsToOtherValue(password, confirmPassword)) {
      errors.push("Password so not match");
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lasttName)) {
      errors.push("Please provide both first and last name");
    }
    if (!isNotEmpty(role)) {
      errors.push("Please select a role.");
    }
    if (!term) {
      errors.push("You must agree to the terms and conditions.");
    }

    if (acquisitionChannel.length === 0) {
      errors.push("Please select at least one acquisition channel.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lasttName,
          role,
          acquisitionChannel,
          term,
        },
      };
    }
    return { errors: null };
    //To use this error to check inputs we use useActionState hook
  }

  //Second parameter is initial value if first funct dont execute yet

  //First parameter is initial value and returned value after execute the action, Secons parameter is enhanced version by react of initial action it pass
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form action={formAction} noValidate>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
          {/* <div className="control-error">
            {passwordAreNotEqual && <p>Passwords must matche.</p>}
          </div> */}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lasttName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValues?.role}
        >
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
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "google",
            )}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "friend",
            )}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              "other",
            )}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            defaultChecked={formState.enteredValues?.term}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

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
