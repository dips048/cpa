import React from "react"
import { useForm } from "react-hook-form"
import { formError } from "../styles/form-page.module.scss"
const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm()
  const URL="https://39oheyu6ui.execute-api.us-east-1.amazonaws.com/dev/sendMail"
  const onSubmit = async data => {
    try {
      await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          bccEmailAddresses: [],
          ccEmailAddresses: [],
          toEmailAddresses: ["dp150330@gmail.com"],
          bodyData: JSON.stringify(data),
          bodyCharset: "UTF-8",
          subjectdata: "AWS SES",
          subjectCharset: "UTF-8",
          sourceEmail: "dipeshpatel048@gmail.com",
          replyToAddresses: ["dipeshpatel048@gmail.com"],
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        },
      })
      reset()
    } catch (error) {
      console.log("Errors:", error)
      setError("submit", "submitError", `Doh! ${error.message}`)
    }
  }
  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter your name"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <div className={formError}>Please Enter Name</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="form-control"
          placeholder="your@email.address"
          {...register("email", { required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className={formError}>Please Enter Email Address</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          name="phone"
          type="number"
          id="phone"
          className="form-control"
          placeholder="Enter phone number"
          {...register("phone", { required: true })}
        />
        {errors.phone && errors.phone.type === "required" && (
          <div className={formError}>Please Enter Phone Number</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          name="comments"
          className="form-control"
          placeholder="Leave a comment here"
          {...register("comments")}
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  )
  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      {showForm}
    </div>
  )
}

export default FormPage
