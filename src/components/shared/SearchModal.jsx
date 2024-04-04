import React from "react";

const SearchModal = () => {
    return (
        <dialog id="SearchModal" className="modal">
            <div className="modal-box w-full max-w-[90%] md:max-w-[60%] rounded-[6px] py-10">
                <h3 className="font-bold text-lg mb-4">Search Your College</h3>
                <form className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <input
                        type="text"
                        placeholder="College Name"
                        className="input input-bordered input-base-100 input-sm w-full rounded-sm"
                    />
                    <button
                        type="submit"
                        className="btn btn-xs sm:btn-sm rounded-sm btn-primary "
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* to close the modal by click outside */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default SearchModal;
