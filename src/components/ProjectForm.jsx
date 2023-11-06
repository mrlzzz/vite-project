import { useForm, Form } from "react-hook-form";
import { useState, useContext } from "react";
import { ToastContext } from "../context/ToastContext";

const HeartCheckbox = (props) => (
  <span className="flex gap-2">
    <input
      className="peer relative mt-1 h-4 w-4 shrink-0 appearance-none "
      type="checkbox"
      {...props}
    />
    <svg
      className="pointer-events-none absolute mt-1 h-4 w-4 fill-slate-400 stroke-white peer-checked:!fill-red-300 peer-hover:fill-slate-500"
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
    return (
      <div className="bg-red-700 text-sm text-red-200">
        <p>{message}</p>
      </div>
    );
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

  const { addToast } = useContext(ToastContext);

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
        addToast(
          "success",
          "Data sent successfully!",
          "Data sent successfully!",
        );
      } else {
        // Handle errors
        console.error("Error sending data");
        addToast("error", "Error sending data", "Error sending data");
      }
    } catch (error) {
      console.error("Network error: ", error);
      addToast("error", "Network error", error.toString());
    }
  };

  return (
    <>
      {/* Info section - for each exercise. Probably should be a separate component */}

      <section className="prose mx-2 max-w-none bg-slate-400 p-4 text-slate-950 shadow-md lg:mx-8 lg:mb-4 lg:p-8 lg:text-lg">
        <h2>Description</h2>
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
          <ul className="pt-1 duration-300 lg:list-inside lg:list-disc [&>*]:cursor-default [&>*]:transition-all lg:[&>*]:pl-2">
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
              <span className="mr-1 ">
                Make the error messages into tooltips appearing on the side of
                an input field
              </span>{" "}
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
      <div className=" mb-8 mt-4 w-full self-center bg-slate-600 py-1  pr-2 text-right font-mono text-sm font-light italic text-slate-400 lg:pr-10">
        {" "}
        react-form-hook
      </div>
      <div className="mx-2 flex flex-col lg:mx-0  lg:items-center lg:justify-center">
        <div
          className={
            "flex flex-col bg-slate-400 p-2 shadow-md lg:w-96 lg:self-center"
          }
        >
          {isSubmitSuccessful ? (
            <div className="bg-green-700 p-2 text-sm text-green-200">
              Data sent! (Deprecated due to Toast Notifications)
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
              placeholder="john@doe.com"
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
        <div className="mt-1 flex w-full justify-center gap-1">
          <button
            className=" bg-slate-400 px-4 py-2 text-base shadow-md hover:brightness-110 active:shadow-lg active:brightness-90"
            onClick={() => {
              setValue("firstName", "Test");
              setValue("secondName", "Test");
              setValue("age", "25");
              setValue("email", "test@test.com");
            }}
          >
            Fill up
          </button>
          <button
            className=" bg-slate-400 px-4 py-2 text-base shadow-md hover:brightness-110 active:shadow-lg active:brightness-90"
            onClick={() => {
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
