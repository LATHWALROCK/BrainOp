import { useState } from "react"
import { useDispatch } from "react-redux"
import { createPost } from "../services/operations/postAPI";

function Post() {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    })

    const dispatch = useDispatch()

    const { title, body} = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(title,body))
    
        setFormData({
          title: "",
          body: "",
        })
      }

    return (
      <div className="p-20">
        <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Title <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="text"
                name="title"
                value={title}
                onChange={handleOnChange}
                placeholder="Enter title"
                className="form-style w-full"
                />
            </label>
            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Body <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="text"
                name="body"
                value={body}
                onChange={handleOnChange}
                placeholder="Enter body"
                className="form-style w-full"
                />
            </label>
            <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
                Create Post
            </button>
        </form>
      </div>
    )
  }
  
  export default Post