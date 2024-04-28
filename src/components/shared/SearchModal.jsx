import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchCollegeState } from "../../redux/features/SearchSlice";

const SearchModal = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        dispatch(setSearchCollegeState({ searchBy: data.search }));
        navigate("/search");
    };
    return (
        <dialog id="SearchModal" className="modal">
            <div className="modal-box w-full max-w-[90%] md:max-w-[60%] rounded-[6px] py-10">
                <h3 className="font-bold text-lg mb-4">Search Your College</h3>
                <form
                    className="flex flex-col md:flex-row justify-center items-center gap-2"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <input
                        type="text"
                        placeholder="College Name"
                        className="input input-bordered input-base-100 input-sm w-full rounded-sm"
                        {...register("search", {
                            required: {
                                value: true,
                                message: "Enter college name to search",
                            },
                        })}
                    />

                    <button
                        type="submit"
                        className="btn btn-xs sm:btn-sm rounded-sm btn-secondary transition-all duration-300 hover:bg-primary text-white hover:border-primary "
                    >
                        Search
                    </button>
                </form>
                {errors?.search && (
                    <p className="text-[13px] font-medium text-red-600 mt-2">
                        {errors?.search?.message}
                    </p>
                )}
            </div>

            {/* to close the modal by click outside */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default SearchModal;
