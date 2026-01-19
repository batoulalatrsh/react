export default function UserInput({onChangeInput,input}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={input.initialInvestment}
            required
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={input.AnnualInvestment}
            required
            onChange={(event) =>
              onChangeInput("AnnualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={input.ExpectedReturn}
            required
            onChange={(event) =>
              onChangeInput("ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={input.Duration}
            required
            onChange={(event) =>
              onChangeInput("Duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
