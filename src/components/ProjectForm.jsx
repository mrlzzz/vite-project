import { useForm, Form } from "react-hook-form";

const ProjectForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

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
            <section className="bg-slate-400 shadow-md text-slate-950 mx-4 mb-4 p-2">
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
                <p>
                    <b>TODOs: </b>
                    <ul className="list-disc list-inside pt-1 [&>*]:cursor-default [&>*]:pl-2 [&>*]:transition-all duration-300">
                        <li className="hover:bg-slate-500">
                            Make the error messages into tooltips appearing on
                            the side of an <code>input</code> field
                        </li>
                        <li className="hover:bg-slate-500">
                            Add loading effects - disabled inputs until the
                            request is sent
                        </li>
                        <li className="hover:bg-slate-500"></li>
                        <li className="hover:bg-slate-500"></li>
                    </ul>
                </p>
            </section>

            <div className="flex flex-col w-96 shadow-md bg-slate-400 self-center p-2">
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
                            pattern: /^[A-Za-z]+$/i,
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === "required" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            First name is required!
                        </p>
                    )}
                    <label className="">Second name</label>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input"
                        {...register("secondName", {
                            required: true,
                        })}
                        aria-invalid={errors.secondName ? "true" : "false"}
                    />
                    {errors.secondName?.type === "required" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            Second name is required!
                        </p>
                    )}
                    <label>Age</label>
                    <input
                        type="number"
                        {...register("age", {
                            required: true,
                            min: 18,
                            max: 60,
                        })}
                        min="0"
                        max="100"
                        aria-invalid={errors.age ? "true" : "false"}
                    />
                    {errors.age?.type === "min" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            You have to be at least 18, cya.
                        </p>
                    )}
                    {errors.age?.type === "max" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            You can't be older then 60???
                        </p>
                    )}
                    {errors.age?.type === "required" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            Age is required!
                        </p>
                    )}
                    <label>Choose one</label>
                    <select
                        {...register("chooseOne")}
                        aria-invalid={errors.chooseOne ? "true" : "false"}
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
                            validate: "email",
                        })}
                    ></input>
                    {errors.email?.type === "required" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            Email is required!
                        </p>
                    )}
                    {errors.email?.type === "validate" && (
                        <p
                            className="bg-red-700 text-sm text-red-200"
                            role="alert"
                        >
                            That is not an Email!
                        </p>
                    )}
                    <input
                        className="hover:bg-slate-600 transition-all mt-2 border-opacity-50 border border-slate-600 bg-slate-500 text-slate-300"
                        type="submit"
                        value="Send!"
                    />
                </Form>
            </div>
        </>
    );
};

export default ProjectForm;
