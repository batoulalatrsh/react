import { use, useActionState, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context.jsx";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  //It used to optimistic the update ,first parameter is value needed to update
  // second is a function invoked by react , but here is write by you given a parameter by react which is "the old state used by useOptimistic "
  //this func return new state or value
  //set func should call in form actions
  const [optimisticVotes, setOptimisticVotes] = useOptimistic(
    votes,
    (prevVote, mode) => (mode === "up" ? prevVote + 1 : prevVote - 1),
  );

  async function upVoteAction() {
    setOptimisticVotes("up");
    await upvoteOpinion(id);
  }
  async function downVoteAction() {
    setOptimisticVotes("down");
    await downvoteOpinion(id);
  }

  const [upVoteFormState, upVoteFormAction, UpvotePending] = useActionState(
    upVoteAction,
    null,
  );

  const [downVoteFormState, downVoteFormAction, downvotePending] =
    useActionState(downVoteAction, null);

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>

      <form className="votes">
        <button
          formAction={upVoteFormAction}
          disabled={UpvotePending || downvotePending}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button
          formAction={downVoteFormAction}
          disabled={UpvotePending || downvotePending}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
