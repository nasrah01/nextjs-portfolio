import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onFormSubmit = async (data) => {
        let config = {
            method: 'post',
            url: `http://localhost:3000/api/contactform`,
            headers: {
                ContentType: 'application/json',
            },
            data: data,
        }

        try {
            const response = await axios(config)
            if (response.status === 200) {
                reset()
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            {...register('name', {
                                required: 'please enter your name',
                                maxLength: 20,
                            })}
                        />
                        {errors.name && (
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            {...register('email', {
                                required: 'please enter your email',
                            })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            {...register('message', {
                                required: 'please leave me a message',
                            })}
                        ></textarea>
                        {errors.message && (
                            <span>{errors.message.message}</span>
                        )}
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
