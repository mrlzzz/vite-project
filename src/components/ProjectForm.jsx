import { useForm, Form } from "react-hook-form";
import { useState } from "react";

const HeartCheckbox = (props) => (
    <span className="flex gap-2">
        <input
            className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 "
            type="checkbox"
            {...props}
        />
        <svg
            className="animate-pulse absolute w-4 h-4 pointer-events-none stroke-white fill-slate-400 peer-hover:fill-slate-500 peer-checked:!fill-red-500 mt-1"
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
            const response = await fetch(
                "http://localhost:3000/api/form-submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

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

            <section className="bg-slate-400 shadow-md text-slate-950 mx-4 mb-4 p-2">
                <b>Description</b>
                <p>
                    The following shows a form implemented using the
                    <code className="text-slate-950"> react-form-hook</code>.
                </p>

                <p>
                    The hook provides form validation and focuses on the least
                    amount of re-renders possible.
                </p>
                <p>
                    On submit, the form data is sent to the local Express
                    instance. The instance exposes a route to HTTP POST requests
                    and enables CORS for the <code>origin</code> or this app.
                    Moreover the{" "}
                    <code className="text-slate-950">body-parser</code>{" "}
                    middleware is used to enable parsing of both{" "}
                    <code>JSON</code> and <code>url-encoded</code> payloads.
                </p>
                <br />
                <div>
                    <b>TODO</b>
                    <ul className="list-disc list-inside pt-1 [&>*]:cursor-default [&>*]:pl-2 [&>*]:transition-all duration-300">
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
                            <span className="line-through decoration-[3px] mr-1">
                                Make the error messages into tooltips appearing
                                on the side of an input field
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
                                Add loading effects - disabled inputs until the
                                request is sent
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
                            Fix <code className="mx-1">validate()</code> in the
                            email field{" "}
                        </li>
                    </ul>
                </div>
            </section>

            <div
                className={
                    "flex flex-col w-96 shadow-md bg-slate-400 self-center p-2"
                }
            >
                {isSubmitSuccessful ? (
                    <div className="bg-green-700 text-sm text-green-200 p-2">
                        Data sent!
                    </div>
                ) : (
                    ""
                )}

                <Form
                    className="flex flex-col [&>*]:p-2 [&>label]:text-sm [&>label]:text-slate-700 [&>*]:placeholder:italic"
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
                    <ErrorFormMessage
                        errorHandler={errors}
                        inputHandler="firstName"
                    />
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
                    <ErrorFormMessage
                        errorHandler={errors}
                        inputHandler="secondName"
                    />
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
                    <ErrorFormMessage
                        errorHandler={errors}
                        inputHandler="age"
                    />
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
                        {...register("email", {
                            required: true,
                            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            validate: "email",
                        })}
                        disabled={isSubmitting}
                    ></input>
                    <ErrorFormMessage
                        errorHandler={errors}
                        inputHandler="email"
                    />
                    <input
                        className="hover:bg-slate-600 transition-all mt-2 border-opacity-50 border border-slate-600 bg-slate-500 text-slate-300"
                        type="submit"
                        value={isSubmitting ? "Submitting..." : "Send!"}
                        disabled={isSubmitting}
                    />
                </Form>
            </div>
        </>
    );
};

export default ProjectForm;
