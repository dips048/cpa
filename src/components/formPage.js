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
  const URL = "https://3ct3mrc87g.execute-api.us-east-1.amazonaws.com/dev/sendMail"
  const onSubmit = async data => {
    console.log("formData", data)
    try {
      await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          bodyData: data,
          bodyCharset: "UTF-8",
          subjectdata: "AWS SES",
          subjectCharset: "UTF-8",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        setSuccess(true)
      })
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
          data-testid="name"
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
          type="text"
          id="phone"
          className="form-control"
          placeholder="Enter phone number"
          {...register("phone", { required: "Phone number is required.", pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (<>
          <div className={formError}>{errors.phone?.message}</div>
          {errors.phone?.type === 'pattern' && <div className={formError}>
            Enter valid phone number.
          </div>}
        </>
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
        <button type="submit" data-testid="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  )
  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      {success && (<p>Details was successfully submitted ...</p>)}
      {showForm}
    </div>
  )
}

export default FormPage
