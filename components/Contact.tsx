import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValue>()

    type FormValue = {
        name: string
        email: string
        message: string
    }

    type Config = {
        method: any
        url: any
        headers: {
            ContentType: string
        }
        data: any
    }

    const onFormSubmit = async (data: any) => {
        let config: Config = {
            method: 'POST',
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
        <div className="min-h-screen flex flex-col justify-center py-6 px-4">
            <div className='px-4'>
                <h2 className='text-blue-600  text-sm uppercase font-bold'>Contact</h2>
                <p className='text-base text-gray-800'>
                    I&apos;d love to here from you, leave me a message or shoot
                    me an email at contact@nasrah.dev
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        className="mb-0 space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="name"
                                {...register('name', {
                                    required: 'please enter your name',
                                    maxLength: {
                                        value: 20,
                                        message: 'name is too long',
                                    },
                                })}
                            />
                            {errors.name && (
                                <span className="text-red-600 block text-sm italic">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="email"
                                {...register('email', {
                                    required: 'please enter your email',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            'invalid email please try again',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-600 block text-sm italic">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="message"
                                {...register('message', {
                                    required: 'please leave me a message',
                                    maxLength: {
                                        value: 500,
                                        message:
                                            'maximum of 500 characters for message',
                                    },
                                })}
                            ></textarea>
                            {errors.message && (
                                <span className="text-red-600 block text-sm italic">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent 
                                rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
