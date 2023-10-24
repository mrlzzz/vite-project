import { useForm, Form } from "react-hook-form";
import { useState } from "react";

const HeartCheckbox = (props) => (
  <span className="flex gap-2">
    <input
      className="peer relative mt-1 h-4 w-4 shrink-0 appearance-none "
      type="checkbox"
      {...props}
    />
    <svg
      className="pointer-events-none absolute mt-1 h-4 w-4 fill-slate-400 stroke-white peer-checked:!fill-red-500 peer-hover:fill-slate-500"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  </span>
);

const formatInputName = (inputName) => {
  let name = inputName.replace(/([a-z])([A-Z])/g, "$1 $2");
  name = name.toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
};

const ErrorFormMessage = ({ errorHandler, inputHandler }) => {
  let message = "";
  let input = formatInputName(inputHandler);

  switch (errorHandler[inputHandler]?.type) {
    case "required":
      message = `${input} is required!`;
      break;
    case "min":
      message = "You have to be at least 20";
      break;
    case "max":
      message = "Are you sure?";
      break;
    case "pattern":
      message = "That's not an " + input.toLowerCase();
      break;
  }
  if (Object.keys(errorHandler).length !== 0 && message !== "") {
    return <p className="bg-red-700 text-sm text-red-200">{message}</p>;
  }
};

const ProjectForm = () => {
  const initialToggle = [
    { id: 0, isToggled: true },
    { id: 1, isToggled: false },
    { id: 2, isToggled: false },
  ];
  const [toggledIds, setToggledIds] = useState(initialToggle);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
  });

  const handleToggle = (id) => {
    const updatedToggle = toggledIds.map((item) => {
      if (item.id === id) {
        // If the item's id matches the provided id, toggle the isToggled value.
        return { ...item, isToggled: !item.isToggled };
      }
      return item;
    });

    setToggledIds(updatedToggle);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        console.log("Data sent successfully");
      } else {
        // Handle errors
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  return (
    <>
      {/* Info section - for each exercise. Probably should be a separate component */}

      <section className="prose mx-8 mb-4 max-w-none bg-slate-400 p-8 text-slate-950 shadow-md lg:text-lg">
        <h1>Description</h1>
        <p>
          The following shows a form implemented using the{" "}
          <code className="text-slate-950">react-form-hook</code>. The hook
          provides form validation and focuses on the least amount of re-renders
          possible. On submit, the form data is sent to a local{" "}
          <code>nodejs</code> instance. The instance exposes a route to HTTP
          POST requests and enables CORS for the <code>origin</code> or this
          app. Moreover the <code className="text-slate-950">body-parser</code>{" "}
          middleware is used to enable parsing of both <code>JSON</code> and{" "}
          <code>url-encoded</code> payloads.
        </p>
        <p>
          <i>21/10/23</i> - I have added the silly heart-shaped checkboxes. To
          do so, I had to utilize <code>peer</code> utility class and its{" "}
          <code>peer:checked</code> and <code>peer:hover</code> pseudo classes .
          As well as, <code>svg</code> HTML element and{" "}
          <code>appearance-none</code> utility class for the checkbox{" "}
          <code>input</code> element.
        </p>
        <div>
          <ul className="list-inside list-disc pt-1 duration-300 [&>*]:cursor-default [&>*]:pl-2 [&>*]:transition-all">
            <b>TODO: </b>
            <li className="flex">
              <span>
                <HeartCheckbox
                  checked={toggledIds[0].isToggled}
                  onChange={() => {
                    handleToggle(0);
                  }}
                />
              </span>
              <span className="w-2"></span>
              <span className="mr-1 line-through decoration-[3px]">
                Make the error messages into tooltips appearing on the side of
                an input field
              </span>{" "}
              I like how it looks now.
            </li>
            <li className="flex">
              <span>
                <HeartCheckbox
                  checked={toggledIds[1].isToggled}
                  onChange={() => {
                    handleToggle(1);
                  }}
                />
              </span>
              <span className="w-2"></span>
              <span>
                Add loading effects - disabled inputs until the request is sent
              </span>
            </li>
            <li className="flex">
              <span>
                <HeartCheckbox
                  checked={toggledIds[2].isToggled}
                  onChange={() => {
                    handleToggle(2);
                  }}
                />
              </span>
              <span className="w-2"></span>
              Fix <code className="mx-1">validate()</code> in the email field{" "}
            </li>
          </ul>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div
          className={
            "flex w-96 flex-col self-center bg-slate-400 p-2 shadow-md"
          }
        >
          {isSubmitSuccessful ? (
            <div className="bg-green-700 p-2 text-sm text-green-200">
              Data sent!
            </div>
          ) : (
            ""
          )}

          <Form
            className=" flex flex-col lg:text-base [&>*]:p-2 [&>*]:placeholder:text-base [&>*]:placeholder:italic [&>label]:text-sm [&>label]:font-medium [&>label]:text-slate-700"
            onSubmit={handleSubmit(onSubmit)}
            control={control}
          >
            {/* Each form field has to have a registered name value, it's derived from the `register` function parameter */}
            <label className="">First name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input"
              {...register("firstName", {
                required: "This is required",
                maxLength: 20,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
              disabled={isSubmitting}
            />
            <ErrorFormMessage errorHandler={errors} inputHandler="firstName" />
            <label className="">Second name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input"
              {...register("secondName", {
                required: true,
              })}
              aria-invalid={errors.secondName ? "true" : "false"}
              disabled={isSubmitting}
            />
            <ErrorFormMessage errorHandler={errors} inputHandler="secondName" />
            <label>Age</label>
            <input
              type="number"
              {...register("age", {
                required: true,
                min: 20,
                max: 150,
              })}
              min="0"
              max="100"
              aria-invalid={errors.age ? "true" : "false"}
              disabled={isSubmitting}
            />
            <ErrorFormMessage errorHandler={errors} inputHandler="age" />
            <label>Choose one</label>
            <select
              {...register("chooseOne")}
              aria-invalid={errors.chooseOne ? "true" : "false"}
              disabled={isSubmitting}
            >
              <option value="Three">Three</option>
              <option value="Two">Two</option>
              <option value="One">One</option>
            </select>
            <label>Email</label>
            <input
              type="email"
              placeholder="chuj@doe.com"
              {...register("email", {
                required: true,
                pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                validate: "email",
              })}
              disabled={isSubmitting}
            ></input>
            <ErrorFormMessage errorHandler={errors} inputHandler="email" />
            <input
              className="mt-2 border border-slate-600 border-opacity-50 bg-slate-500 text-slate-300 transition-all hover:bg-slate-600"
              type="submit"
              value={isSubmitting ? "Submitting..." : "Send!"}
              disabled={isSubmitting}
            />
          </Form>
        </div>
        <div>
          <button
            className="ml-8 bg-slate-400 px-2 py-1 text-base shadow-md active:bg-slate-300 active:shadow-lg"
            onClick={() => {
              console.log(control);
              setValue("firstName", "Test");
              setValue("secondName", "Test");
              setValue("age", "25");
              setValue("email", "test@test.com");
            }}
          >
            Fill up
          </button>
          <button
            className="ml-8 bg-slate-400 px-2 py-1 text-base shadow-md active:bg-slate-300 active:shadow-lg"
            onClick={() => {
              console.log(control);
              setValue("firstName", "");
              setValue("secondName", "");
              setValue("age", "");
              setValue("email", "");
            }}
          >
            Empty
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
