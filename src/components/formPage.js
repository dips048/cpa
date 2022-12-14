import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { formError } from "../styles/form-page.module.scss"
const FormPage = () => {
  const [success, setSuccess] = useState(false)
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
    console.log("formData", data)
    try {
      await fetch(URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        },
      })
      setSuccess(true)
    } catch (error) {
      console.log("Errors:", error)
      setError("submit", "submitError", `Doh! ${error.message}`)
    }
  }
  const onReset = () => {
    reset();
    setSuccess(false);
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
          {...register("name", { required: "Name is required." })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <div className={formError}>{errors.name?.message}</div>}
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
          {...register("email", { required: "Email address is required." })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <div className={formError}>{errors.email?.message}</div>
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
          {...register("phone", { required: "Phone number is required." })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <div className={formError}>{errors.phone?.message}</div>
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
          aria-invalid={errors.comments ? "true" : "false"}
          ></textarea>
        {errors.comments && (
          <div className={formError}>{errors.comments?.message}</div>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary mx-1" onClick={onReset}>
          reset
        </button>
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
      {success && (<p>Details was successfully submitted ...</p>)}
      {showForm}
    </div>
  )
}

export default FormPage