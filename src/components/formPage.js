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
  const URL =
    "https://0yvxpsbh4b.execute-api.us-east-1.amazonaws.com/production/contact_us"
  const onSubmit = async data => {
    console.log(data)
    try {
      await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
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
  const thankYou = (
    <div><h1>Thank you! We will contact you soon</h1></div>
  )
  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      {showForm}
    </div>
  )
}

export default FormPage